/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  category: "Residential" | "Commercial" | "Institutional" | "Interior Design" | "Religious";
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
  description?: string;
  // SWAP IMAGE: replace these URLs with actual client photos
  image: string;
  imageOffset?: {
    x?: string;        // e.g. "10px", "-5px"
    y?: string;        // e.g. "20px", "-10px"
    scale?: number;    // e.g. 1.1, 1.2
    position?: string; // e.g. "top", "50% 40%"
  };
}

export interface Achievement {
  id: string;
  year: string;
  title: string;
  description: string;
}
