export const SHOW_LOGIN = "LOGIN::SHOW_LOGIN";
export const ADD_LOGIN = "LOGIN::ADD_LOGIN";
export const IS_AUTHIFICATED = "LOGIN::IS_AUTHIFICATED";

export const showLogin = () => ({ type: SHOW_LOGIN })
export const addLogin = (login) => ({ type: ADD_LOGIN, payload: login })
export const switchAuthVar = (isAuth) => ({ type: IS_AUTHIFICATED, payload: isAuth })

