import axios from 'axios';

const httpRequest = axios.create({
  baseURL: '/localApi',
  timeout: 10000,
});

httpRequest.interceptors.request.use(function(config){
  //  console.log('axiosConfig response.request config=>', config)
  const token = localStorage.getItem('token');
  if(token && token !== ''){
    config.headers['token'] = token;
  }
  return config;
});

httpRequest.interceptors.response.use(function(response){
  // console.log('axiosConfig response.interceptors response=>', response)
  const data = response.data;
  // console.log('axiosConfig response.interceptors data=>', data)
  if(data){
    if(data.code === '500'){
      // throw new Error(data.msg);
      console.log('axiso response error msg=>', data.msg);
    }
  }
  return data;
});

export default httpRequest;