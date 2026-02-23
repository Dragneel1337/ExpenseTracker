'use client';

import { useState } from 'react';
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from './drawer';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createAccountSchema } from '@/app/lib/formSchema';
import { Input } from './input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './select';
import { Switch } from './switch';
import { Button } from './button';

const CreateAccountDrawer = ({ children }: { children: React.ReactNode }) => {
	const [open, setOpen] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		watch,
		reset,
	} = useForm({
		resolver: zodResolver(createAccountSchema),
		defaultValues: {
			name: '',
			type: 'CURRENT',
			balance: '',
			isDefault: false,
		},
	});

	const onSubmit = async (data: any) => {
		console.log(data);
	};

	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>{children}</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Create Account</DrawerTitle>
				</DrawerHeader>
				<div className="px-4 pb-4">
					<form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
						<div className="space-y-2">
							<label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">
								Account Name
							</label>
							<Input id="name" placeholder="e.g., Main Checking" {...register('name')} />
							{errors.name && <p className="text-red-500">{errors.name.message}</p>}
						</div>
						<div className="space-y-2">
							<label htmlFor="type" className="text-sm font-medium text-gray-700 mb-1">
								Account Type
							</label>
							<Select
								onValueChange={value => setValue('type', value as 'CURRENT' | 'SAVINGS')}
								defaultValue={watch('type')}>
								<SelectTrigger id="type" className="w-full">
									<SelectValue placeholder="Select Account Type" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectItem value="CURRENT">Current</SelectItem>
										<SelectItem value="SAVINGS">Savings</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
							{errors.type && <p className="text-red-500">{errors.type.message}</p>}
						</div>
						<div className="space-y-2">
							<label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">
								Initial Balance
							</label>
							<Input id="balance" type="number" step="0.01" placeholder="0.00" {...register('balance')} />
							{errors.balance && <p className="text-red-500">{errors.balance.message}</p>}
						</div>
						<div className="flex items-center justify-between rounded-lg border p-4">
							<div>
								<label htmlFor="isDefault" className="text-sm font-medium cursor-pointer mb-1 flex items-center gap-2">
									Set as Default Account
								</label>

								<p className="text-sm text-muted-foreground">This account will be set as your default account.</p>
							</div>
							<Switch
								id="isDefault"
								onCheckedChange={checked => setValue('isDefault', checked)}
								checked={watch('isDefault')}
							/>
						</div>

						<div className="flex gap-4 pt-4">
							<DrawerClose asChild>
								<Button type="button" variant="outline" className="flex-1">
									Cancel
								</Button>
							</DrawerClose>
							<Button type="submit" className="flex-1">
								Create Account
							</Button>
						</div>
					</form>
				</div>
			</DrawerContent>
		</Drawer>
	);
};
export default CreateAccountDrawer;
