import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu =()=>{

 
   const [resInfo, setinfoList]=useState(null);
    useEffect(()=>{
        fetchfunction();
    },[]);

    const fetchfunction =async ()=>{
        const data = await fetch("https://fakerestaurantapi.runasp.net/api/Restaurant");
        const json = await data.json();
        console.log(json);
        setinfoList(json)

    

    }

    return (resInfo===null)?<Shimmer/>:(
        <div className="Restaurantmenu">
            <h1> {resInfo?.json}</h1>
            <h1> {resInfo?.json}</h1>
           
        </div>
    )
}
export default RestaurantMenu;