import axios from 'axios'

import { baseURL } from './backend';

const instance = axios.create({
    baseURL: baseURL
});

export default instance;