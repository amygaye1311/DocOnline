export interface Doctor {
  id: number;
  firstName: string;
  lastName: string;
  specialty: string;
  availability: string;
  qrCode: string; // URL ou base64
}