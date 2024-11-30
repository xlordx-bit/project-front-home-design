export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: Author;
  category: Category;
  tags: string[];
  coverImage: string;
  readingTime: number;
  publishedAt: string;
}

export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  social: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface TableOfContents {
  id: string;
  title: string;
  level: number;
}