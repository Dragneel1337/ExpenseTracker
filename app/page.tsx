import Features from '@/components/Features';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';

export default function Home() {
	return (
		<div className="mt-40">
			<Hero />
			<Stats />
			<Features />
			<HowItWorks />
			<Testimonials />
		</div>
	);
}
