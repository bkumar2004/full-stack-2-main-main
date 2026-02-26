import React, { useState } from 'react'
function Login() {
    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
    const [userErr,setUserErr]=useState(false);
    const [passErr,setPassErr]=useState(false);
    const [isChecked,setIsChecked]=useState(false);

  function loginHandle(e)
    {
        if(user.length<3 || password.length<3)
        {
            alert("type correct values")
        }
        else if(!isChecked)
        {
            alert("Please check the checkbox to proceed")
        }
        else
        {
            alert("all good :)")
        }

        e.preventDefault()
    }
    function userHandler(e){
        let item=e.target.value;
        if(item.length<3 )
        {
           setUserErr(true)
        }
        else
        {
            setUserErr(false)
        }
        setUser(item)
    }
    function passwordHandler(e){
        let item=e.target.value;
        if(item.length<3 )
        {
           setPassErr(true)
        }
        else
        {
            setPassErr(false)
        }
        setPassword(item)

    }
    return (
        <div>
            <h1>Login</h1>
           <form onSubmit={loginHandle}>
           <input type="text" placeholder="Enter User Id" onChange={userHandler} />{userErr?<span>User Not Valid</span>:""}
            <br /> <br />
            <input type="password" placeholder="Enter User Password" onChange={passwordHandler}/>{passErr?<span>Password Not Valid</span>:""}

            <br /> <br />
            <div>
            <input type="checkbox" id="terms" checked={isChecked} onChange={(e)=>setIsChecked(e.target.checked)} />
            <label htmlFor="terms">Please fill the checkbox</label>
            </div>
            <br />
            <button type="submit" disabled={!isChecked} >Login</button>
           </form>
        </div>
    )
}

export default Login;