import {
   GET_THREADS_START,
   GET_THREADS_DATA,
   GET_THREADS_ERROR,
   SEARCH_THREADS,
 } from "./type";
 import apiService from "../../../../ustils/apiRequests";

export function getThreadsStart() {
    return{
       type: GET_THREADS_START,
    }
 }

 export function getThreadsData(data) {
    return{
       type: GET_THREADS_DATA,
       data
    }
 }

 export function getThreadsError(error) {
    return{
       type: GET_THREADS_ERROR,
       error
    }
 }
 export function searchThreads(name) {
   return{
      type: SEARCH_THREADS,
      name
   }
}

//we dont have query params in this challenge but i write it if in case we need it
 export const fetchThreads = queryParams => dispatch => {
    dispatch(getThreadsStart());
    return apiService.get("../mockData/threads.json")
      .then(response => {
        dispatch(getThreadsData(response.data.reverse()));
      })
      .catch(error => {
        dispatch(getThreadsError(error));
      });
  };