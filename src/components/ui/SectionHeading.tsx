interface SectionHeadingProps {
	title: string;
	subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
	return (
		<div className="mb-8">
			<h1 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">{title}</h1>
			{subtitle && <p className="mt-2 text-slate-400">{subtitle}</p>}
		</div>
	);
}
