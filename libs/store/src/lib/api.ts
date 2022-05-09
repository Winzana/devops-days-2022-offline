import axios from 'axios';

axios.defaults.baseURL = `https://api.demo.wz.camp`;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
