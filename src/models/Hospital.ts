export interface Hospital {
  id: string;
  name: string;
  location: string;
  doctorCount: number;
  patientCount: number;
  complianceRate: number; // Porcentaje de cumplimiento
  monthlyMetrics: MonthlyMetric[];
}

export interface MonthlyMetric {
  month: string; // Formato "YYYY-MM"
  complianceRate: number;
  patientCount: number;
  medicationDispensed: number;
  ordersFulfilled: number;
}

export default Hospital;