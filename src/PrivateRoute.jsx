import {Outlet, Navigate} from "react-router-dom"
export  function ProtectedRoute (){
    const token = window.localStorage.getItem("token");
    const email = window.localStorage.getItem("email");
    if(token && email === "charlesorih@gmail.com"){
        return <Outlet />
    }
    else{
       return <Navigate to="/unauthorized"/>
    }
}