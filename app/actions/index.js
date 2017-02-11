import Firebase from "firebase";
export const FETCH_PORTFOLIO ="FETCH_PORTFOLIO";

const config = {
  apiKey: 'AIzaSyCyI4Xhgdz-oKDcdnvIrXMGO2B-WL6zsck',
  databaseURL: 'https://blog-d25af.firebaseio.com/'
};

Firebase.initializeApp(config);
const database = Firebase.database().ref();

export function fetchPortFolio(){
    return dispatch => {
        database.on("value", snapshot =>{
            dispatch({
                type: FETCH_PORTFOLIO,
                payload: snapshot.val()
            });
        });
    };
};
