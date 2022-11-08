import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAO9Yi3SYUQp_QVA6UTir4bm6NmBIjp-1k",
    authDomain: "danial-barazandeh.firebaseapp.com",
    projectId: "danial-barazandeh",
    storageBucket: "danial-barazandeh.appspot.com",
    messagingSenderId: "441919836787",
    appId: "1:441919836787:web:e48036290fde8bcf52d006",
    measurementId: "G-59CBBXBX1J"
};



export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const database = getFirestore(app);


