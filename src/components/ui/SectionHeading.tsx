interface SectionHeadingProps {
	title: string;
	subtitle?: string;
	as?: 'h1' | 'h2';
	id?: string;
}

export function SectionHeading({ title, subtitle, as = 'h1', id }: SectionHeadingProps) {
	const Heading = as;

	return (
		<div className="mb-8">
			<Heading id={id} className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
				{title}
			</Heading>
			{subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
		</div>
	);
}
