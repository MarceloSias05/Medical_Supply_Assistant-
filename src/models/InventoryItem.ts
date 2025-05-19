
export interface InventoryItem {
  id: string;
  name: string;
  type: string;
  description: string;
  quantity: number;
  expirationDate: string; // formato ISO
  batchNumber: string;
  manufacturer: string;
  location: string; // ID del almacén o farmacia
  minStock: number; // Nivel mínimo de stock para alertas
  price: number;
}

export default InventoryItem;