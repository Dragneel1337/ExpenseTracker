import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import { Header } from '@/components/Header';
import './globals.css';

const raleway = Raleway({
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Expense Tracker',
	description: 'Financial expense tracking application',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${raleway.className}`}>
				<Header />
				<main className="min-h-screen">{children}</main>
				<footer className="bg-blue-50 py-12 ">
					<div className="container mx-auto px-4 text-center text-gray-600">
						<p>© 2026 Expense Tracker. All rights reserved.</p>
					</div>
				</footer>
			</body>
		</html>
	);
}
