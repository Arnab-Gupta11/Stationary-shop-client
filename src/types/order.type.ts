type OrderStatus = "Pending" | "Shipping";
type PaymentStatus = "Pending" | "Paid" | "Cancelled";

export interface ITransaction {
  id: string;
  transactionStatus: string;
  sp_code: string;
  bank_status: string;
  date_time: string; // Can be Date if preferred
  method: string | null;
  sp_message: string;
}

export interface IProduct {
  _id: string;
  name: string;
  brand: string;
  price: number;
  category: string;
  description: string;
  quantity: number;
  inStock: boolean;
  image: string;
  createdAt: string; // Can be Date if preferred
  updatedAt: string;
}

export interface IOrderItem {
  product: IProduct;
  quantity: number;
  totalPrice: number;
  _id: string;
}

interface User {
  _id: string;
  email: string;
  fullName: string;
}

export interface IOrder {
  transaction: ITransaction;
  _id: string;
  products: OrderItem[];
  totalOrderPrice: number;
  user: User;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  createdAt: string; // Can be Date if preferred
  updatedAt: string;
}
