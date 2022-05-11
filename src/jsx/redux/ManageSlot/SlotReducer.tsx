import * as types from "./SlotActions";

export interface ActionInterface {
  type: string;
  payload: any;
}
interface ManageSlotState {
  slotDetailList: any | null;
}

const initialState: ManageSlotState = {
  slotDetailList: {},
};

export default (state = initialState, action: ActionInterface) => {
  switch (action.type) {
    case types.GET_SLOT_DETAIL_RES:
      return { ...state, slotDetailList: action.payload };

    default:
      return state;
  }
};
