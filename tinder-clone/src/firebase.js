import firebase from 'firebase'

const firebaseConfig={
  
        apiKey: "AIzaSyCBCikHqKvlOf8uh5_WF8xdRtVaQv_x4P0",
        authDomain: "tinder-react-15a55.firebaseapp.com",
        projectId: "tinder-react-15a55",
        storageBucket: "tinder-react-15a55.appspot.com",
        messagingSenderId: "339789939905",
        appId: "1:339789939905:web:7b3ac66df4d53531aec040"
     
};

const firebaseApp=firebase.initializeApp(firebaseConfig)
const database=firebaseApp.firestore();
export default database;
