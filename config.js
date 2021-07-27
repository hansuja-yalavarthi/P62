import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCTAnRt0WFmWdZej5kW4Oa0IzWrdFYSbao',
  authDomain: 'schoolattendanceapp-1feb2.firebaseapp.com',
  projectId: 'schoolattendanceapp-1feb2',
  storageBucket: 'schoolattendanceapp-1feb2.appspot.com',
  messagingSenderId: '209340776324',
  appId: '1:209340776324:web:31ae8997a5ea3bdaf0a7d1',
};

// Initialize Firebase
if(!firebase.apps.length){
var app = firebase.initializeApp(firebaseConfig);}
export default app.database();
