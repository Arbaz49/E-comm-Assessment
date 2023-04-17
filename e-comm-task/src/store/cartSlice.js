import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: {},
  },
  reducers: {
   addTocart:(state,action)=>{
    state.cart=action.payload
   }
   
   
  },
})

// Action creators are generated for each case reducer function
export const { addTocart} = cartSlice.actions

export default cartSlice.reducer