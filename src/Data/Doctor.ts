import type { Doctor } from "../Types/Doctor";

export const doctors: Doctor[] = [
  { id: 1, firstName: "DR", lastName: "Diop", specialty: "Cardiologue", availability: "Lundi - Vendredi", qrCode: "https://api.qrserver.com/v1/create-qr-code/?data=doctor1" },
  { id: 2, firstName: "DR", lastName: "Cissé", specialty: "Pédiatre", availability: "Mardi - Samedi", qrCode: "https://api.qrserver.com/v1/create-qr-code/?data=doctor2" },
  { id: 3, firstName: "DR", lastName: "Fall", specialty: "Neurologue", availability: "Lundi - Jeudi", qrCode: "https://api.qrserver.com/v1/create-qr-code/?data=docor3" },
  { id: 4, firstName: "DR", lastName: "Gaye", specialty: "Oncologue", availability: "Mercredi - Dimanche", qrCode: "https://api.qrserver.com/v1/create-qr-code/?data=doctor4" },
  { id: 5, firstName: "DR", lastName: "Sow", specialty: "Orthopédiste", availability: "Lundi - Samedi", qrCode: "https://api.qrserver.com/v1/create-qr-code/?data=doctor5" },
  { id: 6, firstName: "DR", lastName: "Ba", specialty: "Gynécologue", availability: "Mardi - Vendredi", qrCode: "https://api.qrserver.com/v1/create-qr-code/?data=doctor6" },
  { id: 7, firstName: "DR", lastName: "Cissé", specialty: "Chirurgien", availability: "Lundi - Samedi", qrCode: "https://api.qrserver.com/v1/create-qr-code/?data=doctor7" },
  { id: 8, firstName: "DR", lastName: "Sylla", specialty: "Psychiatre", availability: "Jeudi - Dimanche", qrCode: "https://api.qrserver.com/v1/create-qr-code/?data=doctor8" },
  { id: 9, firstName: "DR", lastName: "Kane", specialty: "Urgentiste", availability: "Tous les jours", qrCode: "https://api.qrserver.com/v1/create-qr-code/?data=doctor9" },
  { id: 10, firstName: "DR", lastName: "Gning", specialty: "Médecin généraliste", availability: "Lundi - Vendredi", qrCode: "https://api.qrserver.com/v1/create-qr-code/?data=doctor10" },
  { id: 11, firstName: "DR", lastName: "Ngom", specialty: "Cardiologue", availability: "Mardi - Samedi", qrCode: "https://api.qrserver.com/v1/create-qr-code/?data=doctor11" },
  { id: 12, firstName: "DR", lastName: "Fall", specialty: "Pédiatre", availability: "Lundi - Jeudi", qrCode: "https://api.qrserver.com/v1/create-qr-code/?data=doctor12" },
  { id: 13, firstName: "DR", lastName: "Sy", specialty: "Dermatologue", availability: "Mercredi - Samedi", qrCode: "https://api.qrserver.com/v1/create-qr-code/?data=doctor13" },
  { id: 14, firstName: "DR", lastName: "Diouf", specialty: "Radiologue", availability: "Lundi - Samedi", qrCode: "https://api.qrserver.com/v1/create-qr-code/?data=doctor15" },
  { id: 15, firstName: "DR", lastName: "Sarr", specialty: "Anesthésiste", availability: "Jeudi - Dimanche", qrCode: "https://api.qrserver.com/v1/create-qr-code/?data=doctor16" },
  { id: 16, firstName: "DR", lastName: "Ndiaye", specialty: "Ophtalmologue", availability: "Mardi - Vendredi", qrCode: "https://api.qrserver.com/v1/create-qr-code/?data=doctor17" }
];