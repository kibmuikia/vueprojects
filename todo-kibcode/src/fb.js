import firebase from 'firebase/app'
import 'firebase/firestore'


// Initialize Firebase
var config = {
	apiKey: "AIzaSyAp8MUTGYgUTwIh7EoIskxfSbZLgMa_Bsg",
	authDomain: "todo-kibcode.firebaseapp.com",
	databaseURL: "https://todo-kibcode.firebaseio.com",
	projectId: "todo-kibcode",
	storageBucket: "todo-kibcode.appspot.com",
	messagingSenderId: "220414640673"
};

firebase.initializeApp(config);

const db = firebase.firestore();

db.settings( { timestampsInSnapshots: true } );

export default db;