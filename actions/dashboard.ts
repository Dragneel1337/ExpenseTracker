'use server';

import prisma from '@/lib/prisma';
import { auth } from '@clerk/nextjs/server';
import { th } from 'date-fns/locale';
import { revalidatePath } from 'next/cache';

interface AccountData {
	balance: string;
	isDefault: boolean;
	name: string;
	type: string;
}

const validateTransaction = (obj: any) => {
	const serialized = { ...obj };

	if (obj.balance) {
		serialized.balance = obj.balance.toNumber();
	}
};

export async function createAccount(data: AccountData) {
	try {
		const { userId } = await auth();
		if (!userId) throw new Error('Unauthorized');

		const user = await prisma.user.findUnique({
			where: {
				clerkUserId: userId,
			},
		});
		if (!user) {
			throw new Error('User not found');
		}

		const balanceFloat = parseFloat(data.balance);
		if (isNaN(balanceFloat) || balanceFloat < 0) {
			throw new Error('Invalid balance value');
		}

		const existingAccount = await prisma.account.findMany({
			where: {
				userId: user.id,
			},
		});

		const shouldBeDefault = existingAccount.length === 0 ? true : data.isDefault;

		if (shouldBeDefault) {
			await prisma.account.updateMany({
				where: {
					userId: user.id,
					isDefault: true,
				},
				data: {
					isDefault: false,
				},
			});
		}

		const newAccount = await prisma.account.create({
			data: {
				name: data.name,
				type: data.type as any,
				balance: balanceFloat,
				isDefault: shouldBeDefault,
				userId: user.id,
			},
		});

		const validateAccount = validateTransaction(newAccount);

		revalidatePath('/dashboard');
		return { success: true, data: validateAccount };
	} catch (error) {
		throw new Error(`Failed to create account: ${error instanceof Error ? error.message : 'Unknown error'}`);
	}
}
