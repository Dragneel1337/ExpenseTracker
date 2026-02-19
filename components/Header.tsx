import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/nextjs';
import Link from 'next/dist/client/link';
import { Button } from './ui/button';
import { LayoutDashboard, PenBox } from 'lucide-react';
import { checkForUser } from '@/lib/checkForUser';

export const Header = async () => {
	await checkForUser();
	return (
		<div className="fixed top-0 px-2 py-2 w-full bg-gray-300/10 backdrop-blur-md z-50 border-b">
			<nav className="container mx-auto py-4 flex items-center justify-between">
				<Link href="/">
					<h3 className="text-2xl sm:text-3xl text-primary font-bold">
						<span className="text-blue-500">E</span>xpense<span className="text-blue-500">T</span>racker
					</h3>
				</Link>

				<div className="flex items-center space-x-4">
					<SignedIn>
						<Link href="/dashboard">
							<Button variant="outline" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
								<LayoutDashboard />
								<span className="hidden md:inline">Dashboard</span>
							</Button>
						</Link>
						<Link href="/transactions/create">
							<Button variant="default" className="flex items-center gap-2">
								<PenBox />
								<span className="hidden md:inline">Add Transaction</span>
							</Button>
						</Link>
					</SignedIn>

					<SignedOut>
						<SignInButton forceRedirectUrl="/dashboard">
							<Button variant="outline">Login</Button>
						</SignInButton>
					</SignedOut>
					<SignedIn>
						<UserButton
							appearance={{
								elements: {
									avatarBox: '!h-10 !w-10',
								},
							}}
						/>
					</SignedIn>
				</div>
			</nav>
		</div>
	);
};
