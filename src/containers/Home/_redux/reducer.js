import {
   GET_THREADS_START,
   GET_THREADS_DATA,
   GET_THREADS_ERROR,
   SEARCH_THREADS,

 } from "./type";

 const initialState = {
    threads:[],
    isLoading:false,
    snackBarMessage:null,
 };
 
 export const homeReducer = (state=initialState, action) => {
     switch (action.type) {
        case GET_THREADS_START:
           return {
              ...state,
              isLoading:true,
           }
        case GET_THREADS_DATA:
           return {
              ...state,
              threads: action.data,
              isLoading:false,
           }
        case GET_THREADS_ERROR:
           return {
              ...state,
              snackBarMessage:action.error,
              isLoading:false
           }
         case SEARCH_THREADS:
            return {
               ...state,
               threads:state.threads.filter((item)=>item.title.toLowerCase().includes(action.name))
            }
        default:
           return {
              ...state
           }
     }
 }
 