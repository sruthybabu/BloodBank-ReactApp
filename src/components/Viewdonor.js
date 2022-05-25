import React from 'react'
import Header from './Header'

const Viewdonor = () => {
    var Viewdonor=[
        {
            "name":"sruthy",
            "address":"sruthy villa",
            "bloodGroup":"A+",
            "mobileNo":9207096060,
            "userName":"sruthy45",
            "password":"shadow"

         },
         {
          "name":"Adhi",
          "address":"Adhithya vilasam",
          "bloodGroup":"B+",
          "mobileNo":9287796660,
          "userName":"adhi11",
          "password":12345678

       },
       {
        "name":"Anju",
        "address":"anju bhavanam",
        "bloodGroup":"A+",
        "mobileNo":9876543211,
        "userName":"anju66",
        "password":"anju1234"

     }
]
  return (
    <div>
        <Header/>
        <div className='container'>
            <div className='row'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                    <div className='row g-3'>
                        <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                         <table class="table table-primary table-striped">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Address</th>
      <th scope="col">Blood Group</th>
      <th scope="col">Mobile Number</th>
      <th scope="col">Username</th>
      <th scope="col">Password</th>
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
    </tr>
    })}   
  </tbody>
</table>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Viewdonor