import { featuresData } from '@/data/landing-data';
import { Card, CardContent } from './ui/card';

const Features = () => {
	return (
		<section className="py-10 sm:py-14 md:py-20">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">Everything you require to handle your finances</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{featuresData.map((feature, index) => {
						const Icon = feature.icon;
						return (
							<Card key={index} className="p-6">
								<CardContent className="space-y-4 pt-4">
									<Icon className="h-8 w-8 text-blue-600" />
									<h3 className="text-xl font-semibold">{feature.title}</h3>
									<p className="text-gray-600">{feature.description}</p>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
};
export default Features;
