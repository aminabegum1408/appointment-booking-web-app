import { all, takeLatest } from 'redux-saga/effects'
import { userLogin } from './login'
import {
  LOGIN_REQUEST
} from '../actions';
export function* loginSaga() {
  yield all([
    takeLatest(LOGIN_REQUEST,userLogin),

    
   ])
}
