import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/nextjs';

export const Header = () => {
	return (
		<div className="fixed top-0">
			<SignedOut>
				<SignInButton />
			</SignedOut>
			<SignedIn>
				<UserButton />
			</SignedIn>
		</div>
	);
};
