import { takeEvery, call, put } from "redux-saga/effects";
import { SORT } from "../../../utils/constant";
import { getSlotDetailApi, addSlotDetailApi, updateSlotDetailApi, deleteSlotDetailApi } from "../../services/apis/ManageSlotApi";
import * as types from "./SlotActions";
import { ActionInterface } from "./SlotReducer";

function* getSlotDetails(action: ActionInterface) {
  const response = yield call(getSlotDetailApi, action.payload);
  if (response.success) {
    yield put(types.triggerGetSlotDetailRes(response.success.data));
  }
}

function* addSlotDetail(action: ActionInterface) {
  const response = yield call(addSlotDetailApi, action.payload);
  if (response.success) {
    let action = {
      type: types.GET_SLOT_DETAIL_REQ,
      payload: {
        offset: 9,
        pageNumber: 0,
        searchBy: "",
        sortIn: SORT.SORT_DESC,
      },
    };
    yield call(getSlotDetails, action);
  }
}

function* updateSlotDetail(action: any) {
  const response = yield call(updateSlotDetailApi, action.payload);
  if (response.success) {
    let action = {
      type: types.GET_SLOT_DETAIL_REQ,
      payload: {
        offset: 9,
        pageNumber: 0,
        searchBy: "",
        sortIn: SORT.SORT_DESC,
      },
    };
    yield call(getSlotDetails, action);
  }
}

function* deleteSlotDetail(action: any) {
  const response = yield call(deleteSlotDetailApi, action.payload);
  if (response.success) {
    let action = {
      type: types.GET_SLOT_DETAIL_REQ,
      payload: {
        offset: 9,
        pageNumber: 0,
        searchBy: "",
        sortIn: SORT.SORT_DESC,
      },
    };
    yield call(getSlotDetails, action);
  }
}
export default function* manageSlotSaga() {
  yield takeEvery(types.GET_SLOT_DETAIL_REQ, getSlotDetails);
  yield takeEvery(types.ADD_SLOT_DETAIL_REQ, addSlotDetail);
  yield takeEvery(types.UPDATE_SLOT_DETAIL_REQ, updateSlotDetail);
  yield takeEvery(types.DELETE_SLOT_DETAIL_REQ, deleteSlotDetail);
}
