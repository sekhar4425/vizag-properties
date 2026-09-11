"use client";

export const PROPERTY_VIEW = "PROPERTY_VIEW";
export const PROPERTY_ENQUIRY = "PROPERTY_ENQUIRY";
export const WHATSAPP_CLICK = "WHATSAPP_CLICK";
export const PHONE_CLICK = "PHONE_CLICK";
export const CONSULTATION_CLICK = "CONSULTATION_CLICK";
export const INVESTMENT_BRIEF_DOWNLOAD = "INVESTMENT_BRIEF_DOWNLOAD";
export const CONTACT_FORM_SUBMIT = "CONTACT_FORM_SUBMIT";
export const VIRTUAL_VISIT_REQUEST = "VIRTUAL_VISIT_REQUEST";
export const ROI_ANALYSIS_REQUEST = "ROI_ANALYSIS_REQUEST";

export function trackEvent(name: string, properties?: Record<string, unknown>) {
  if (typeof window !== "undefined") {
    console.log(`[Analytics] Event: ${name}`, properties);
    // Future GA4/GTM integration will go here
  }
}
