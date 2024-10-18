import React from "react";
import UserContext from "./UserContext";

//props used as children(generic term)
//children--like div---j auxah teslai as it is pass garneh
//.Provider---property access garnuparxah ani wrap garne
//k access garxah tah? data ni dinuparxah
//const [user, setUser] = React.useState(null)
//kun value lai access garne value prop...obj ni dinah milxa
//value={{user, setUser}} mathi access lai throw in garne

const UserContextProvider = ({children}) => {
  const [user, setUser] = React.useState(null)
  return(
    <UserContext.Provider value={{user, setUser}}>      
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;