export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_RESPONSE = 'LOGIN_RESPONSE';

// export function getAllPlaylist() {
//   return { type: GET_PLAYLIST_DETAIL_REQUEST }
// }
export function loginRequest(data: any) {
  return { type: LOGIN_REQUEST, payload: data }
}
