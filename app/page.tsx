 "use client"
import axios from "axios";
import { useEffect, useState } from "react";

export default  function Home(){
const [loading,setLoading]=useState(true);
const [userData,setUserData]=useState();
useEffect(()=>{
  axios.get('https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details').then((r)=>{
    setUserData((u)=>r.data)
  })
  setLoading(false);
},[])

   if(loading){
    return(
      <div>loading...</div>
    )
   }
   return(
    <div>
      {userData?.name}
      <br />
      {userData?.email}
    </div>
   )
}