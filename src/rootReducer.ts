import { combineReducers } from "@reduxjs/toolkit";
import appointmentReducer from "./jsx/redux/ManageAppointment/ManageAppointmentReducer";
import SlotReducer from "./jsx/redux/ManageSlot/SlotReducer";
const rootReducer = combineReducers({

  appointmentReducer,
  SlotReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
