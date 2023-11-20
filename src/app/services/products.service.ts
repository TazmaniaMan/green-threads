import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData , doc, deleteDoc,updateDoc} from '@angular/fire/firestore';
import { Product } from '../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private firestore: Firestore) { }

  addProduct(product: Product) {
    const productRef = collection(this.firestore, 'productos');
    return addDoc(productRef, product);
  }

  getProduct(): Observable<Product[]> {
    const productRef = collection(this.firestore, 'productos');
    return collectionData(productRef, { idField: 'id' }) as Observable<Product[]>;
  }
  deleteProduct(product: Product) {
    const productDocRef = doc(this.firestore, `productos/${product.id}`);
    return deleteDoc(productDocRef);
  }
  updateProduct(product: any,id: any) {
    const productDocRef = doc(this.firestore, `productos/${id}`);
    const updatedData = product;
    return updateDoc(productDocRef, updatedData);
  }
  
}
