import { Card, CardContent } from '@/components/ui/card';
import { testimonialsData } from '@/data/landing-data';
import { Star } from 'lucide-react';
import Image from 'next/image';

const MAX_STARS = 5;

const Testimonials = () => {
	return (
		<section className="py-10 sm:py-14 md:py-20">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-2">Comments from our users</h2>
				<p className="text-gray-600 text-center mx-auto mb-12">
					See what people are saying about managing their finances with us.
				</p>
				<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
					{testimonialsData.map((testimony, index) => (
						<Card
							key={index}
							className="overflow-hidden rounded-2xl border-0 bg-white shadow-sm shadow-slate-200/60 hover:shadow-md hover:shadow-slate-200/80 transition-shadow duration-200">
							<CardContent className="p-4">
								<p className="text-gray-600 text-lg lg:text-base">&quot;{testimony.quote}&quot;</p>
								<footer className="mt-6 pt-5 border-t border-slate-100 flex flex-row justify-between items-center">
									<div className="flex items-center gap-3">
										<Image
											src={testimony.image}
											alt={testimony.name}
											width={40}
											height={40}
											className="rounded-full size-11 object-cover"
										/>
										<div className="flex flex-col">
											<p className="font-semibold">{testimony.name}</p>
											<p className="text-sm text-blue-600">{testimony.role}</p>
										</div>
									</div>
									<div className="flex items-center gap-1" aria-label={`${testimony.rating} out of ${MAX_STARS} stars`}>
										{Array.from({ length: MAX_STARS }, (_, i) => (
											<span key={i} className={i < testimony.rating ? 'text-amber-400' : 'text-slate-200'} aria-hidden>
												<Star
													className="size-4"
													strokeWidth={2}
													fill={i < testimony.rating ? 'currentColor' : 'none'}
													stroke="currentColor"
												/>
											</span>
										))}
										<span className="ml-2 text-sm font-semibold text-gray-600">{testimony.rating}.0</span>
									</div>
								</footer>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};
export default Testimonials;
