import { all } from "redux-saga/effects";


export default function* rootSaga() {
  try {
    yield all([
     
    ]);
  } catch (error) {
    // error management depending on production or dev environments
    console.log("ERROR SAGAS MAIN", error);
  }
}
