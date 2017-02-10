import Firebase from "firebase";
export const FETCH_PORTFOLIO ="FETCH_PORTFOLIO";

const config = {
  apiKey: 'AIzaSyCyI4Xhgdz-oKDcdnvIrXMGO2B-WL6zsck',
  databaseURL: 'https://blog-d25af.firebaseio.com/'
};

Firebase.initializeApp(config);
const database = Firebase.database();
console.log(database)
export function fetchData(){
    return dispatch => {
        database.on("value", snap =>{
            dispatch({
                type: FETCH_PORTFOLIO,
                payload: snapshot.val()
            });
        });
    };
};
