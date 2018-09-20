export interface Category {
  id: number;
  title: string;
  color: string;
};

export interface Ticket {
  Category: { id: number; color: string };
  id: number;
  date: number;
  color: string;
};

