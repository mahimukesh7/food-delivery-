import RestaurantCard ,{withPromotedLabel}from "./RestaurantCard";
import ResList from "../../utils/mockdata";
import Shimmer from "./Shimmer";
import { useState , useEffect } from "react";
import UserContext from "../../utils/UserContext";
import { useContext } from "react";



const Body =()=>{

const [listofRes,setlistofRes] = useState([]);
const [filteredreslist,setfilteredlist] =useState([]);
const [searchText, setSearchtext]=useState("");
const RestaurantCardPromoted= withPromotedLabel(RestaurantCard);
const {setuserName}=useContext(UserContext);




useEffect(()=>{
   
    fetchData();
},[]);
const fetchData = async ()=>{
      const data = await fetch("https://fakerestaurantapi.runasp.net/api/Restaurant");
      const json = await data.json();
      console.log(json);
      setlistofRes(json);
      setfilteredlist(json);
}
//conditional rendering 
if (listofRes.length ===0){
    return <Shimmer />;
}


    return (
        <div className="body">
            <div className="search">
                <input 
                type="text"
                className="search-box"
                value={searchText}
                onChange={(e)=>{
                    setSearchtext(e.target.value);

                }}
                
                />
                <button className="searchbtn" 
                onClick={()=>{
                    const filteredreslist =listofRes.filter((res)=>
                    res.type.toLowerCase().includes(searchText.toLowerCase()) );
                    setfilteredlist(filteredreslist);
                }}
                
               
                >Search</button>

            </div>
            <div className="divinput">
                <label> user input  </label>
                <input className="inputbox"  onChange={(e)=>{
                    setuserName(e.target.value);
                }}    />
               
            </div>
            <div className="Filter" onClick={()=>{


               console.log("First item:", listofRes[0]);

                
                const filteredlist = listofRes.filter((res)=>{
                     console.log("parkingLot value:", res.parkingLot);
                   return (res.parkingLot== true)
                  
                },
            );
             console.log("Filtered:", filteredlist);
             setlistofRes(filteredlist);
            
            }
            
            
            }>Top rated</div>
            <div className="res-container">
                {filteredreslist.map((restaurant)=>( restaurant.parkingLot?(<RestaurantCardPromoted  
                key ={restaurant.restaurantID} 
                resData ={restaurant} />):( <RestaurantCard 
                key ={restaurant.restaurantID} 
                resData ={restaurant}/>)
                ))}
              

                
                
                 
                   

            </div>

        </div>
    );
};
export default Body;