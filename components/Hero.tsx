'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

const Hero = () => {
	const imageRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const imageElement = imageRef.current;

		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			const scrollThreshold = 200;

			if (scrollPosition > scrollThreshold) {
				imageElement?.classList.add('scroll-hero-image');
			} else {
				imageElement?.classList.remove('scroll-hero-image');
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className="pb-20 px-4">
			<div className="container mx-auto text-center">
				<h1 className="text-5xl md:text-7xl lg:text-8xl gradient-hero-title">
					Track your expenses <br /> with AI
				</h1>
				<p className="text-xl md:text-2xl text-gray-600 mb-8  mx-auto pt-4">
					{' '}
					An AI-powered platform that helps you monitor your expenses, create budgets, and gain insights into your
					spending habits.
				</p>
				<div className="flex justify-center gap-4 mb-8">
					<Link href="/dashboard">
						<Button variant="default" className="px-8" size="lg">
							Get Started
						</Button>
					</Link>
					<Link href="/dashboard">
						<Button variant="outline" className="px-8" size="lg">
							Watch Demo
						</Button>
					</Link>
				</div>
				<div ref={imageRef} className="hero-image-wrapper">
					<div>
						<Image
							src="/hero.jpg"
							alt="Hero Image"
							width={1280}
							height={720}
							priority
							className="rounded-lg shadow-2xl border mx-auto"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Hero;
