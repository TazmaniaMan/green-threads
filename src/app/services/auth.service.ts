import { Injectable } from '@angular/core';
import { Auth,signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth:Auth
  ) { }

  register(email: string,password: string){
    return createUserWithEmailAndPassword(this.afAuth, email, password);
  }
  login (email: string,password: string){
    return signInWithEmailAndPassword(this.afAuth, email, password);
  }
  logout(){
    return signOut(this.afAuth);
  }
  isLoggedIn(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.afAuth.onAuthStateChanged(user => {
        if (user) {
          resolve(true); // Usuario autenticado
        } else {
          resolve(false); // Usuario no autenticado
        }
      });
    });
  }
}