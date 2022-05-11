// Get List of slots
export const GET_SLOT_DETAIL_REQ = "GET_SLOT_DETAIL_REQ";
export const GET_SLOT_DETAIL_RES = "GET_SLOT_DETAIL_RES";

export const ADD_SLOT_DETAIL_REQ = "ADD_SLOT_DETAIL_REQ";
export const UPDATE_SLOT_DETAIL_REQ = "UPDATE_SLOT_DETAIL_REQ";

export const DELETE_SLOT_DETAIL_REQ = "DELETE_SLOT_DETAIL_REQ";

export const triggerGetSlotDetail = () => ({
  type: GET_SLOT_DETAIL_REQ,
});

export const triggerGetSlotDetailRes = (slotList: any) => ({
  type: GET_SLOT_DETAIL_RES,
  payload: slotList,
});

export const triggerAddSlotDetailReq = (slotDetail: any) => ({
  type: ADD_SLOT_DETAIL_REQ,
  payload: slotDetail,
});

export const triggerUpdateSlotDetailReq = (slotDetail: any) => ({
  type: UPDATE_SLOT_DETAIL_REQ,
  payload: slotDetail,
});

export const triggerDeleteSlotDetailReq = (slotId: any) => ({
  type: DELETE_SLOT_DETAIL_REQ,
  payload: slotId,
});
