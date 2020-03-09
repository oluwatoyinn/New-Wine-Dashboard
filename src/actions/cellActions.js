import axios from 'axios'
import {BASE_URL} from '../configs/Constants'
import { GET_CELLS} from './types';
// import { NotificationManager} from 'react-notifications';


export const getCells = () => async dispatch => {
    const res = await axios.get(`${BASE_URL}/api/cells`);
    dispatch({
      type: GET_CELLS,
      payload: res.data.data
    });
    // NotificationManager.success('Successfully Processed', 'Query');

  };
  
