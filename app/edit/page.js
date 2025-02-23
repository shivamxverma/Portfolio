"use client";
import React, { useState } from "react";
import Auth from "@/lib/check_auth";

export const Edit = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    const ok = Auth(username, password);
    console.log('Admin : ', ok);
    localStorage.setItem("ADMIN", JSON.stringify(ok)); 
  };

  return (
    <div>
      <h2>Login</h2>
      
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter Your Username..."
      />

      <input
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Your Password..."
      />

      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default Edit;
