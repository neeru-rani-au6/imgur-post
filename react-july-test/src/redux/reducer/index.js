import { ALLDATA, CURRENTPOST, CREATEPOST, DELETEPOST, UPDATEPOST, USERPOST } from '../type';
const initalstate = {
    posts: null,
    currentPost: null,
    userPost: null
}

const postReducer = (state = initalstate, action) => {
    const { type, payload } = action;
    switch (type) {
        case ALLDATA:
            return { ...state, posts: payload }
        case CURRENTPOST:
            return { ...state, currentPost: payload }
        case CREATEPOST:
            const posts = [...state.posts, payload];
            return {
                ...state, posts
            }
        case DELETEPOST:
            return {
                ...state, posts: state.posts.filter((post) => post.id !== payload.id)
            }
        case UPDATEPOST:

            var newPosts = [...state.posts];
            newPosts.forEach((post) => {
                if (post.id === payload.id) {
                    post.photoUrl = payload.photoUrl;
                    post.title = payload.title;
                    post.description = payload.description
                }
            })
            return {
                ...state, posts: newPosts
            }
        case USERPOST:
            return {
                ...state, userPost: payload
            }
        default:
            return state;
    }
}
export default postReducer;