import { IProduct } from "./product.types";

type OrderStatus = "Pending" | "Confirmed" | "Shipping" | "Delivered";
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

// export interface IProduct {
//   _id: string;
//   name: string;
//   brand: string;
//   price: number;
//   category: string;
//   description: string;
//   quantity: number;
//   inStock: boolean;
//   image: string;
//   createdAt: string; // Can be Date if preferred
//   updatedAt: string;
// }

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
  products: IOrderItem[];
  totalOrderPrice: number;
  user: User;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  createdAt: string; // Can be Date if preferred
  updatedAt: string;
}
export interface TOrderData {
  id: number;
  order_id: string;
  currency: string;
  amount: number;
  payable_amount: number;
  discsount_amount: number | null;
  disc_percent: number;
  received_amount: string;
  usd_amt: number;
  usd_rate: number;
  is_verify: number;
  card_holder_name: string | null;
  card_number: string | null;
  phone_no: string;
  bank_trx_id: string;
  invoice_no: string;
  bank_status: string;
  customer_order_id: string;
  sp_code: string;
  sp_message: string;
  name: string;
  email: string;
  address: string;
  city: string;
  value1: string | null;
  value2: string | null;
  value3: string | null;
  value4: string | null;
  transaction_status: string | null;
  method: string;
  date_time: string;
}
