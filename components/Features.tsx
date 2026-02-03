import { featuresData } from '@/data/landing-data';
import { Card, CardContent } from './ui/card';

const Features = () => {
	return (
		<section className="py-10 sm:py-14 md:py-20">
			<div>
				<h2>Everything you require to handle your finances</h2>
				<div>
					{featuresData.map((feature, index) => (
						<Card>
							<CardContent>
								{feature.icon}
								<h3>{feature.title}</h3>
								<p>{feature.description}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};
export default Features;
