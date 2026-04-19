export interface IOrderModel {
  id: Number;
  title: string;
  price: Number;
  description: string;
  category: string;
  image: string;
  rating: Rate;
}

interface Rate {
  rate: Number;
  count: Number;
}
