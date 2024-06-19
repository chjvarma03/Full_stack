import React, { Fragment,useState } from 'react'
import axios from 'axios';
const Signup = () => {
    const [name,setName] = useState("");
    const [pass,setPass] = useState("");
    const [pass1,setPass1] = useState("");
    async function ValiditeState(event)
    {
    event.preventDefault();
    alert(name);
    alert(pass)
    if (pass === pass1 && pass.length> 6)
        { 
    await axios.post("http://localhost:8900/register",{
        name:name,
        pass:pass
    }).then((res)=>{
              if(res.data === "ok")
                {
                     alert("register succes fully");
                }

               console.log(res.data);
            });
        }
        else{
            alert("please check your pass is same and length greater than 6");
        }
        }
     /*etch('http://localhost:8900/register',
        {
            method:"GET",
            headers:{
                "Access-Control-Allow-Origin": "*",
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                  name:name,
                  pass:pass
            }
            )
        }
    ).then(()=>
    {
        console.log("succes")
    }).catch()
    {
        console.log("some error")
    }
    */

function updatename(e)
{
    setName(e.target.value);
}
function updatepass(e)
{
    setPass(e.target.value);
}
function updatepass1(e)
{
    setPass1(e.target.value);
}
  return <Fragment>
    <form className='form1' onSubmit={ValiditeState}>
        <h2>Sign in</h2>
        <h3>Enter Name</h3>
        <br></br>
        <input type='text' id='name' onChange={updatename}placeholder='Enter your name or email' required></input>
        <br></br>
        <h3>Password</h3>
        <br></br>
        <input type='password' id='pass1' onChange={updatepass} placeholder="Enter your password" required/>
        <br></br>
        <h3>Password</h3>
        <br></br>
        <input type='password' id='pass1' onChange={updatepass1} placeholder="ReEnter your password" required/>
        <br></br>
        <button type='submit' >Signin</button>   
        <br>
        </br>
        <h4>you already have a account please <a href='/sign in'>Login</a></h4>
    </form>
  </Fragment>
}

export default Signup
