import { AnyAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { call, put } from 'redux-saga/effects';
import {
  LOGIN_RESPONSE
} from '../actions';

export function* userLogin(userDetailReq: any): any {
  try {
    // const userDetailResp: any = yield call(loginRequest, userDetailReq.userDetailReq);
    // if (userDetailResp != null) {

    //   yield put({ type: LOGIN_RESPONSE, userDetailResp });
    
      const actionPayload: AnyAction = {
        type: "GET_ENUM_DATA_REQ"
      }
  //   }
  } catch (error) {
    console.log(error);
  }
}

