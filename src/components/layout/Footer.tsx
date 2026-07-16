export function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="border-t border-slate-800">
			<div className="mx-auto max-w-4xl px-6 py-8 text-sm text-slate-500">
				© {year} Sergey Rodionov. Built with React, Vite &amp; Tailwind CSS.
			</div>
		</footer>
	);
}
