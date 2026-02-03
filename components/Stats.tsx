'use client';

import { statsData } from '@/data/landing-data';

const Stats = () => {
	return (
		<section className="py-10 sm:py-14 md:py-20 bg-blue-50">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
					{statsData.map((stat, index) => {
						const Icon = stat.icon;
						return (
							<div key={index} className="flex flex-col items-center text-center gap-3">
								<div className="flex items-center justify-center w-14 h-14 rounded-lg bg-linear-to-br from-blue-600 to-emerald-600 text-white shadow-lg shadow-blue-600/30">
									<Icon className="w-8 h-8" />
								</div>
								<div className="text-3xl font-bold text-gray-800 mt-1">{stat.value}</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
export default Stats;
