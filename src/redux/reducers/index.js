
const reducer = (state, action) => {

    switch(action.type){
        
        case 'ADD_CART':
            return {
                ...state,
                mylist:[...state.mylist, action.payload ]
            }

        case 'GET_PRODUCT_SEARCH':
            if (action.payload === ""){
                return { ...state, searching:{} }
            }else{
                const listSearch = [...state.products, ...state.employee];
                return{
                    ...state,
                        searching: listSearch.filter(
                        items => items.title.toLowerCase().includes(
                            action.payload.toLocaleLowerCase())
                        )
                }
            }

            case 'GET_ONLY_PRODUCT':
            
                if (action.payload === ""){
                    return { ...state, searching:{} }
                }else{
                    const listSearch = [...state.products, ...state.employee];
                    return{
                        ...state,
                            searching: listSearch.filter(
                                items => items.title.toLowerCase().includes(
                                    action.payload.toLocaleLowerCase())
                            )
                    }
                }
                      
        default:
            return state;
    }

};


export default reducer;