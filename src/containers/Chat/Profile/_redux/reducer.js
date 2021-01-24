import {
   GET_POFILE,
   GET_PROFILE_ERROR,
 } from "./type";

 const initialState = {
    profile:{},
    snackBarMessage:null,
 };
 
 export const profileReducer = (state=initialState, action) => {
     switch (action.type) {
        case GET_POFILE:
           return {
              ...state,
              profile:action.data,
           }
        case GET_PROFILE_ERROR:
           return {
              ...state,
              snackBarMessage:action.error,
           }
        default:
           return {
              ...state
           }
     }
 }
 