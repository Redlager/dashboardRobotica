import axios from 'axios'
export default axios.create({
//baseURL: 'http://localhost:8080',
//baseURL: 'http://192.168.100.32:8080',
// DE: https://github.com/axios/axios/issues/175

baseURL:(process.env.NODE_ENV !== 'production') ? 'http://localhost:8080/' : 'https://c3po.roboticamisiones.com/',

//baseURL: 'https://r2d2.roboticamisiones.com',
headers: {"Access-Control-Allow-Origin": "*"}
})