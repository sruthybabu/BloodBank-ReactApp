import React, { useState } from 'react'
import Header from './Header'

const Signin = () => {
    var [username,setUsername]=useState("")
    var [password,setPassword]=useState("")
    const subData=()=>{
        const data={"userName":username,"password":password}
        console.log(data)
    }
  return (
    <div>
        <Header/>
        <div className='container'>
            <div className='row'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                    <div className='row g-3'>
                        <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                           <label for="" className="form-label">Username</label>
                           <input onChange={(e)=>{setUsername(e.target.value)}} placeholder="Enter your username" type="text" className="form-control"/>
                        </div>
                        <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                            <label for="" className="form-label">Password</label>
                            <input onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter your password" type="password" name="" id="" className="form-control"/>
                        </div>
                        <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                        <button onClick={subData} className="btn btn-primary">SIGN IN</button>

                        </div>

                    </div>

                </div>

            </div>

        </div>



    </div>
  )
}

export default Signin