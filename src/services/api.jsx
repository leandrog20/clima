import axios from "axios";



 const api = (city) => {
    
    let response =  axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=a605a48b71cd5df79e649c549e3e639b&lang=pt_br&units=metric`)
    return response
  
  }

  export default api;