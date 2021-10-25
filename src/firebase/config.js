import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCJACiXw1w9UW4ueVUny5TMPXBQ6QZBc5A',
  authDomain: 'helloguysconvo.firebaseapp.com',
  databaseURL: 'https://helloguysconvo.firebaseio.com',
  projectId: 'helloguysconvo',
  storageBucket: 'helloguysconvo.appspot.com',
  messagingSenderId: '341595053011',
  appId: '1:341595053011:android:bb7d53c03301c671f72d26',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
