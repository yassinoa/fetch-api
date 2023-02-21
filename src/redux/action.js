import axios from "axios"
import { FETCH_DATA } from "./actionType"

//x option
export const fetch_data=(option) => async (dipatch)=>{
  try {
    const response= await axios.request(option)
    console.log(response)
    dipatch({
      type: FETCH_DATA,
      payload: response.data.hints
    })
  } catch (error) {
    console.log(error)
  }
}