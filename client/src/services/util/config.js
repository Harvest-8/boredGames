import * as firebase from 'firebase'; //imports firbase

let config = {
    apiKey: 'AIzaSyDG13UAG9HhqQLBzaFHs18ByqQa-WZOEBo',
    authDomain: 'boredgames-28c8e.firebaseapp.com',
    databaseURL: 'https://boredgames-28c8e.firebaseio.com',
    projectId: 'boredgames-28c8e',
    storageBucket: 'boredgames-28c8e.appspot.com',
    messagingSenderId: '501020012129',
    appId: '1:501020012129:web:5a2e7ba131d6c5ab7d0420',
    measurementId: 'G-52N4RGBHP9',
}; //configures firebase so it can connect with the correct database

firebase.initializeApp(config); //initialises firebase

export default firebase;
