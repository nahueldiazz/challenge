import axios from "axios"

export const getItems = async (search : string)=>{
   try {
     const { data } = await axios.get('http://localhost:8080/api/items',{
         params:{
             q: search
         }
     })
     return data
   } catch (error : any) {
    console.error(error?.message)
   }
}

export const getItemDescription = async (id : string)=>{
 try {
       const { data } = await axios.get(`http://localhost:8080/api/items/${id}`)
   
       return data
 } catch (error : any) {
    console.error(error?.message)
 }
}