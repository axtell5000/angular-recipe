import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()

export class AuthService {

  token: string;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      );
  }
  // When we signin correctly, firebase will return a token and that token is stored in localstorage
  signinUser(email: string, password: string) {

    // signInWithEmailAndPassword returns a promise
    // getToken also returns a promise, so we have to assign token here once we are successfully signed in due to
    // Javascript scope issues.
    // Here we are getting a fresh token, because firebase refreshes token every so often
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          // Here we are successfully logged in
          this.router.navigate(['/']);
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) => this.token = token
            );
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  // When interacting with database and using app we need to send along the token otherwise we get errors
  // Here we are getting a fresh token, because firebase refreshes token every so often
  getToken() {
    firebase.auth().currentUser.getToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
