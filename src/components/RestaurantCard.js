import Body from "./Body";
import images from "../../utils/mockdata/images";
import RestaurantCategory from "./RestaurantCategory";
import { Link } from "react-router-dom";
const RestaurantCard =(props)=>{
    const {resData}=props;
    return (
        <Link to="/parentcategory" className="CardLink">
        <div className="res-card" 
            
        >
            <img    
            className="res-logo"
             alt="alt-logo" src="https://www.yummytummyaarthi.com/wp-content/uploads/2022/11/red-sauce-pasta-1.jpg"
             />
             
            <h3 > {resData.restaurantName} </h3>
            <h4> {resData.address} </h4>
            <h4> {resData.type}</h4>
            <h4 >{resData.parkingLot} </h4>

        </div>
        </Link>

    )
}; 

export const withPromotedLabel =(RestaurantCard)=>{
    return (props)=>{
        return (<div >
            <label className="Promoted">promoted</label>
            <RestaurantCard {...props}/>
             
        </div>
        );
    };

};



export default RestaurantCard;