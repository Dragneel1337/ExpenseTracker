import { Card, CardContent } from '@/components/ui/card';
import CreateAccountDrawer from '@/components/ui/create-account-drawer';
import { Plus } from 'lucide-react';

const DashboardPage = () => {
	return (
		<div className="px-5">
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-5">
				<CreateAccountDrawer>
					<Card className="hover:shadow-md transition-shadow cursor-pointer border-dashed">
						<CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full pt-2">
							<Plus className="h-10 w-10 mb-2"></Plus>
							<p className="text-sm font-medium">Add New Account</p>
						</CardContent>
					</Card>
				</CreateAccountDrawer>
			</div>
		</div>
	);
};
export default DashboardPage;
