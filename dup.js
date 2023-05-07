import React, { Component } from 'react'
import './AddUser.css';
export default class AddUser extends Component {
  render() {
    return (
      <div>
        <html>
          <head>
          <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <link rel="stylesheet" href="AddUser.css"/>
          </head>
          <body><div className='au'>
          <div style={{height:"100vh",alignItems:"center",display:"flex",width:"200vh"}}>
          {/* <div className="au"> */}
        <form className="bu" class="w3-text-blue w3-light-grey w3-margin" style={{padding:"40px"}}>
            <h2 class="w3-center">ADD USER</h2>
            <div class="w3-row w3-section">
              <div class="w3-rest">
                <i class="xxlarge fa fa-id-card" style={{width:"20px"}}></i>
                <input class="w3-border" name="id" type="text" placeholder='Employee No.'/>
              </div>
            </div>
            <div class="w3-row w3-section">
              <div class="w3-rest">
                <i class="xxlarge fa fa-user" style={{width:"20px"}}></i>
                <input class="w3-border" name="first" type="text" placeholder='First Name'/>
              </div>
            </div>
            <div class="w3-row w3-section">
              <div class="w3-rest">
                <i class="xxlarge fa fa-user" style={{width:"20px"}}></i>
                <input class="w3-border" name="last" type="text" placeholder='Last Name'/>
              </div>
            </div>
            <div class="w3-row w3-section">
              <div class="w3-rest">
                <i class="xxlarge fa fa-phone" style={{width:"20px"}}></i>
                <input class="w3-border" name="mobile" type="text" placeholder='Phone No.'/>
              </div>
            </div>
            <div class="w3-row w3-section">
              <div class="w3-rest">
                <i class="xxlarge fa fa-envelope-o" style={{width:"20px"}}></i>
                <input class="w3-border" name="last" type="text" placeholder='Email'/>
              </div>
            </div>
            <div class="w3-row w3-section">
              <div class="w3-rest">
                <i class="xxlarge fa fa-building-o" style={{width:"20px"}}></i>
                <input class="w3-border" name="dept" type="text" placeholder='Department'/>
              </div>
            </div>
            <div class="w3-row w3-section">
              <div class="w3-rest">
                <i class="xxlarge fa fa-user" style={{width:"20px"}}></i>
                <input class="w3-border" name="designation" type="text" placeholder='Designation'/>
              </div>
            </div>
            <div class="w3-row w3-section">
              <div class="w3-rest">
                <i class="xxlarge fa fa-calendar" style={{width:"20px"}}></i>
                <input class="w3-border" name="designation" type="text" placeholder='Date of joining'/>
              </div>
            </div>
            <div class="w3-row w3-section">
              <div class="w3-rest">
                <i class="xxlarge fa fa-calculator" style={{width:"20px"}}></i>
                <input class="w3-border" name="designation" type="text" placeholder='Total Experience'/>
              </div>
            </div>
            <button class="w3-button w3-block w3-ripple w3-padding w3-blue" style={{marginBottom :"20px"}}>ADD</button>
        </form>
        </div>
        </div>
          </body>
        </html>
      </div>
    )
  }
}
