import type { Doctor } from "./Doctor";

export interface Hopital {
  id: number;
  name: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  doctors: Doctor[];
}
