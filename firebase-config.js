// Cole aqui os dados do seu app web (Firebase Console > Configurações do projeto > Seus apps)
export const firebaseConfig = {
  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRt-qwO5phr26V3ldKbLeSDDhxJx5rbKE",
  authDomain: "geradorrecibos-c720c.firebaseapp.com",
  projectId: "geradorrecibos-c720c",
  storageBucket: "geradorrecibos-c720c.firebasestorage.app",
  messagingSenderId: "374235715112",
  appId: "1:374235715112:web:1452547e80549967c3071d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
};
// O login por CNPJ vira um e-mail interno: 61871894000180@pepe-recibos.app
export const EMAIL_DOMAIN = "pepe-recibos.app";
