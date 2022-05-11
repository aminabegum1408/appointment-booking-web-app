import { takeEvery, call, put } from "redux-saga/effects";
import {
  getAppointmentApi,
  updateAppointmentDetailApi,
} from "../../services/apis/ManageAppointmentApi";
import * as types from "./ManageAppointmentActions";
import { ActionInterface } from "./ManageAppointmentReducer";

function* getAppointmentDetail(action: any) {
  const response = yield call(getAppointmentApi);
  if (response.success) {
    yield put(types.triggerGetAppointmentDetailsRes(response.success.data));
  }
}

function* updateAppointmentDetail(action: any) {
  const response = yield call(updateAppointmentDetailApi, action.payload);
  // console.log("action response ",response);
  if (response.success) {
    let action = {
      type: types.GET_APPOINTMENT_DETAIL_REQ,
      payload: { offset: 9, pageNumber: 0, searchBy: "" },
    };
    yield call(getAppointmentDetail, action);
  }
}

export default function* manageAppointmentSaga() {
  yield takeEvery(types.GET_APPOINTMENT_DETAIL_REQ, getAppointmentDetail);
  yield takeEvery(types.UPDATE_APPOINTMENT_DETAIL_REQ, updateAppointmentDetail);
}
