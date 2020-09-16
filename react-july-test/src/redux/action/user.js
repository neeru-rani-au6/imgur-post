import { REGISTER, LOGIN, LOGOUT } from '../usertype';
import axios from 'axios';
import * as config from '../../config';

export const registerUser = (user) => async dispatch => {
    console.log(user)
    try {
        const { data } = await axios({
            method: 'post',
            url: `/users/register`,
            data: {
                name: user.name,
                email: user.email,
                password: user.password
            }
        });
        dispatch({
            type: REGISTER,
            payload: {
                error: null,
                info: data
            }
        })
    } catch (error) {
        dispatch({
            type: REGISTER,
            payload: {
                error: error.response.data.error,
                info: null
            }

        })
    }
}

export const loginUser = (user) => async dispatch => {
    //console.log(user)
    try {
        const { data } = await axios({
            method: 'post',
            url: `/users/login`,
            data: {
                email: user.email,
                password: user.password
            }
        });
        dispatch({
            type: LOGIN,
            payload: { error: null, user: data }
        })


    } catch (error) {
        console.log(error.response.data)
        dispatch({
            type: LOGIN,
            payload: { error: error.response.data.error }
        })

    }
}

export const userLogout = () => async dispatch => {
    try {
        const { data } = await axios(`/users/logout`)
        dispatch({
            type: LOGOUT,
            payload :  null
        })
    } catch (error) {
        console.log(error)
    }
}