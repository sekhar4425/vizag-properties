import type { Metadata } from "next";

export const siteConfig = {
  siteName: "Vizag Properties",
  siteUrl: "https://vizagproperties.ai",
  description: "Premium real-estate advisory website in Vizag.",
  phone: "+91-0000000000",
  email: "contact@vizagproperties.ai",
  whatsapp: "+91-0000000000",
};

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const finalTitle = title ? `${title} | ${siteConfig.siteName}` : siteConfig.siteName;
  const finalDescription = description || siteConfig.description;
  const url = `${siteConfig.siteUrl}${path}`;

  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: finalTitle,
    description: finalDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url,
      siteName: siteConfig.siteName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDescription,
    },
  };
}
