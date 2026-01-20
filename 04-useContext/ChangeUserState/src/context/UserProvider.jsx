import { Context, useState } from "react";
import UserContext from "./UserContext.jsx";
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(
        {
            "id": null,
            "email": null,
            "fullname": null,
            "password": null,
            "avatar": null,
            "loggedIn": false
        });
        
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;