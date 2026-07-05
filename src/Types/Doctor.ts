export interface Doctor {
  id: number;
  firstName: string;
  lastName: string;
  speciality: string;
  specialty?: string;
  phone: string;
  email: string;
  hospital?: {
    id: number;
    name: string;
    address: string;
    city: string;
    country: string;
    phone: string;
  };
  availability?: string;
  qrCode?: string;
}
