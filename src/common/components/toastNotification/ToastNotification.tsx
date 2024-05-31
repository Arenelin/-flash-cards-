import { Slide, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

export const ToastNotification = () => {
  return (
    <ToastContainer
      autoClose={2000}
      closeOnClick
      draggable
      hideProgressBar={false}
      limit={2}
      newestOnTop={false}
      pauseOnFocusLoss
      pauseOnHover
      position={'top-left'}
      rtl={false}
      stacked
      style={{ marginTop: '55px' }}
      theme={'dark'}
      transition={Slide}
    />
  )
}

ToastNotification.displayName = 'ToastNotification'
