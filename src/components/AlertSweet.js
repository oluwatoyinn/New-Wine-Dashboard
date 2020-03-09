
import Swal from 'sweetalert2'


export const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  
  

// Toast.fire({
//     icon: 'success',
//     title: "Cell Successfully Created"
// })


// Swal.fire({
//     icon: 'success',
//     title: 'Success',
//     text: '',
//     showClass: {
//         popup: 'animated zoomIn faster'
//       },
//       hideClass: {
//         popup: 'animated zoomOut faster'
//       },
//     timer: 1500,
//     showConfirmButton: false
// })