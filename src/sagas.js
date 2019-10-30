import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

const Api = 'https://us-central1-todolist-app-275ac.cloudfunctions.net/entries'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
   try {
      const user = yield call(Api.fetchUser, action.payload.userId);
      yield put({type: "ADD_USER_DETAILS", user: user});
   } catch (e) {
      yield put({type: "ADD_USER_DETAILS", message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery("ADD_USER_DETAILS", fetchUser);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/


export default mySaga;