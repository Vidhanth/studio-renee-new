const defaultTitle =
  "Studio Renée - Commercial, Retail, Office and Home Interiors | Bangalore";
const defaultDescription =
  "Transform your space with Studio Renée's expert interior design services in Bangalore. Specializing in commercial, retail, office, and home interiors. Get professional architectural solutions for modern, aesthetic spaces.";
const defaultKeywords =
  "interiors, architecture, home, commercial, design, interior design, commercial designer, commercial interior, home designer, home interior, modern interior design, interior architect, design architects, bangalore, india, interior designer bangalore, best interior designers bangalore, top interior designers, luxury interiors, office interiors, retail interiors, commercial spaces".split(
    ","
  );

export const defaultMetadata = {
  metadataBase: new URL("https://studiorenee.co.in"),
  title: defaultTitle,
  description: defaultDescription,
  keywords: defaultKeywords,
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    type: "website",
    locale: "en_IN",
    siteName: "Studio Renée",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Studio Renée - Interior Design Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/og-image.png"],
  },
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
};
