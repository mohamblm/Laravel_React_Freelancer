

const inistialState={
    user:null,
    token:localStorage.getItem('ACCESS_TOKEN'),
    loading:false,
    error:null,
    notification:null,
}

export const  authReducer=(state=inistialState,action)=>{
    // console.log(state.user);
    switch(action.type){
        case 'LOADING':
            return {...state,loading:true};
        case 'LOGIN_SUCCESS':
            return {...state, user:action.payload.user,token:action.payload.token, loading:false, error:null};
        case 'LOGIN_FAILURE':
            return {...state, user:null,token:null, loading:false, error:action.payload};
        case 'SIGNUP_SUCCESS':
            return {...state, user:action.payload.user,token:action.payload.token, loading:false, error:null};
        case 'LOGOUT_SUCCESS':
            return {...state, user:null,token:null, loading:false, error:null};
        
        case 'SIGNUP_FAILURE':
            return {...state, user:null, loading:false, error:action.payload};
        case 'LOGOUT_FAILURE':
            return {...state, user:null, token:null, loading:false, error:null};
        case 'REST_ERRORS':
            return {...state, error:null};
        case 'GET_USER':
            return {...state, user:action.payload}
        case 'NOTIFICATION':
            return {...state,notification:action.payload}
        case 'STOP_NOTIFICATION':
            return {...state,notification:null}
        default:
            return state;

    }
}
