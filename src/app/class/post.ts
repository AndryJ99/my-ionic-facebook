export class Post {
  title: string;
  subtitle: string | undefined |null;
  description: string | undefined |null;
  image: string | undefined |null;
}

export class Notification{
  text: string | undefined | null;
  image: string | undefined | null;
  type: string | undefined | null;
  date: string | undefined | null;
}

export class Product{
  image: string | undefined | null;
  price: string | undefined | null;
  title: string | undefined | null;
}
