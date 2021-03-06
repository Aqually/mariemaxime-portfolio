import firebase from "firebase";

export const FETCH_PORTFOLIO = "FETCH_PORTFOLIO";
export const SEND_EMAIL = "SEND_EMAIL";

//les configs de firebase
const config = {
    apiKey: 'AIzaSyCyI4Xhgdz-oKDcdnvIrXMGO2B-WL6zsck',
    databaseURL: 'https://blog-d25af.firebaseio.com/',
    authDomain: "https://blog-d25af.firebaseapp.com",
    storageBucket: "blog-d25af.appspot.com"
};

//initialiser Firebase
firebase.initializeApp(config);
const database = firebase.database().ref();
const storage = firebase.storage();
const storageRef = storage.ref();

//fonction pour fetch les donner du portfolio de firebase
export function fetchPortFolio() {
    return dispatch => {
        database.on("value", snapshot => {
            dispatch({
                type: FETCH_PORTFOLIO,
                payload: snapshot.val()
            });
        });
    };
};

export function sendEmail(data) {
    return dispatch => {
        return fetch('./contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
}
