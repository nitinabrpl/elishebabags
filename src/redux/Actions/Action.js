

export const addToCart = (data)=>{
    return {
        type : 'addcart',
        payload:data
    }
}
export const updateCart = (data)=>{
    return {
        type : 'updatecart',
        payload:data
    }
}
export const removeCart = (data)=>{
    return {
        type : 'removecart',
        payload:data
    }
}
export const clearCart = (data)=>{
    return {
        type : 'clearcart',
        payload:data
    }
}
export const cartCheckout = (data)=>{
    return {
        type : 'cartcheckout',
        payload:data
    }
}
export const addressInfo = (data)=>{
    return {
        type : 'addressinfo',
        payload:data
    }
}
