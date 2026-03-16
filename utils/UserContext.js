const { useContext, createContext } = require("react");

const UserContext= createContext({
   loggedinuser:"default user",
})

export default UserContext;