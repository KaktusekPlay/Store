export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Iron VIP',
    price: 40,
    description: 'Iron vip na kaktusku play!!',
  },
  {
    id: 2,
    name: 'Gold VIP',
    price: 60,
    description: 'Gold VIP na kaktusku play!!',
  },
  {
    id: 3,
    name: 'Diamond VIP',
    price: 90,
    description: 'Diamond VIP na kaktusku play',
  },
];
