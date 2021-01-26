import {
   GET_MESSAGE_START,
   GET_MESSAGE_DATA,
   GET_MESSAGE_ERROR,
   ADD_MESSAGE

 } from "./type";

 const initialState = {
    message:[],
    noMessage:false,
    isLoading:false,
    snackBarMessage:null,
 };
 
 export const messageReducer = (state=initialState, action) => {
     switch (action.type) {
        case GET_MESSAGE_START:
           return {
              ...state,
              isLoading:true,
              snackBarMessage:null,
              noMessage:false,
           }
        case GET_MESSAGE_DATA:
           return {
              ...state,
              message: action.data,
              isLoading:false,
              snackBarMessage:null,
              noMessage:false,
           }
        case GET_MESSAGE_ERROR:
           return {
              ...state,
              snackBarMessage:action.error,
              noMessage:true,
              isLoading:false,
           }
         case ADD_MESSAGE:

            return {
               ...state,
               message:[...state.message,action.data],
               snackBarMessage:null,
               noMessage:false
            }
        default:
           return {
              ...state
           }
     }
 }
 