import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: "https://rb-server-bf7y.onrender.com",
    // baseURL: "http://localhost:3000",
    timeout:3000
})

// global error handling

axiosInstance.interceptors.response.use(
    (response)=>{
        console.log("Response Received");
        return response
    },
    (error)=>{
        if(error.response){
            const status = error.response.status
            if(status == 401){
                console.log("Unauthorised Access - Redirect to login page");  
            }else if(status == 404){
                console.log("API not Found");
            }else if(status == 500){
                console.log("Something went Wrong... Try Again later!!!");
            }else if(error.request){
                console.log("No Response from Server");
            }else{
                console.log("Error"+error.message);
            }
                return Promise.reject(error)
        }
    }
)

export default axiosInstance