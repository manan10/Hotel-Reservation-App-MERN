import * as actionTypes from '../actions/actionTypes'

let initialState = {
    id: null,
    email: null,
    username: null,
    isAdmin: false,
}

if(sessionStorage.getItem('userId')) {
    initialState = {
        id: sessionStorage.getItem('userId'),
        email: sessionStorage.getItem('email'),
        username: sessionStorage.getItem('username'),
        isAdmin: sessionStorage.getItem('isAdmin'),
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.USER_LOGIN: 
            sessionStorage.setItem('userId', action.payload.id)
            sessionStorage.setItem('email', action.payload.email)
            sessionStorage.setItem('username', action.payload.username)
            sessionStorage.setItem('isAdmin', action.payload.isAdmin)

            return {
                id: action.payload.id,
                email: action.payload.email,
                username: action.payload.username,
                isAdmin: action.payload.isAdmin,
            }
        
        case actionTypes.USER_LOGOUT: 
            sessionStorage.clear()
            return {
                id: null,
                email: null,
                username: null,
                isAdmin: false,
            }

        default: return state
    }
} 

export default reducer;