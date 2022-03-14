import React from 'react'
import Navbar from '../../components/Navbar'

function index() {
  return (
    <div>
      <Navbar />
        <center>
          <h1>Enrolling</h1>
          <p>Are you thinking of enrolling? Well, you are in luck! We currenly have many spots open for kids aged 5-17 years old.
            <br></br>
            All You have to do is send us an email with your name, contact details, and reason why you want to enroll. Please follow this template below.
          </p>
          <br></br>
          <img src='https://i.postimg.cc/0N0zfKyM/image.png' />
          <h2>Click <a href='mailto:sectorfootball@gmail.com?' style={{color: "#4287f5"}}>this</a> to send an email, or enter the email below manually.</h2>
          <h4>sectorfootball@gmail.com</h4>
        </center>
    </div>
  )
}

export default index