import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";

//data pathaunu parxa so useState, useContext,UserContext
/* value = {username} value governed by username--value control garnah---values govern garnah
field mah change vayo vane onChange--jasle state pani update garxah
UserContext bata value fetch garnah useContext leh help garxah
useContext mah context dinu parxah ani setUser pauxau
ani data pathaune
App mah api call vayo vane UserContext line useContext line ani tya data fetach garne
components maha data linu parne vako useContext
*/
function Login() {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  const {setUser} = useContext(UserContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username, password})
  }
  return(
    <div>
      <h2>Login</h2>
      <input type='text'
      value = {username}
      onChange={(e) => setUsername(e.target.value)} 
      placeholder='username'/>
      {" "}
      <input type='text' 
      value = {password}
      onChange={(e) => setPassword(e.target.value)} 
      placeholder='password'/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login;