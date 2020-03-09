import {combineReducers} from 'redux';
import cellReducers from './cellReducers'
import isLoadingReducers from './isLoadingReducer'

export default combineReducers ({

        cellReducers,
        isLoadingReducers
});