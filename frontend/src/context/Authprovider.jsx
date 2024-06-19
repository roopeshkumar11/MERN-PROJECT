import React from "react";
import { useContext ,useState,createContext} from "react";


export const AuthContext=createContext()
export default function Authprovider({children}){
    const intialAuthuser=localStorage.getItem("Users")
    console.log(intialAuthuser)
    const [authuser,setauthuser]=useState(
        intialAuthuser ? JSON.parse(intialAuthuser):undefined
    )

    return(
        <AuthContext.Provider  value={[authuser,setauthuser]}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth=()=>useContext(AuthContext)