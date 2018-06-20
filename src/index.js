import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-type'] = 'application/json';

let myInterceptor = axios.interceptors.request.use(requestConfig => {
   console.log(requestConfig);
   // you can Edit request config before returning it
   return requestConfig;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

// the following line will delete the request interceptor of axios, just comment it out if you need the interceptor
axios.interceptors.request.eject(myInterceptor);

axios.interceptors.response.use(responseConfig => {
    console.log(responseConfig);
    return responseConfig;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
