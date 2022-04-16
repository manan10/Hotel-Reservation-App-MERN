import * as actionTypes from './actionTypes'

export const loginUser = data => {
    return {
        type: actionTypes.USER_LOGIN,
        payload: data
    }
}

export const logoutUser = data => {
    return {
        type: actionTypes.USER_LOGOUT,
        payload: data
    }
}