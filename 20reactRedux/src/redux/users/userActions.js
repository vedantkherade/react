
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "../users/userTypes";
import axios from "axios";

export const fetchUserInputRequest = () =>{
    return{
        type: FETCH_USERS_REQUEST
    }
}


export const fetchUserInputSuccess = (users) => {
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUserInputFailure = (error) => {
    return{
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}


export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserInputRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data
            dispatch(fetchUserInputSuccess(users))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchUserInputFailure(errorMsg))
        })
    }
}