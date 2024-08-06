export class User {
    id: number;
    name: string;
    email: string;
    posts: {
      id: number;
      title: string;
      content: string;
      published: boolean;
    }[];
  }
  