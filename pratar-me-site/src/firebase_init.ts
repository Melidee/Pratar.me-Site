import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = JSON.parse("")

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
