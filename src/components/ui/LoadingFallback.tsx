export function LoadingFallback() {
	return (
		<div
			className="flex min-h-[50vh] items-center justify-center"
			role="status"
			aria-label="Loading"
		>
			<div className="h-6 w-6 animate-spin rounded-full border-2 border-slate-700 border-t-indigo-400" />
		</div>
	);
}
