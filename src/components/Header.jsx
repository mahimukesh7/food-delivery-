import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../../utils/useOnlinestatus";
import UserContext from "../../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { clearcart } from "../../utils/cartSlice";



const Header = ()=>{

    const [btn, setbtn]= useState('Login')
    const onlineStatus = useOnlinestatus();
   const {loggedinuser}= useContext(UserContext);
    console.log(loggedinuser);
    const selector = useSelector ((store)=>
        store.cart.items 
    )
    const dispatch = useDispatch();
    const handleclearcart =()=>{
        dispatch(clearcart());
    }


    



    return (
        <div className="header">
            <div className="logo-container">
                <img
                className="logo"
                src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=2048x2048&w=is&k=20&c=2ljx5GDBc2auaTWuhGHt_m62t7r5bmEOCZDJtXqZpIw="
                
                />

            </div>
            <div className="nav-items"> 
                <ul>
                    <li className="onlnestatus" > Online status:{onlineStatus?"✅online":"🔴offline"}</li>
                    < li className="home"><Link to="/"> Home</Link> </li>
                    <li className="about"><Link to="/about"> About </Link> </li>
                    <li className="grcery"><Link to="/grocery"> Grocery </Link> </li>
                    <li> Cart-({selector.length}) items</li>
                    <li><Link to="/contactus"> Contact us</Link> </li>
                    <button className="login" onClick={()=>{
                        btn ==="login"?setbtn("logout"):setbtn("login");
                    }}>{btn}</button>
                    <li>{loggedinuser}</li>
                    

                </ul>
                <div>
                <button onClick={handleclearcart}>clearcart</button>
                </div>

            </div>


        </div>

    );
};
export default Header;