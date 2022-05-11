import { config, Method, ResponseType } from "../config";
import { serviceRequest } from "../serviceRequestMiddleware";

export async function getSlotDetailApi(payload: any) {
  const options = {
    method: Method.GET,
    url: config.apis.slotDetailApi,
    data: payload,
    headers: { "Authorization": "Bearer " + sessionStorage.getItem("token") }
  };

  return serviceRequest.request(options);
}


export async function addSlotDetailApi(payload: any) {
  const options = {
    method: Method.POST,
    url: config.apis.slotDetailApi,
    data: payload,
    headers: { "Authorization": "Bearer " + sessionStorage.getItem("token") }
  };

  return serviceRequest.request(options);
}

export async function updateSlotDetailApi(payload: any) {
  const options = {
    method: Method.PUT,
    url: config.apis.slotDetailApi + "/" + payload._id,
    data: payload
  };

  return serviceRequest.request(options);
}

export async function deleteSlotDetailApi(payload: any) {
  const options = {
    method: Method.DELETE,
    url: config.apis.slotDetailApi + "/" + payload,
  };

  return serviceRequest.request(options);
}
