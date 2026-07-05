export interface Pharmacy {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  openingTime: string;
  closingTime: string;
  distance?: number;
}
