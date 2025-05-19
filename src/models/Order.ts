export interface Order {
  id: string;
  items: OrderItem[];
  requestedBy: string; // ID del usuario que solicitó
  requestedByRole: string; // Rol del usuario que solicitó
  requestedFrom: string; // ID del almacén o farmacia
  requestedTo: string; // ID del almacén o farmacia de destino
  hospitalId: string; // ID del hospital asociado
  patientId?: string; // ID del paciente si es una prescripción
  status: OrderStatus;
  priority: OrderPriority;
  createdAt: string; // formato ISO
  updatedAt: string; // formato ISO
  expectedDeliveryDate?: string; // formato ISO
  actualDeliveryDate?: string; // formato ISO
}

export enum OrderStatus {
  PENDING = "pending",
  PROCESSING = "processing",
  SHIPPED = "shipped",
  DELIVERED = "delivered",
  CANCELLED = "cancelled"
}

export enum OrderPriority {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
  URGENT = "urgent"
}

export interface OrderItem {
  id: string;
  inventoryItemId: string;
  name: string;
  quantity: number;
  fulfilled: number; // Cantidad que se ha cumplido
  notes?: string;
}

export default Order;