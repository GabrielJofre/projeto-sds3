import { Seller } from "./seller"

export type Sale = {
  id: number;
  visited: number;
  deals: number;
  amount: number;
  date: string;
  seller: Seller;
}

export type SalePage = {
  content?: Sale[];
  last: boolean;
  totalElements: number;
  totalPages: number;
  number: number;
  first: boolean;
  numberOfElements?: number;
  size?: number;
  empty?: boolean;
}

export type SaleSum = {
  sallerName: string;
  sum: number;
}

export type SaleSuccess = {
  sellerName: string;
  visited: number;
  deals: number;
}