import { useState } from "react";
const API_URL = 'https://fsa-jwt-practice.herokuapp.com/signup';

export default function SignUpForm({token, setToken}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null); 
    
    

    

    async function handleSubmit(event) {
        event.preventDefault();
        
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                body: JSON.stringify({
                    username:username,
                    password:password,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })

            
            const result = await response.json();
            console.log(result);


            //Attempting to use state function to grab token and store it. 
            setToken(result.token);
            
        } catch (error) {
            setError(error.message)
        }
      }
    

    return (
    <>
        <h2>Sign Up!</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
            <label>
                Username: <input value={username} onChange={(e) => setUsername(e.target.value)}/> 
            </label>
            <label>
                Password: <input value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <button>Submit</button>
        </form>
    </> 
    );
  }