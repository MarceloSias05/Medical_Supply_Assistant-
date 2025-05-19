
export interface User {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'doctor' | 'pharmacy';
  hospital?: string; // ID del hospital para doctores
}

export default User;