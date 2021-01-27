import {
   GET_CONTATC_START,
   GET_CONTATC_DATA,
   GET_CONTATC_ERROR,
   SEARCH_CONTATC,
 } from "./type";
 import apiService from "../../../../ustils/apiRequests";

export function getContactsStart() {
    return{
       type: GET_CONTATC_START,
    }
 }

 export function getContactsData(data) {
    return{
       type: GET_CONTATC_DATA,
       data
    }
 }

 export function getContactsError(error) {
    return{
       type: GET_CONTATC_ERROR,
       error
    }
 }
 export function searchContacts(name) {
   return{
      type: SEARCH_CONTATC,
      name
   }
}

//we dont have query params in this challenge but i write it if in case we need it
 export const fetchContacts = queryParams => dispatch => {
    dispatch(getContactsStart());
    return apiService.get("../mockData/contacts.json")
      .then(response => {
        dispatch(getContactsData(response.data));
      })
      .catch(error => {
        dispatch(getContactsError(error));
      });
  };