const firebase = require('firebase')
// Initialize Firebase
const config = {
  apiKey: 'AIzaSyAi9NHJQQqv_Yva0ISlUMJ1v5xmoYuksoU',
  authDomain: 'lading-page-a7765.firebaseapp.com',
  databaseURL: 'https://lading-page-a7765.firebaseio.com',
  projectId: 'lading-page-a7765',
  storageBucket: 'lading-page-a7765.appspot.com',
  messagingSenderId: '274956436934'
}

firebase.initializeApp(config)

export const database = firebase.database()
