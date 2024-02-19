import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import axios from 'axios'
import ServicesProvider from './services/ServicesProvider.tsx'

// import './interceptors.ts';

axios.interceptors.request.use(request => {
  console.log(request);

  request.headers.Authorization = 'TOKEN con AXIOS'

  return request;
}, error => {
  console.log(error);
  return error;
});

axios.interceptors.response.use(response => {
  console.log(response);
  return response;
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ServicesProvider>
    <App />
  </ServicesProvider>,
)