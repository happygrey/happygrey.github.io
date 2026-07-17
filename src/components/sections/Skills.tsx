import { FadeIn } from '@/components/motion/FadeIn';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { skillCategories } from '@/data/skills';

export function Skills() {
	return (
		<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{skillCategories.map((category, index) => (
				<FadeIn key={category.id} delay={index * 0.05}>
					<Card>
						<h3 className="font-semibold text-foreground">{category.label}</h3>
						<ul className="mt-4 flex flex-wrap gap-2">
							{category.items.map((item) => (
								<li key={item}>
									<Badge>{item}</Badge>
								</li>
							))}
						</ul>
					</Card>
				</FadeIn>
			))}
		</div>
	);
}
