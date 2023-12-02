import axios from "axios"
import { JobFormData,Skill } from "../types/Types";

const url=`http://localhost:3000`

export const postdata =async (saveCompanyData:JobFormData)=>{
    const result=await axios.post(url+`/submitJob`, saveCompanyData);
    return result;
}



