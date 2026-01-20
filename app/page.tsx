"use client"
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [userRef, setUserRef] = useState("");  // ✅ Proper React state

  async function handleClick() {  // ✅ No param needed
    try {
      await axios.post('http://localhost:3000/api/v1', {  // ✅ Match your API route
        username: userRef
      });
      alert('User added successfully!');
      setUserRef("");  // ✅ Clear input
    } catch (error) {
      alert('Error adding user');
    }
  }

  return (
    <div className="flex items-center justify-center h-screen flex-col gap-4">
      <label htmlFor="username">Username</label>
      <input 
        type="text" 
        id="username" 
        placeholder="username" 
        value={userRef}  // ✅ Controlled input
        onChange={(e) => setUserRef(e.target.value)}  // ✅ Proper state update
      />
      <button onClick={handleClick}>Submit</button>  
    </div>
  );
}
