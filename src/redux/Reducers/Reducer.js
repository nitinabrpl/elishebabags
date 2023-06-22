
const initialState = {
    cartItem : [],
    cartCheckout : [],
    address : []
}

const CartReducer = (state = initialState,action)=>{
    console.warn('reducer',action.payload)
    switch(action.type){
        case 'addcart' : return{
            ...state, cartItem : [...state.cartItem,action.payload]
        }
        console.warn('addCart Reducer',state)
        case 'updatecart' : 
        const { payload } = action;
        const item = state.cartItem.find(
            product => product.id === payload.id,
          );
          if (item) {
            return {
              ...state,
              cartItem: state.cartItem.map(item => item.id === payload.id
                ? {
                  ...item,
                  qty: item.qty + payload.qty,
                }
                : item
              )
            };
            console.warn('updateCart Reducer',state)
          }
          return {
            ...state,
            cartItem: [...state.cartItem, payload]
          }
          case 'removecart' : return{
            ...state, cartItem : state.cartItem.filter((item)=> item.id !== action.payload)
          }
          case 'clearcart' : 
          return{
            ...state, cartItem : []
          }
          case 'cartcheckout' :
            return{
              ...state, cartCheckout : [...state.cartCheckout,action.payload]
            }
          case 'addressinfo' :
          return{
            ...state, address : [...state.address,action.payload]
          }
            
        default: return state
    }

}
export default CartReducer;