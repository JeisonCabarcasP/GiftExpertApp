import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";


export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);

    const onAddCategory = (newCategory) =>{
        if(categories.includes(newCategory)) return;
        setCategories([newCategory,...categories]);
    }

  return (
    <>
    <h1>GiftExpertApp</h1>
    <AddCategory onNewValue={onAddCategory}/>
    
    {
    categories.map((category) => 
        (
        <GiftGrid key={category} category={category}/>
        )        
      )
    }       

      
    </>
  )
}
