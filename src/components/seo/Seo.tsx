import { Helmet } from 'react-helmet-async';
import { defaultOgImage, siteName, siteUrl } from '@/lib/seo';

interface SeoProps {
	title: string;
	description: string;
	path: string;
	image?: string;
}

export function Seo({ title, description, path, image = defaultOgImage }: SeoProps) {
	const url = `${siteUrl}${path}`;
	const fullTitle = `${title} — ${siteName}`;

	return (
		<Helmet>
			<title>{fullTitle}</title>
			<meta name="description" content={description} />
			<link rel="canonical" href={url} />

			<meta property="og:title" content={fullTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={url} />
			<meta property="og:image" content={image} />

			<meta name="twitter:title" content={fullTitle} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />
		</Helmet>
	);
}
