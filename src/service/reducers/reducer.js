import { ADD_TO_CART } from '../constants'
const initialState = {
    cardData: []
}
export default function cardItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            let ind = 0;
            let cc = false
             console.warn("action",action.data.id)
             console.warn("state",state.length)
            // console.warn("cart",state)
            if(state.length >0){
                state.map((item,i)=>{
                    console.warn('id',item.cardData.id)
            //     if(state.cart.id == action.data.id){
            //       ind = i
            //         cc = true
            //     }else{
                    
            //     }
                
             })
            }
            
            return [
                ...state,
                {cardData: action.data}
                
            ]
        default:
            return state
    }


}