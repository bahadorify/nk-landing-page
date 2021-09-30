export interface RootState {
  data: {
    userId: null | string,
    userToken: null | string,
  }
}

export interface LoginResponse {
  automaticLogin: boolean
  tag: string
  location: string
  token: string
  deviceKey: string
}
