
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [username,Setusername]=useState('')
  let [password,Setpassword]=useState('')
  let [error,Seterror]=useState('')
  function check(event){
    event.preventDefault()
    console.log(username,password)
    if(username.length==0 || password.length==0){
      Seterror('Both username and password are required.')
    }
    else{
      Seterror('')
    }
  }
  return (
    <form onSubmit={check}>
      <label for='name'>Username:</label>
      <input type='text' onChange={(event)=>{Setusername(event.target.value)
        Seterror('')}}></input>
      <label for='name'>Password:</label>
      <input type='password' onChange={(event)=>{Setpassword(event.target.value)
      Seterror('')}}></input>
      {error && <div id='errorMessage'>{error}</div>}
      <button type="submit">Login</button>
      </form>
  )
}

export default App
