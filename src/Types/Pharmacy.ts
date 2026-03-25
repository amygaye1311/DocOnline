export interface Pharmacy {
  id: number;
  name: string;
  address: string;
  isOpenLate: boolean;
  distance: number;
  phone: string;
}

export interface Hospital {
  id: number;
  name: string;
  specialty: string[];
  availableBeds: number;
  urgencyLevel: 'low' | 'medium' | 'high';
}

export interface Appointment {
  id: string;
  patientName: string;
  hospitalName: string;
  date: string;
  reason: string;
}