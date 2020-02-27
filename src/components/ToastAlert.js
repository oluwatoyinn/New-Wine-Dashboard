import React from 'react'
import toaster from 'toasted-notes';

export const Alert = (msg)=> {

        toaster.notify(()=>(
            
            <div className="alert alert-success" role="alert">
                <i className="fas fa-check"></i>&nbsp;
                {msg}
            </div>
    ), {
        duration: 5000,
        position:'top-right'
      })
}