import { auth } from "../services/firebase";

export function register(email, password) {
    return auth().createUserWithEmailAndPassword(email, password);
}
  
export function signin(email, password) {
    return auth().signInWithEmailAndPassword(email, password);
}