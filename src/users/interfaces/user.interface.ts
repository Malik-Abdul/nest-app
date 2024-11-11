export interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
  role: 'Admin' | 'Engineer' | 'Intern';
}