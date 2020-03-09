import {ISLOADINGFALSE,ISLOADINGTRUE,ISLOADING} from './types'






export const loadingFalse = () => async dispatch => {
   
        dispatch({

            type: ISLOADINGFALSE,
        });

  };
  
export const loadingTrue = () => async dispatch => {
   
        dispatch({

            type: ISLOADINGTRUE,
        });

  };
  

  export const changeIsLoading = ()=> async dispatch => {

    dispatch({
  
        type:ISLOADING
    })
  
  }
  
