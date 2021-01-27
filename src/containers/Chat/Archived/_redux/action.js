import {
   GET_ARCHIVED_START,
   GET_ARCHIVED_DATA,
   GET_ARCHIVED_ERROR,
 } from "./type";
 import apiService from "../../../../ustils/apiRequests";

export function getArchivedStart() {
    return{
       type: GET_ARCHIVED_START,
    }
 }

 export function getArchivedData(data) {
    return{
       type: GET_ARCHIVED_DATA,
       data
    }
 }

 export function getArchivedError(error) {
    return{
       type: GET_ARCHIVED_ERROR,
       error
    }
 }


//we dont have query params in this challenge but i write it if in case we need it
 export const fetchArchived = queryParams => dispatch => {
    dispatch(getArchivedStart());
    return apiService.get("../mockData/archives.json")
      .then(response => {
        dispatch(getArchivedData(response.data.reverse()));
      })
      .catch(error => {
        dispatch(getArchivedError(error));
      });
  };