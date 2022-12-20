import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyApus5Qbi7VFZYqP-mHYpvgDpahOLRv6Bg",
  authDomain: "loginx-logger.firebaseapp.com",
  projectId: "loginx-logger",
  storageBucket: "loginx-logger.appspot.com",
  messagingSenderId: "560473359944",
  appId: "1:560473359944:web:599f71234b63e29b613a7d"
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }