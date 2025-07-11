import axios from 'axios';

const httpRequest = axios.create({
  baseURL: '/localApi',
  timeout: 10000,
});

httpRequest.interceptors.request.use(function(config){
  const token = localStorage.getItem('token');
  if(token && token !== ''){
    config.headers['token'] = token;
  }
  return config;
});

httpRequest.interceptors.response.use(function(response){
  const data = response.data;
  if(data){
    if(data.code === '500'){
      throw new Error(data.msg);
    }
  }
  return data;
});

export default httpRequest;