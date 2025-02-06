

const inistialState={
    services:[],
    service:null,
    load:false,
    errors:null,
}

export const servicesReducer=(state=inistialState,action)=>{
    switch(action.type){
        case 'FETCH_SERVICES_SUCCESS':
            return {...state,services:action.payload, load:false}
        case 'FETCH_SERVICES_FAILURE':
            return {...state,errors:action.payload, load:false}
        case 'FETCH_SERVICE_SUCCESS':
            return {...state, service:action.payload , load:false}
        case 'FETCH_SERVICE_FAILURE':
            return {...state, errors:action.payload, load:false}
        case 'TRUE_LOADING':
            return {...state, load:action.payload}
        case 'FALSE_LAODING':
            return {...state, load:action.payload}
        default:
            return state;
    }
}