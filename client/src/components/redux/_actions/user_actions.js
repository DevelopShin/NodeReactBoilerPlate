import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
} from './types';
import axios from 'axios';
import { USER_SERVER } from '../../Config.js';

export function registerUser(dataToSubmit){
  const request = axios.post(`${USER_SERVER}/register`,dataToSubmit)
      .then(response => response.data);
  
  return {
      type: REGISTER_USER,
      payload: request
  }
}

export function loginUser(dataToSubmit){
  const request = axios.post(`${USER_SERVER}/signin`,dataToSubmit)
      .then(response => console.log(response.data));
      
  
  return {
      type: LOGIN_USER,
      payload: request
  }
}


export function logout(dataToSubmit){
  const request = axios.get(`${USER_SERVER}/logout`,dataToSubmit)
      .then(response => response.data);
  
  return {
      type: LOGOUT_USER,
      payload: request
  }
}

export function auth(dataToSubmit){
  const request = axios.get(`${USER_SERVER}/logout`,dataToSubmit)
      .then(response => response.data);
  
  return {
      type: AUTH_USER,
      payload: request
  }
}