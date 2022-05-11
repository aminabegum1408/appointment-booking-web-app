import * as types from "./ManageAppointmentActions";

export interface ActionInterface {
  type: string;
  payload: any;
}
interface OrganizationState {
  appointmentList: any | null;
}

const initialState: OrganizationState = {
    appointmentList: [],
};

export default (state = initialState, action: ActionInterface) => {
  switch (action.type) {
    case types.GET_APPOINTMENT_DETAIL_RES:
      return { ...state, appointmentList: action.payload };

    default:
      return state;
  }
};
