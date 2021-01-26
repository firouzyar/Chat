import {
   GET_MESSAGE_START,
   GET_MESSAGE_DATA,
   GET_MESSAGE_ERROR,
   ADD_MESSAGE
 } from "./type";
 import apiService from "../../../../ustils/apiRequests";

export function getMessageStart() {
    return{
       type: GET_MESSAGE_START,
    }
 }

 export function getMessageData(data) {
    return{
       type: GET_MESSAGE_DATA,
       data
    }
 }
 export function addMessage(data) {
   return{
      type: ADD_MESSAGE,
      data
   }
}
 export function getMessageError(error) {
    return{
       type: GET_MESSAGE_ERROR,
       error
    }
 }

 export const fetchMessage = queryParams => dispatch => {
    dispatch(getMessageStart());
    const url =`./mockData/message#${queryParams}.json`;
    return apiService.get( encodeURIComponent(url) )
      .then(response => {
        dispatch(getMessageData(response.data.reverse()));
      })
      .catch(error => {
        dispatch(getMessageError(error));
      });
  };