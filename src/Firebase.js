import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrSuiBIPB0B7xFSkvQPuGPbLNHQke8HR4",
  authDomain: "clone-38783.firebaseapp.com",
  projectId: "clone-38783",
  storageBucket: "clone-38783.firebasestorage.app",
  messagingSenderId: "774338249657",
  appId: "1:774338249657:web:ae6889d45e94297ec56c68"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export default app;