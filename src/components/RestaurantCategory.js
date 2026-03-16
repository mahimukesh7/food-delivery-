import { biryani1 } from "../../utils/mockdata/images";
import { useState } from "react";
import ItemList from "./Itemlist";

 const RestaurantCategory =()=>{
   const [showIndex, setshowIndex]=useState(false);


const handleclicked=()=>{
   setshowIndex(!showIndex);

  }
 

    return <div><div className="Rescat"  >
      
      
      
        
        
       
        <h2 className="recommended" > Recommended </h2>
        
        <div className="Itemlist12">
        <span >{showIndex && <ItemList />}</span>
       
        </div>
       <span  className="span1"onClick={handleclicked}>⬇️</span>
        
    </div>
   
        
   
   
    </div>
 }

export default RestaurantCategory; 