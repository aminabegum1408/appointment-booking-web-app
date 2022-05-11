import { config, Method } from "../config";
import { serviceRequest } from "../serviceRequestMiddleware";

export async function loginRequest(userDetail:any) {
    const options = {
        method: Method.POST,
        url: "http://3.10.95.148/user-management/api/login",
        data:userDetail
      };
    
      return serviceRequest.request(options);
}