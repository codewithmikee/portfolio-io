// Common types used across the portfolio manager application

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Portfolio {
  id: string;
  userId: string;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Asset {
  id: string;
  portfolioId: string;
  symbol: string;
  name: string;
  quantity: number;
  price: number;
  value: number;
  createdAt: Date;
  updatedAt: Date;
}
