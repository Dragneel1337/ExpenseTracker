import { Button } from '@/components/ui/button';
import Link from 'next/link';

const NotFound = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
			<h1 className="text-4xl font-bold text-blue-500">404 - Page Not Found</h1>
			<p className="mt-4 text-lg text-gray-600">Sorry, the page you are looking for does not exist.</p>
			<Link href="/" className="mt-6 inline-flex items-center px-4 py-2">
				<Button variant="default">Go Back Home</Button>
			</Link>
		</div>
	);
};
export default NotFound;
