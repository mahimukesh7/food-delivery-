import { biryani1 } from "../../utils/mockdata/images";
import data from "../../utils/mockdata/listitem";
import { addItems } from "../../utils/cartSlice";
import { useDispatch } from "react-redux";
const ItemList =()=>{
    const dispatch = useDispatch();
    const handleClick =()=>{

        dispatch(addItems("apple "));

    }
    return (
        <div>
            
           
            {data.map((data)=>(
                
                <div key={data.data.id}className="Itemlist1">
                    
                    <div className="Itemlist2">
                        <span> {data.data.name}</span>
                         <div className="biryani">
                           <button> <div className="additem" onClick={handleClick}> add+ </div></button>
                {biryani1}

            </div>
                         <span>  -₹ {data.data.price/100}</span>
                         


                    </div>
                    <p>{data.data.description}</p>
                  

                     
                </div>
              

            ))}
        </div>
    )
}
export default ItemList;