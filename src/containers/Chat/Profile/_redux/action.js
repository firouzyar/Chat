import {
   GET_POFILE,
   GET_PROFILE_ERROR,
 } from "./type";
 import apiService from "../../../../ustils/apiRequests";



 export function getProfileData(data) {
    return{
       type: GET_POFILE,
       data
    }
 }

 export function getProfileError(error) {
    return{
       type: GET_PROFILE_ERROR,
       error
    }
 }


//we dont have query params in this challenge but i write it if in case we need it
 export const fetProfile = queryParams => dispatch => {
    return apiService.get("../mockData/profile.json")
      .then(response => {
        dispatch(getProfileData(response.data));
      })
      .catch(error => {
        dispatch(getProfileError(error));
      });
  };