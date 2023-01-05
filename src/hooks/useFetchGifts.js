import { useState } from "react";
import { useEffect } from "react";
import { getGifts } from "../helpers/getGifts";

export const useFetchGifts = ({category}) => {

  const [data,setData]=useState([])
  const [isLoding,setIsLoding] = useState(true)

  const getData = async() =>{
    const newData = await getGifts(category); 
    setData(newData);
    setIsLoding(false);
  }
    useEffect(()=>{
      getData();
    },[])

  return {

    data,
    isLoding,

  }

  
} // un hookk es una funcion que regresa algo, para este ejemplo un objeto
