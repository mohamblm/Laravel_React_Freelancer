const inistialState={
    categories:[],
    load:false,
    errors_c:null,
}

export const CategoriesReducer=(state=inistialState,action)=>{
    switch(action.type){
        case 'FETCH_CATEGORIES_SUCCESS':
            return {...state,categories: action.payload, load: false}
        case 'FETCH_CATEGORIES_FAILURE':
            return {...state,errors_c: action.payload, load: false}
        default:
            return state;
    }
}