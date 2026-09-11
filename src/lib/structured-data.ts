import React from "react";
import type { Property } from "@/data/properties";
import { siteConfig } from "./metadata";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/logo.png`,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Visakhapatnam",
      addressRegion: "Andhra Pradesh",
      addressCountry: "IN",
    },
  };
}

export function realEstateListingSchema(property: Property) {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: property.title,
    description: property.description,
    datePosted: property.createdAt,
    offers: {
      "@type": "Offer",
      price: property.priceMin,
      priceCurrency: property.currency,
      availability: property.status === "available" ? "https://schema.org/InStock" : "https://schema.org/SoldOut",
    },
    itemOffered: {
      "@type": "Accommodation",
      name: property.title,
      numberOfRooms: property.configuration,
      floorSize: {
        "@type": "QuantitativeValue",
        value: property.area,
        unitText: property.areaUnit,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: property.location,
        addressRegion: "Andhra Pradesh",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: property.latitude,
        longitude: property.longitude,
      },
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.siteUrl}${item.url}`,
    })),
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return React.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: JSON.stringify(data) },
  });
}
