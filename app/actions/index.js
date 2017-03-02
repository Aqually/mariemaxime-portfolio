import Firebase from "firebase";
import axios from "axios";

export const FETCH_PORTFOLIO ="FETCH_PORTFOLIO";
export const SEND_EMAIL = "SEND_EMAIL";

//les configs de firebase
const config = {
  apiKey: 'AIzaSyCyI4Xhgdz-oKDcdnvIrXMGO2B-WL6zsck',
  databaseURL: 'https://blog-d25af.firebaseio.com/'
};

//initialiser Firebase
Firebase.initializeApp(config);
const database = Firebase.database().ref();

//fonction pour fetch les donner du portfolio de firebase
export function fetchPortFolio(){
    return dispatch => {
        database.once("value", snapshot =>{
            dispatch({
                type: FETCH_PORTFOLIO,
                payload: snapshot.val()
            });
        });
    };
};

export function sendEmail(data){
    return dispatch => {
        fetch('./contact', {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(data)
        }
    }
}
