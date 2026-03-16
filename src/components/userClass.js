import React,{useContext} from "react";
import UserContext from "../../utils/UserContext";
class UserClass extends React.Component{
    constructor(props){
        super(props)
      this.state={
        count:0,
      };


    };
    render(){
        return (
            <div>
                <h1>Name: {this.props.Name}</h1>
                <h1>Location: {this.props.Location}</h1>
                <h2   >Count:{this.state.count}</h2>
                <div> logged in user
                   <UserContext.Consumer>
                    {({data})=> <h1>{data}</h1> }
                   </UserContext.Consumer>
                </div> 
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count +1,
                    }) }
                }>click to increase</button>

            </div>
        )
    }
}
export default UserClass; 