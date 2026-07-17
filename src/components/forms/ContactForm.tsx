import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/Button';

interface ContactFormValues {
	name: string;
	email: string;
	message: string;
}

const inputClasses =
	'mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent';

export function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ContactFormValues>({ mode: 'onBlur' });

	function onSubmit(data: ContactFormValues) {
		const subject = encodeURIComponent(`Portfolio contact from ${data.name}`);
		const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`);
		window.location.assign(`mailto:hello@rodionov.online?subject=${subject}&body=${body}`);
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate className="max-w-[500px]">
			<div>
				<label htmlFor="name" className="text-sm font-medium text-foreground">
					Name
				</label>
				<input
					id="name"
					type="text"
					className={inputClasses}
					aria-invalid={!!errors.name}
					aria-describedby={errors.name ? 'name-error' : undefined}
					{...register('name', { required: 'Please enter your name' })}
				/>
				{errors.name && (
					<p id="name-error" className="mt-1.5 text-sm text-error-text">
						{errors.name.message}
					</p>
				)}
			</div>

			<div className="mt-5">
				<label htmlFor="email" className="text-sm font-medium text-foreground">
					Email
				</label>
				<input
					id="email"
					type="email"
					className={inputClasses}
					aria-invalid={!!errors.email}
					aria-describedby={errors.email ? 'email-error' : undefined}
					{...register('email', {
						required: 'Please enter your email',
						pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email' },
					})}
				/>
				{errors.email && (
					<p id="email-error" className="mt-1.5 text-sm text-error-text">
						{errors.email.message}
					</p>
				)}
			</div>

			<div className="mt-5">
				<label htmlFor="message" className="text-sm font-medium text-foreground">
					Message
				</label>
				<textarea
					id="message"
					rows={5}
					className={inputClasses}
					aria-invalid={!!errors.message}
					aria-describedby={errors.message ? 'message-error' : undefined}
					{...register('message', {
						required: 'Please enter a message',
						minLength: { value: 10, message: 'Message should be at least 10 characters' },
					})}
				/>
				{errors.message && (
					<p id="message-error" className="mt-1.5 text-sm text-error-text">
						{errors.message.message}
					</p>
				)}
			</div>

			<Button type="submit" className="mt-6">
				Send Message
			</Button>
			<p className="mt-2 text-xs text-muted-foreground">Opens your email client with this message pre-filled.</p>
		</form>
	);
}
