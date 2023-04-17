import { configureStore } from '@reduxjs/toolkit'
import cart from './cartSlice'
import user from "./userSlice"
export default configureStore({
  reducer: {
    cart,
    user
  },
})