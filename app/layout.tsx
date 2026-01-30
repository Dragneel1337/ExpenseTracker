import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import { Header } from '@/components/Header';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Footer from '@/components/Footer';

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
		<ClerkProvider>
			<html lang="en" className="scroll-smooth h-full">
				<body className={`${raleway.className}`}>
					<Header />
					<main className="min-h-screen">{children}</main>
					<Footer />
				</body>
			</html>
		</ClerkProvider>
	);
}
