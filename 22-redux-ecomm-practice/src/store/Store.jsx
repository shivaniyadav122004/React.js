import { configureStore } from '@reduxjs/toolkit'
import { toggleSlice } from '../features/ToggleSlice'

export let store=configureStore({
  reducer:{
    toggle:toggleSlice,


  }
})
