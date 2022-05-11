export const GET_APPOINTMENT_DETAIL_REQ = "GET_APPOINTMENT_DETAIL_REQ";
export const GET_APPOINTMENT_DETAIL_RES = "GET_APPOINTMENT_DETAIL_RES";
export const UPDATE_APPOINTMENT_DETAIL_REQ = "UPDATE_APPOINTMENT_DETAIL_REQ";

export const triggerGetAppointmentDetails = () => ({
  type: GET_APPOINTMENT_DETAIL_REQ,
});

export const triggerGetAppointmentDetailsRes = (appointmentData: any) => ({
  type: GET_APPOINTMENT_DETAIL_RES,
  payload: appointmentData,
});


export const triggerUpdateAppointmentDetail = (appointmentData: any) => ({
  type: UPDATE_APPOINTMENT_DETAIL_REQ,
  payload: appointmentData,
});