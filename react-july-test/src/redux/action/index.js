import { ALLDATA, FATCHING, CURRENTPOST, CREATEPOST, DELETEPOST, UPDATEPOST, USERPOST } from '../type';
import axios from 'axios';
import * as config from '../../config';
export const getAllData = () => async dispatch => {
    try {
        dispatch({ type: FATCHING })
        const { data } = await axios(`/post/all`);
        dispatch({
            type: ALLDATA,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }

}

export const currentPost = (id) => async dispatch => {
    try {
        const { data } = await axios(`/post/${id}`)
        dispatch({
            type: CURRENTPOST,
            payload: data
        })
    } catch (error) {
        console.log(error.response)
        dispatch({
            type: CURRENTPOST,
            payload: {
                error: error.response.data.error
            }
        })

    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await axios({
            method: 'post',
            url: `/post`,
            data:post,
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        dispatch({
            type: CREATEPOST,
            payload: data
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: CREATEPOST,
            payload: {
                error: error.response.data.error,
            }

        })

    }
}

export const deletePost = (id) => async dispatch => {

    try {
        const { data } = await axios({
            method: 'DELETE',
            url: `/post/${id}`
        })
        dispatch({
            type: DELETEPOST,
            payload: id
        })
    } catch (error) {
        console.log(error)

    }

}

export const updatePost = (post) => async dispatch => {
    try {
        const { data } = await axios({
            method: 'Put',
            url: `/post/${post.id}`,
            data: {
                photoUrl: post.imgUrl,
                title: post.title,
                description: post.description
            }
        });
        dispatch({
            type: UPDATEPOST,
            payload: post
        })
    } catch (error) {
        console.log(error)

    }
}

export const postByUser = () => async dispatch => {
    try {
        const { data } = await axios(`/post/userPost`);
        dispatch({
            type: USERPOST,
            payload: data
        })
    } catch (error) {
        console.log(error)

    }
}