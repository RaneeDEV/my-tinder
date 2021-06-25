import { db } from "./firebase";



export function createUser(userData) {
    db.collection("users").doc(userData.uid).set(userData)
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
}
export function modifyUser(uid, userData) {
    db.collection("users").doc(uid).set(userData, {merge: true})
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
}