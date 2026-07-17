import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { Link, type LinkProps } from 'react-router';

type Variant = 'primary' | 'secondary';

const variantClasses: Record<Variant, string> = {
	primary: 'bg-accent-solid text-accent-foreground hover:bg-accent-solid-hover',
	secondary: 'border border-border text-foreground hover:border-accent hover:text-accent',
};

const baseClasses =
	'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant };
type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant };
type RouterLinkButtonProps = LinkProps & { variant?: Variant };

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

export function RouterLinkButton({
	variant = 'primary',
	className = '',
	children,
	...props
}: RouterLinkButtonProps) {
	return (
		<Link className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
			{children}
		</Link>
	);
}
