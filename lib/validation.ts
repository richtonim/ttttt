import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid work email"),
  company: z.string().min(1, "Company is required"),
  companySize: z.string().min(1, "Please select company size"),
  role: z.string().min(1, "Role is required"),
  building: z.string().optional(),
  usage: z.string().optional(),
  interest: z.string().min(1, "Please select an interest"),
  message: z.string().optional(),
  privacy: z.literal(true, {
    errorMap: () => ({ message: "You must accept the privacy policy" }),
  }),
  website: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const demoFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().min(1, "Company is required"),
  role: z.string().optional(),
  message: z.string().optional(),
  privacy: z.literal(true, {
    errorMap: () => ({ message: "You must accept the privacy policy" }),
  }),
  website: z.string().max(0).optional(),
});

export type DemoFormData = z.infer<typeof demoFormSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  website: z.string().max(0).optional(),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;

export const earlyAccessSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  message: z.string().optional(),
  privacy: z.literal(true, {
    errorMap: () => ({ message: "You must accept the privacy policy" }),
  }),
  website: z.string().max(0).optional(),
});

export type EarlyAccessFormData = z.infer<typeof earlyAccessSchema>;

export const pricingInquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().min(1, "Company is required"),
  plan: z.string().min(1, "Please select a plan"),
  message: z.string().optional(),
  privacy: z.literal(true, {
    errorMap: () => ({ message: "You must accept the privacy policy" }),
  }),
  website: z.string().max(0).optional(),
});

export type PricingInquiryFormData = z.infer<typeof pricingInquirySchema>;
