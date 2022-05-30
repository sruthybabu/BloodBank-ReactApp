import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Viewdonor = () => {
  const deleteBlood=(id)=>{
    const data={"_id":id}
    console.log(data)
    axios.post("http://localhost:5007/api/delete",data).then(
      (response)=>{
        if(response.data.status=="success")
                {
                    alert("Successfully deleted")
                }
                else
                {
                    alert("Failed to delete")
                }
      })
  }


    var [Viewdonor,setViewdonor]=useState([])
    var [loadstatus,setLoadstatus]=useState(true)
    axios.get("http://localhost:5007/api/bloodview").then(
      (response)=>{
        console.log(response.data)
        setViewdonor(response.data)
        setLoadstatus(false)

      }
    )
  return (
    <div>
        <Header/>
        <div className='container'>
            <div className='row'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                    <div className='row g-3'>
                        <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                         {loadstatus ? <div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div> : <table className="table table-primary table-striped">
  <thead className='table-success'>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Address</th>
      <th scope="col">Blood Group</th>
      <th scope="col">Mobile Number</th>
      <th scope="col">Username</th>
      <th scope="col">Password</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {Viewdonor.map((value,key)=>{
      return <tr>
      <td>{value.name}</td>
      <td>{value.address}</td>
      <td>{value.bloodGroup}</td>
      <td>{value.mobileNo}</td>
      <td>{value.userName}</td>
      <td>{value.password}</td>
      <td><button onClick={()=>{deleteBlood(value._id)}} className='btn btn-danger'>DELETE</button></td>
    </tr>
    })}   
  </tbody>
</table>}

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Viewdonor