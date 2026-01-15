import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../Features/authSlice'
import toggleSlice from '../Features/toggleSlice'

export let store=configureStore({
  reducer:{
    auth:authSlice,
    toggle:toggleSlice,

  }
})