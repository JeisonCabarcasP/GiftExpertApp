import { GiftItem } from "./GiftItem";
import {useFetchGifts} from "../hooks/useFetchGifts.js"

export const GiftGrid = ({category}) => {

  const {data, isLoding } = useFetchGifts({category}); // mi primer hook personalizado custom hook

  // const [data,setData]=useState([])

  // const getData = async() =>{
  //   const newData = await getGifts(category); 
  //   setData(newData);
  // }
  //   useEffect(()=>{
  //     getData();
  //   },[])
  //TODO ESTE CODIGO LO HACE EL CUSTOM HOOK

  return (
    <>
    <h3>{category}</h3>
    {isLoding ? <h2>Cargando ...</h2>: null}

    <div className='card-grid'>
      {data.map((data)=>(
        <GiftItem key={data.id} data={data}/>
      ))}      
    </div>


    </>
  )
}
