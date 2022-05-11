import { config, Method, ResponseType } from "../config";
import { serviceRequest } from "../serviceRequestMiddleware";

export async function getAppointmentApi() {
  const options = {
    method: Method.GET,
    url: config.apis.appointmentDetailApi,
    headers: {
      "Authorization": "Bearer " + sessionStorage.getItem("token")
    }
  };
  return serviceRequest.request(options);
}

export async function updateAppointmentDetailApi(payload: any) {
  const options = {
    method: Method.PUT,
    url: config.apis.updateAppointmentApi + "/" + payload.id,
    data: payload,
    headers: {
      "Authorization": "Bearer " + sessionStorage.getItem("token")
    }
  };

  return serviceRequest.request(options);
}
