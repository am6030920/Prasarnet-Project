const API_URL =process.env.REACT_APP_API_URL;

const Apis={
    RegisterUser:`${API_URL}/user/register`,
    LogInUser:`${API_URL}/user/login`,
  CreateMeeting: `${API_URL}/todoFrom/add`,
  GetAllMeetings: `${API_URL}/todoFrom/all`,
  UpdateMeeting: (id) => `${API_URL}/todoFrom/update/${id}`,
  DeleteMeeting: (id) => `${API_URL}/todoFrom/delete/${id}`,};
export{API_URL,Apis};