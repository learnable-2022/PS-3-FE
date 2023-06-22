import {Outlet, Navigate} from "react-router-dom"
export  function ProtectedRoute (){
    const token = window.localStorage.getItem("token")
    if(token){
        return <Outlet />
    }
    else{
       return <Navigate to="/signin"/>
    }
}