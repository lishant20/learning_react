//js---pure javascript
//user,login,product,card context

import React from 'react'

//1.creating context---a method(a gobal )

const UserContext = React.createContext()

export default UserContext;

//2.wrap inside UserContext becomes a provider
//inside component gets access to global UserContext
//provider ni banaune jasle data provide garxah
//components directly UserContext ko through every state ko 
//access lina sakxah
