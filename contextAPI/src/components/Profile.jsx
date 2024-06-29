import React, {useContext} from 'react'
import UserContext from '../context/userContext.js'

const Profile = () => {
    const {user} = useContext(UserContext);
    
    if (!user) return <div>Please Login first</div>

    return <div>Welcome {user.name}</div>
}

export default Profile