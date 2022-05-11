import {
  LOGIN_REQUEST,
  LOGIN_RESPONSE
  } from '.';
  
  interface  loginDetailSuccessAction {
    type: typeof LOGIN_RESPONSE
    userDetailResp: any
  };
  interface loginDetailRequestAction {
    type: typeof LOGIN_REQUEST,
    userDetailReq:any
  };


  export type LoginActionTypes =
    | loginDetailSuccessAction
    | loginDetailRequestAction
    
  