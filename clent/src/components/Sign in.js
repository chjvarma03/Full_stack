import axios from 'axios';
import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const [name,setName] = useState("");
    const [pass,setPass] = useState("");
    const [jit,setjit] = useState(false);
    const navigate = useNavigate();
    if(jit)
        {
            navigate("/");
        }
    async function ValiditeState(event)
{
    event.preventDefault();
    alert(pass.length);
    if(pass.length >= 6)
        {
            await axios.post("http://localhost:8900/signincheck",{
                name:name,
                pass:pass

            }).then((res)=>{
                if(res.data==="ok")
                    {
                        alert("login success");
                        setjit(true);

                        
                    }  
                else{
                    alert("login failed");
                }
            })
        }
        else{
            alert("please check your password and mail once if you dont have account create one");
        }

}
function updatename(e)
{
    setName(e.target.value);
}
function updatepass(e)
{
    setPass(e.target.value);
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
        <button type='submit' >Signin</button>   
        <br>
        </br>
        <h4>you don't have a create using <a href='/sign up'>Register</a></h4>
    </form>
  </Fragment>
}

export default Signin
