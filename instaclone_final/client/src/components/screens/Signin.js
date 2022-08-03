import React from 'react';
import { useState, useHistory } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

const Signin=()=>{

const history = useHistory
const [password, setPassword] = useState("")
const [email, setEmail] = useState("")

const PostData =()=>{
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        M.toast({html:"Invalid email", classes:"#e91e63 pink"})
       return
    }
    fetch("/signin",{
        method: "Post",
        headers:{
            "Content-Type":"application/json",
            
        },
        body:JSON.stringify({
            password,
            email
        })
    }).then(res=>res.json()).then(data=>{
        console.log(data)
        if(data.error){
            M.toast({html: data.error, classes:"#ef9a9a red lighten-3"})
        }else{
            localStorage.setItem("jwt",data.token)
            localStorage.setItem("user",JSON.stringify(data.user))
            M.toast({html:"signedin successfully", classes:"#e91e63 pink"})
             history.push('/')
            
        }
    }).catch(err=>{
        console.log(err)
    })
 }

    return(
<div className='mycard'>
<div className='card auth-card'>
    <h2>Instaclone</h2>
    <input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
    <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <button className='btn waves-effect waves-light' onClick={()=>PostData()}>Signin</button>
    <h5>
    <Link to="signup">Don't have an account?</Link>
</h5>
</div>
</div>
)
}

export default Signin;