import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from '../Features/CounterSlice'

export const store=configureStore({
  reducer:{
    counter:CounterSlice,
  },
})