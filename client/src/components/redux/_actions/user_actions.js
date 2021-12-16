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