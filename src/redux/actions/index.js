export const getProduct = (payload) => ({
    type:'GET_PRODUCT_SEARCH',
    payload
})

export const getOnlyProduct = (payload) =>({
    type:'GET_ONLY_PRODUCT',
    payload
})

export const addCart = (payload) => ({
    type : 'ADD_CART',
    payload,

});


