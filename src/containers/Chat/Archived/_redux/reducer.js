import {
   GET_ARCHIVED_START,
   GET_ARCHIVED_DATA,
   GET_ARCHIVED_ERROR,

 } from "./type";

 const initialState = {
    archives:[],
    isLoading:false,
    snackBarMessage:null,
 };
 
 export const archivesReducer = (state=initialState, action) => {
     switch (action.type) {
        case GET_ARCHIVED_START:
           return {
              ...state,
              isLoading:true,
           }
        case GET_ARCHIVED_DATA:
           return {
              ...state,
              archives: action.data,
              isLoading:false,
           }
        case GET_ARCHIVED_ERROR:
           return {
              ...state,
              snackBarMessage:action.error,
              isLoading:false
           }
        default:
           return {
              ...state
           }
     }
 }
 