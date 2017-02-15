import Firebase from "firebase";
export const FETCH_PORTFOLIO ="FETCH_PORTFOLIO";

//les configs de firebase
const config = {
  apiKey: 'AIzaSyCyI4Xhgdz-oKDcdnvIrXMGO2B-WL6zsck',
  databaseURL: 'https://blog-d25af.firebaseio.com/'
};

//initialiser Firebase
Firebase.initializeApp(config);
const database = Firebase.database().ref();

//fonction pour fetch les donner des firebase
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
