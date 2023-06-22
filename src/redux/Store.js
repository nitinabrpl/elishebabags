import {createStore} from 'redux';
import CartReducer from './Reducers/Reducer';


const store = createStore(CartReducer);

export default store;