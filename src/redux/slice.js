import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState={
  data:null,
  loading: true
}

export const getFetchinggAsync=(option) => async (dipatch)=>{
  try {
    const response= await axios.request(option)
    // console.log(response.data.hints)
    dipatch(fetch_data((response.data.hints)))
  } catch (error) {
    console.log(error)
  }
}

export const fetchSlice=createSlice({
  name:"fetchingData", 
  initialState,
  reducers:{
    fetch_data:(state,{payload})=>{state.data= payload; state.loading=false }
  }
})
export const {fetch_data}=fetchSlice.actions 