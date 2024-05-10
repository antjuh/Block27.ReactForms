import { useState } from "react";


export default function Authenticate({ token }) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);
    const [username, retrieveUser] = useState(null);
  
    async function handleClick() {
      try {
        const response = await fetch(
            "https://fsa-jwt-practice.herokuapp.com/authenticate",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }   
            }
        );
        const result = await response.json();
        setSuccessMessage(result.message);
        retrieveUser(result.data.username);
        
      } catch (error) {
        setError(error.message);
      }
    }
  
    return (
      <div className="authenticate">
        <h2>Authenticate</h2>
            {successMessage && <p>{successMessage}</p>}
            {username && <p>Welcome back, {username}!</p>}
            {error && <p>{error}</p>}
        <button onClick={handleClick}>Authenticate Token!</button>  
      </div>
    );
  }