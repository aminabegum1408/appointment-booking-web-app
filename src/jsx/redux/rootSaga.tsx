import { all } from "redux-saga/effects";
import { loginSaga } from "./Login/sagas";
import manageSlotSaga from "./ManageSlot/SlotSaga";
import manageAppointmentSaga from "./ManageAppointment/ManageAppointmentSaga";

export default function* rootSaga() {
  yield all([manageSlotSaga(), loginSaga(),manageAppointmentSaga()]);
}
