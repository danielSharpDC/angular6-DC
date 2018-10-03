import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-DC';
  constructor(){
  	var config = {
    apiKey: "AIzaSyBQWx_pdfdjt570gcrYdj61Wn0UaSB_AfU",
    authDomain: "angulardc-92ab1.firebaseapp.com",
    databaseURL: "https://angulardc-92ab1.firebaseio.com",
    projectId: "angulardc-92ab1",
    storageBucket: "angulardc-92ab1.appspot.com",
    messagingSenderId: "1082463924064"
  };
  firebase.initializeApp(config);
  }
}
