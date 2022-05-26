import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Signup = () => {
    var [name,setName]=useState("")
    var [address,setAddress]=useState("")
    var [bloodgroup,setBloodgroup]=useState("")
    var [mobileno,setMobileno]=useState("")
    var [username,setUsername]=useState("")
    var [password,setPassword]=useState("")
    const subData=()=>{
        const data={"name":name,"address":address,"bloodGroup":bloodgroup,"mobileNo":mobileno,"userName":username,"password":password}
        console.log(data)
        axios.post("http://localhost:5007/api/bloodadd",data).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success")
                {
                    alert("Successfully added")

                }
                else
                {
                    alert("Failed to store")
                }

        })
    }  

  return (
    <div>
        <Header/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} placeholder="Eneter your name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Address</label>
                    <textarea onChange={(e)=>{setAddress(e.target.value)}} placeholder="Enter your address" name="" id="" cols="30" rows="10" className="form-control"></textarea>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Blood Group</label>
                    <input onChange={(e)=>{setBloodgroup(e.target.value)}} placeholder="Enter your blood group" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Mobile Number</label>
                    <input onChange={(e)=>{setMobileno(e.target.value)}} placeholder="Enter your mobile no" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Username</label>
                    <input onChange={(e)=>{setUsername(e.target.value)}} placeholder="Enter your username" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Password</label>
                   <input onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter your password" type="password" name="" id="" className="form-control"/>

                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} className="btn btn-primary">SIGNUP</button>
                </div>
            </div>
        </div>
    </div>
</div>




    </div>
  )
}

export default Signup