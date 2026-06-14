/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface WorkItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  imageBg: string; // Tailwind class or hex for background container
  mockupType: "phone-orange" | "phone-sand" | "laptop" | "star-overlay";
  tags: string[];
}

export interface NavigationItem {
  title: string;
  href: string;
  subItems?: string[];
}

export interface RecognitionAward {
  id: string;
  award: string;
  title: string;
  year: string;
}

export interface ArticleItem {
  id: string;
  source: string;
  category: string;
  readTime: string;
  title: string;
  description: string;
  theme: "dark" | "light";
  imagePattern: "sine-wave" | "nice-circle" | "healthcare-ai" | "brand-weeks";
}
