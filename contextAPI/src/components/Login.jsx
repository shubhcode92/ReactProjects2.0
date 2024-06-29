import React, {useState, useContext} from 'react'
import UserContext from '../context/userContext'

const Login = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({name, password})
    }
  return (
    <div>
        <h1>Login Page</h1>
        <input 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            type="text"  
            placeholder='Name'
        />
        <input 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            type="text"  
            placeholder='password'
        />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login