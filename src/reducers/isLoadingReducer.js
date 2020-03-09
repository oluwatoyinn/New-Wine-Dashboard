/* eslint-disable default-case */
import {
    ISLOADINGFALSE,
    ISLOADINGTRUE,
} from '../actions/types';

const initialState = {

isLoading:true

}
export default function(state= initialState,action)
{
    switch (action.type)
    {
        case ISLOADINGFALSE:
            return {

            ...state,
            isLoading: false
            
            }
        case ISLOADINGTRUE:
            return {

            ...state,
            isLoading: true
            
            }
        default:
            return state;
    }

}