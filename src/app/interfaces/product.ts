export interface Product {
    id?: string;
    name: string;
    price: number;
    description: string;
    image: File; // Cambia el tipo de string a File
  }