import { Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDrtFG7OnFzt09am6i1qj_IcUAEjGXI1vk',
      authDomain: 'ngrecipe-92279.firebaseapp.com'
    });
  }

  onNavigation(feature: string) {
    console.log('Hello ', feature);
    this.loadedFeature = feature;
  }
}
