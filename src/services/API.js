import  axios from 'axios'

const API = axios.create({baseURL: process.env.REACT_APP_BASEURL}) //ab API variable mein apne api  ka path store hogaya, ab poora path dene ki zaroorat nahi
//API  axios  ka object  hai, same functionality  use kar lega
API.interceptors.request.use((req) =>{
    if(localStorage.getItem('token')){ //user login hoga tab token generate hoga aur yahan local storage se milega
        req.headers.Authorization = `Bearer ${localStorage.getItem("token")} `;
    }
    return req
});
//interceptor  laga kar  api apna saare CRUD kar lega


export default API;