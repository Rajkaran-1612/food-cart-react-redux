import {combineReducers,} from "redux";
import productReducer from "../products/productReducer";
import { cartreducer } from "./reducer";


const rootred = combineReducers({
    cart: cartreducer, 
    product: productReducer
});


export default rootred