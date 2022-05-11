import {
  LOGIN_REQUEST,
  LOGIN_RESPONSE
} from '../actions'
import { LoginActionTypes } from '../actions/types'

interface PlaylistState {
  userDetailResp: any | null,

}


const initCommonState: PlaylistState = {
  userDetailResp: {}
}

export const playlist = (state = initCommonState, action: LoginActionTypes) => {
  switch (action.type) {
    case LOGIN_RESPONSE:
      return { ...state, userDetailResp: action.userDetailResp.data }

    default:
      return state
  }
}
