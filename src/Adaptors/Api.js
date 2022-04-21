import axios from "axios"



const baseURL = "https://shop.devsharp.ir/api/"

 export const Get = async (action,data=null) => {

    let params = "";
    if (data) {
        params = "?";
        for (let key in data) {
            params += key + "="+ data[key] + "&";
        }
    }

    let response = await axios.get(baseURL + action.url + params)

    return (response.data)

}

 export const Post= async(action,data)=>{
     
  
    let formData = new FormData();

    for (let key in data) {
        formData.append(key, data[key]);
    }
    let response = await axios.post(baseURL + action.url, formData, {
        headers: { "Content-Type": "multipart/form-data" }
    }) 
    return(response.data)
}



export const Put = async (action, data) => {

    let formData = new FormData();

    for (let key in data) {
        formData.append(key, data[key]);
    }


    let response = await axios.put(baseURL + action.url, formData, {
        headers: { "Content-Type": "multipart/form-data" }
    })
        return response.data

}


