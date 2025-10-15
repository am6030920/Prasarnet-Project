const API_URL =process.env.REACT_APP_API_URL;

const Apis={
    RegisterUser:`${API_URL}/user/register`,
    LogInUser:`${API_URL}/user/login`
};
export{API_URL,Apis};