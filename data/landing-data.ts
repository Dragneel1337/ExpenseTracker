import { Users, TrendingUp, Shield, Star, type LucideIcon } from 'lucide-react';

export const statsData: { value: string; icon: LucideIcon }[] = [
	{ value: '50K+', icon: Users },
	{ value: '$2B+', icon: TrendingUp },
	{ value: '99.9%', icon: Shield },
	{ value: '4.9/5', icon: Star },
];

export const featuresData = [
	{
		icon: 'BarChart3',
		title: 'See Where Your Money Really Goes',
		description: 'AI turns your spending into clear charts and trends—no spreadsheets, no guesswork.',
	},
	{
		icon: 'Receipt',
		title: 'Snap a Receipt, Done',
		description: 'Point your phone at any receipt. We read it, categorize it, and add it to your history—instantly.',
	},
	{
		icon: 'PieChart',
		title: 'Budgets That Actually Stick',
		description: 'Set goals by category and get gentle nudges when you’re close to the line—so you stay on track.',
	},
	{
		icon: 'CreditCard',
		title: 'All Your Money in One Place',
		description: 'Link cards and accounts once. One dashboard, one truth—no more juggling apps or statements.',
	},
	{
		icon: 'Globe',
		title: 'Spend in Any Currency',
		description: 'Trips, subscriptions, or shopping abroad—we convert and track everything in your home currency.',
	},
	{
		icon: 'Zap',
		title: 'Insights That Feel Like a Pro Advisor',
		description: 'Weekly digests and smart tips tailored to your habits—so you save more without thinking about it.',
	},
];

export const howItWorksData = [
	{
		icon: 'CreditCard',
		title: '1. Sign Up in Under a Minute',
		description: 'No lengthy forms. Connect an account or start manual—you’re tracking in seconds.',
	},
	{
		icon: 'BarChart3',
		title: '2. Your Spending, Auto-Sorted',
		description: 'We categorize every transaction and keep your history up to date so you always know the numbers.',
	},
	{
		icon: 'PieChart',
		title: '3. Get Smarter With Every Month',
		description: 'AI spots patterns, suggests budgets, and shows you exactly where to cut—or where you’re winning.',
	},
];

export const testimonialsData = [
	{
		name: 'Jennifer Lee',
		role: 'Medium Business Owner',
		image: 'https://randomuser.me/api/portraits/women/23.jpg',
		quote:
			'I used to lose hours digging through receipts. Now I snap a photo and my books are done. Game changer for my business.',
	},
	{
		name: 'Marcus Thompson',
		role: 'Full-Stack Developer',
		image: 'https://randomuser.me/api/portraits/men/24.jpg',
		quote:
			'Finally, an app that actually gets where my money goes. The insights are sharp and the UI doesn’t get in the way.',
	},
	{
		name: 'Lily Anderson',
		role: 'F',
		image: 'https://randomuser.me/api/portraits/women/25.jpg',
		quote:
			'I suggest this to clients who want clarity without complexity. Multi-currency and clean reports—exactly what they need.',
	},
];
