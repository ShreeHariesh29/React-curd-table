import React, { useState } from 'react'
import logo from './img/- SpeakInt-Blue.png'
import img1 from './img/Login_Admin-removebg-preview.png'
import newlogo from './img/Screenshot_2023-10-04_130135-removebg-preview.png'

function Login() {

    const[input, setInput] = useState({
        
        email:'',
        password:'',
    })
    
    const handleChange = (e) =>{
        setInput({...input,[e.target.name]: e.target.value})
    }



    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(input)
    }

  return (
    <div style={{width:'100vw',height:'100vh'}}>
    <div style={{display:'flex',height:'95.7vh'}}>
        <div style={{width:'50%',height:'100%', }}>
            <img style={{width:'70%',marginLeft:'20%',marginTop:'15%'}} src={img1} alt="" />
        </div>
        <div style={{height:'100%',width:'50%'}}>
            <div style={{height:'73%', width:'50%',marginLeft:'20%',marginTop:'10%', borderRadius:'5px',border:'1px lightgray solid',boxShadow:'5px 5px 15px lightgray'}}>
                <div>
                    <img style={{width:'220px',marginLeft:'23%',marginTop:'20px',height:'50px'}} src={newlogo} alt="" />
                </div>
                <p style={{fontSize:'25px',textAlign:'start',fontWeight:'700',color:'#0478b3',marginLeft:'7%',marginTop:'20px'}}>Welcome</p>
                <p style={{marginLeft:'7%',fontSize:'15px',fontFamily:'Poppins'}}>Please Login to continue</p>
                <form style={{width:'100%',marginLeft:'7%',marginTop:'10%',paddingBottom:'10px'}}>
                    <label style={{paddingBottom:'10px',fontFamily:'Poppins',color:'#616161',fontSize:'15px'}}>Enter User</label><br />
                    <input name="email" onChange={handleChange} style={{width:'80%',fontFamily:'Poppins',height:'30px',marginTop:'10px',borderRadius:'5px', border:'1px gray solid', padding:'5px'}} placeholder='Enter your User id' type="text" /><br />
                    <div style={{marginTop:'10px'}}>
                    <label style={{fontFamily:'Poppins',color:'#616161',fontSize:'15px'}} >password</label><br />
                    <input name="password" type='password' onChange={handleChange} style={{width:'80%',fontFamily:'Poppins',height:'30px',marginTop:'10px',borderRadius:'5px', border:'1px gray solid', padding:'5px'}} placeholder='Enter your password'  /><br />
                    <p style={{fontWeight:'600',color:'#303030',fontSize:'13px',marginTop:'5px'}}>Forgot password ?</p>
                    </div>
                </form>
                <div style={{marginTop:'30px'}}>
                <button onClick={handleSubmit} style={{width:'83%',marginLeft:'7%',padding:'10px',backgroundColor:'#0073B8',border:'none',color:'white',fontWeight:'600',borderRadius:'5px',cursor:'pointer'}}> Login </button>
                </div>
            </div>

        </div>
        </div>
        <div style={{width:'100vw',backgroundColor:'#0073B8',height:'30px'}}>
            <p style={{paddingTop:'3px',paddingLeft:'15px'}}><a  style={{textDecoration:'none',color:'white',fontSize:'10px',marginTop:'4px'}} href="https://www.pelorus.in/">2023 Pelorus Technology Pvt. Ltd. All Rights Reserved</a></p>
            
        </div>
        
    </div>
  );
}

export default Login