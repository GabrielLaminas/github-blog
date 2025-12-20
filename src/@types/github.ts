export interface Users {
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  followers: 8;
  company: string | null;
  html_url: string;
}

export interface Items {
  id: number;
  title: string;
  body: string;
  created_at: string;
  user: Users;
  html_url: string;
  comments: number;
}

export interface Issues {
  total_count: number;
  incomplete_results: boolean;
  items: Items[];
}