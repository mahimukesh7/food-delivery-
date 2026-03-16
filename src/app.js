import React, { lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter  } from "react-router-dom";
import { RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contactus from "./components/contactus";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "../utils/UserContext";
import RestaurantCategory from "./components/RestaurantCategory";
import Parentcategory from "./components/Parentcategory";
//import Grocery from "./components/Grocery";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";


const Grocery = lazy(()=>import("./components/Grocery"));
const AppLayout = ()=>{

    const [userName, setuserName]=useState();
    useEffect(()=>{
        const data ={
            name:"daddy"
        }
        setuserName(data.name);
    },[])
    

   
    return( <Provider store={appStore}> <UserContext.Provider value={{loggedinuser:userName ,setuserName,userName}}><div className="app">
    <Header/>
    <Outlet/>
          
    </div>
    </UserContext.Provider> 
    </Provider>
    
    );
}
const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
        path:"/",
        element:<Body/>,
    }
,
            {
        path:"/about",
        element:<About/>,
    },
      {
        path:"/parentcategory",
        element:<Parentcategory/>,
    },
          {
        path:"/restaurantcategory",
        element:<RestaurantCategory/>,
    },
    {
        path:"/Contactus",
        element:<Contactus/>,
    },
    {
        path:"/grocery",
        element:<Grocery/>,
    },
     {
        path:"/restaurant/:restaurantID",
        element:<RestaurantMenu/>,
    }

        ],
        errorElement:<Error/>,

    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
 