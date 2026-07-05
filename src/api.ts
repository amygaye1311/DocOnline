import axios, { type AxiosResponse } from "axios";
import type { Doctor } from "./Types/Doctor";
import type { Hopital } from "./Types/Hopital";
import type { Pharmacy } from "./Types/Pharmacy";
import type { Weather } from "./Types/Weather";
import type { Patient } from "./Types/Patient";

const API_URL = "/api";

export async function getDoctors(): Promise<Doctor[]> {
  const response: AxiosResponse<Doctor[]> = await axios.get(`${API_URL}/doctors`);
  return response.data;
}

export async function getHospitals(): Promise<Hopital[]> {
  const response: AxiosResponse<Hopital[]> = await axios.get(`${API_URL}/hospitals`);
  return response.data;
}

export async function getPharmacies(): Promise<Pharmacy[]> {
  const response: AxiosResponse<Pharmacy[]> = await axios.get(`${API_URL}/pharmacies`);
  return response.data;
}

export async function getWeather(city: string): Promise<Weather> {
  const response: AxiosResponse<Weather> = await axios.get(`${API_URL}/meteo?city=${city}`);
  return response.data;
}

export interface RendezVousBackend {
  id: number;
  nomPatient: string;
  prenomPatient: string;
  telephone: string;
  email?: string;
  dateRendezVous: string;
  heureRendezVous: string;
  motif: string;
  statut: string;
  age: number;
  hopital: string;
  specialiste: string;
  notes: string;
}

export async function createRendezVous(data: {
  nomPatient: string;
  prenomPatient: string;
  telephone: string;
  email?: string;
  dateRendezVous: string;
  heureRendezVous: string;
  motif: string;
  statut?: string;
  age?: number;
  hopital?: string;
  specialiste?: string;
  notes?: string;
}): Promise<RendezVousBackend> {
  const response: AxiosResponse<RendezVousBackend> = await axios.post(`${API_URL}/rendez-vous/public`, data);
  return response.data;
}

export async function getRendezVous(): Promise<RendezVousBackend[]> {
  const response: AxiosResponse<RendezVousBackend[]> = await axios.get(`${API_URL}/rendez-vous/public`);
  return response.data;
}
