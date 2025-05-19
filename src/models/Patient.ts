export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string; // formato ISO
  age?: number; // Calculado a partir de birthDate
  location: string;
  hospital: string; // ID del hospital
  assignedDoctor: string; // ID del médico asignado
  diagnosis: string;
  active: boolean;
  registrationDate: string; // formato ISO
  medicationHistory: MedicationPrescription[];
}

export interface MedicationPrescription {
  id: string;
  medicationId: string;
  medicationName: string;
  dosage: string;
  frequency: string;
  startDate: string;
  endDate?: string;
  active: boolean;
}

export default Patient;