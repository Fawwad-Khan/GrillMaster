import axios from "axios";
import { config } from '../Config'

const API_URL = config.api;

export const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  headers: {}
});
