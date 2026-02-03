import { howItWorksData } from '@/data/landing-data';

const HowItWorks = () => {
	return (
		<section className="py-10 sm:py-14 md:py-20 bg-blue-50">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{howItWorksData.map((step, index) => {
						const Icon = step.icon;
						return (
							<div key={index} className="text-center">
								<div>
									<Icon className="h-16 w-16 p-3 md:h-20 md:w-20 md:p-4 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6" />
								</div>
								<h3 className="text-xl font-semibold mb-4">{step.title}</h3>
								<p className="text-gray-600">{step.description}</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
export default HowItWorks;
