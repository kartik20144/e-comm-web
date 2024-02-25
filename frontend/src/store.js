import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slices/apiSlice'
import cartSliceReducer from './slices/cartSlice'

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]:apiSlice.reducer,
    cart:cartSliceReducer
  },
  middleware:(getdefaultMiddleware) => getdefaultMiddleware().concat(apiSlice.middleware),
  devTools:true
})

export default store 