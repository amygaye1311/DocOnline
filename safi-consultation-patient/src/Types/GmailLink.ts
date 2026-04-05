// GmailLink.ts
import { Patient } from "./Patient";

export function generateGmailLink(patient: Patient, destinataire: string) {
  const subject = `Infos patient ${patient.nom} ${patient.prenom}`;
  const body = `
Nom: ${patient.nom}
Prénom: ${patient.prenom}
Âge: ${patient.age}
Téléphone: ${patient.telephone}
Motif: ${patient.motifConsultation}
Notes: ${patient.notes}
Hôpital: ${patient.hopital}
Spécialiste: ${patient.specialiste}
`;

  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    destinataire
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}