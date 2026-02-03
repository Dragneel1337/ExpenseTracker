import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';

export default function Home() {
	return (
		<div className="mt-40">
			<Hero />
			<Stats />
			<Features />
		</div>
	);
}
