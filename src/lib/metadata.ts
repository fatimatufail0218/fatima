import type { Metadata } from "next";

/**
 * Site URL. Update it in one place when your final domain is confirmed.
 * Priority: NEXT_PUBLIC_SITE_URL (include https://), then the Vercel
 * production URL, then a placeholder for local development.
 */
const FALLBACK_URL = "https://example.com";

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelHost) return `https://${vercelHost}`;

  return FALLBACK_URL;
}

const SITE_URL = resolveSiteUrl();

export const siteConfig = {
  name: "Fatima Tufail",
  role: "Full Stack Developer",
  title: "Fatima Tufail | Full Stack Developer",
  description:
    "Full Stack Developer building responsive websites and web applications with React, Next.js, TypeScript, and MongoDB. Focused on clean UI and practical functionality.",
  url: SITE_URL,
  ogImage: "/og-image.png",
  creator: "Fatima Tufail",
  authors: [
    {
      name: "Fatima Tufail",
      url: SITE_URL,
    },
  ],
  keywords: [
    "Fatima Tufail",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "React and Next.js Development",
    "Responsive Web Design",
    "Figma to React",
    "Web Application Development",
  ],
} as const;

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.role}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [...siteConfig.authors],
  creator: siteConfig.creator,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  manifest: "/site.webmanifest",
};

export function createMetadata({
  title,
  description,
  path = "/",
  image,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image ?? siteConfig.ogImage;
  const socialTitle = title
    ? `${title} | ${siteConfig.role}`
    : siteConfig.title;
  const socialDescription = description ?? siteConfig.description;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: siteConfig.name,
      title: socialTitle,
      description: socialDescription,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: socialTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: socialDescription,
      images: [ogImage],
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}