import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  signInUser(email: string, pwd: string) {

  }

  signOutUser() {
    // firebase.auth().signOut();
  }
}
