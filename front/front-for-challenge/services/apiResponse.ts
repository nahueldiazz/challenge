import axios from "axios"

export const getItems = async (search : string)=>{
    const { data } = await axios.get('http://localhost:8080/api/items',{
        params:{
            q: search
        }
    })
    return data
}

export const getItemDescription = async (id : string)=>{
    const { data } = await axios.get(`http://localhost:8080/api/items/${id}`)

    return data
}