import axios from 'axios';
import { baseApiUri } from './config';

export const api = axios.create({
  baseURL: baseApiUri,
});
