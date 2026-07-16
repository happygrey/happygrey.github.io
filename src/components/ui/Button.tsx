import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary';

const variantClasses: Record<Variant, string> = {
	primary: 'bg-indigo-400 text-slate-900 hover:bg-indigo-300',
	secondary: 'border border-slate-700 text-slate-100 hover:border-slate-500',
};

const baseClasses =
	'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant };
type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant };

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
	return <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props} />;
}

export function LinkButton({
	variant = 'primary',
	className = '',
	children,
	...props
}: LinkButtonProps) {
	return (
		<a className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
			{children}
		</a>
	);
}
