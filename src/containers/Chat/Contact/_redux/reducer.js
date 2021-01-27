import {
   GET_CONTATC_START,
   GET_CONTATC_DATA,
   GET_CONTATC_ERROR,
   SEARCH_CONTATC,

 } from "./type";

 const initialState = {
    contacts:[],
    copyContacts:[],
    isContactLoading:false,
    snackBarMessage:null,
 };
 
 export const contactsReducer = (state=initialState, action) => {
     switch (action.type) {
        case GET_CONTATC_START:
           return {
              ...state,
              isContactLoading:true,
           }
        case GET_CONTATC_DATA:
           return {
              ...state,
              contacts: action.data,
              copyContacts:action.data,
              isContactLoading:false,
           }
        case GET_CONTATC_ERROR:
           return {
              ...state,
              snackBarMessage:action.error,
              isContactLoading:false
           }
         case SEARCH_CONTATC:
            return {
               ...state,
               copyContacts:state.contacts.filter((item)=>(item.firstName.toLowerCase().includes(action.name)|| item.lastName.toLowerCase().includes(action.name)))
            }
        default:
           return {
              ...state
           }
     }
 }
 