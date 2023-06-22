import {buyBook} from './BookTypes';
const initialData = {
    totalBooks : 100
}
const BookReducer = (state = initialData, action)=>{
    switch(action.type){
        case buyBook : return{
            ...state, totalBooks : state.initialData - 1
        }
        default: return state
    }
}
export default BookReducer;