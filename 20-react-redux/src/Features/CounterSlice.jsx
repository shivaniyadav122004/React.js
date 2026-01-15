import { createSlice } from "@reduxjs/toolkit";

let CounterSlice=createSlice({
  name:'count',
  initialState:{
    count:0,
  },
  reducers:{
    increment:(state)=>{
      state.count +=1
    },
    decrement:(state)=>{
      state.count -= 1
    },
    Addvalue:(state,action)=>{
      state.count += Number(action.payload)

    },
  
  }
})

export const {increment,decrement,Addvalue}=CounterSlice.actions

export default CounterSlice.reducer