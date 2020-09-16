import {REGISTER,LOGIN,LOGOUT} from '../usertype';

const initalstate = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')):null,
    isAuthenticated: localStorage.getItem('isAuth') || false,
    info: null,
    error:null
}

const userReducer = (state=initalstate,action)=>{
    const {type,payload} = action
    switch(type){
        case REGISTER:
            return{
                ...state ,info: payload.info,error:payload.error
            }
        case LOGIN:
            if(payload.user){
                localStorage.setItem('user',JSON.stringify(payload.user));
                localStorage.setItem('isAuth',true);
            }
            return{
                ...state,error: payload.error,user: payload.user,isAuthenticated: payload.error ? false : true
            } 
        case LOGOUT:
              localStorage.removeItem("user")
              localStorage.removeItem("isAuth")
            return{...state, user: null, isAuthenticated: false}       
        default:
            return state;    
            
    }

}

export default userReducer;