import { initialState } from "./initialState";

export const actionUser = "SET_USER";
export const actionToken = "SET_TOKEN";
export const setUser = (user) => {
    return {
        type : actionUser,
        payload : {
            user : user,
        }
    }
}
export const setToken = (token) => {
    return{
        type : actionToken,
        payload : {
            token : token,
        }
    }
}
export default function(state = initialState, action){
    console.log(action.payload);
    switch(action.type){
        case actionUser : 
            return {
                ...state,
                user : action.payload.user
            }
        case actionToken :
            return{
                ...state,
                token : action.payload.token
            }
        default : 
            return {
                state
            }
    }
}