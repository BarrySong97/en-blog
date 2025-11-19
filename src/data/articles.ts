import { Media } from "@/payload-types";

export interface Article {
  id: string;
  slug: string;
  title: string;
  preview: string;
  content: string;
  author: string;
  date: string;
  cover: Media;
}


