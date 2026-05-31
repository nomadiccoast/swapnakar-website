/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  category: "Residential" | "Commercial" | "Institutional" | "Interior Design";
  // SWAP IMAGE: replace these URLs with actual client photos
  images: string[];
  description: string;
  location?: string;
  year?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  // SWAP IMAGE: replace these URLs with actual client photos
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  description: string;
  // SWAP IMAGE: replace these URLs with actual client photos
  image: string;
}

export interface Achievement {
  id: string;
  year: string;
  title: string;
  description: string;
}
