/* eslint-disable default-case */
import {
    GET_CELLS,
    ISLOADING
} from '../actions/types';

const initialState = {

cells:[],
isLoading:true

}
export default function(state= initialState,action)
{
    switch (action.type)
    {
        case GET_CELLS:
            return {

            ...state,
            isLoading:false,
            cells: action.payload  

            }
        case ISLOADING:
            return {
                ...state,
                isLoading:true
            }
        default:
            return state;
    }
}