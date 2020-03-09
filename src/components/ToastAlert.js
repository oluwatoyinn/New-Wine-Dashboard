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

export const createNotification = (type) => {
  return () => {
    switch (type) {
      case 'info':
        NotificationManager.info('Info message');
        break;
      case 'success':
        NotificationManager.success('Success message', 'Title here');
        break;
      case 'warning':
        NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
        break;
      case 'error':
        NotificationManager.error('Error message', 'Click me!', 5000, () => {
          alert('callback');
        });
        break;
      default:

    }
  };
};
