// Action types

interface IReceiveAuthToken {
  readonly type: 'auth/RECEIVE_AUTH_TOKEN'
  readonly token: string
  // readonly uuid: string
  [key: string]: any
}
interface IClearAuthToken {
  readonly type: 'auth/CLEAR_AUTH_TOKEN'
  [key: string]: any
}
interface ISetNewPassword {
  readonly type: 'auth/SET_NEW_PASSWORD'
  readonly error: any
  [key: string]: any
}
interface ISetLoginError {
  readonly type: 'auth/SET_LOGIN_ERROR'
  readonly loginError: string
  [key: string]: any
}
interface ISetRegisterError {
  readonly type: 'auth/SET_REGISTER_ERROR'
  readonly registerError: string
  [key: string]: any
}

interface IReceiveUserList {
  readonly type: 'user/RECEIVE_USER_LIST'
  readonly userList: any
  [key: string]: any
}

interface IReceiveUserByName {
  readonly type: 'user/RECEIVE_USER_BY_NAME'
  readonly user: any
  [key: string]: any
}

type ActionTypes =
  | IReceiveAuthToken
  | IClearAuthToken
  | ISetNewPassword
  | ISetLoginError
  | ISetRegisterError
  | IReceiveUserList
  | IReceiveUserByName

export default ActionTypes
