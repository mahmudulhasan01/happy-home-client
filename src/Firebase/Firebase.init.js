import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializefirebase = () => {
  initializeApp(firebaseConfig);
};
export default initializefirebase;
