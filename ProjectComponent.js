import React from "react";

export default function ProjectComponent() {
  return (
    <div>
      <div className="row mt-4">
        <div className="col-4">
          <hr className="hrr"></hr>
        </div>
        <div className="col-4">
          <p className="text-center">PROJECTS</p>
        </div>
        <div className="col-4">
          <hr className="hrr"></hr>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <p className="font-weight-bold text-secondary">Honk more wait more based noise pollution control using arduino</p>
        </div>
        <div className="col-8 offset-1 text-justify">
          <p className="para">
           We can control noise pollution in traffic signals by usind aurdino
           the process is if you honk more the timer raises you should  wait
           until the timer ends in this way we can reduce noise pollution
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <p className="font-weight-bold text-secondary">Design and implementation of home security system</p>
        </div>
        <div className="col-8 offset-1 text-justify">
          <p className="para"> Here, a security system has been developed that uses 
          sensors to detect any security violation and sends out the 
          alert signal by high intensity Buzzer
          <a
              className="font-italic"
              href="https://github.com/satish019"
            >
              Github
            </a>
          </p>
        </div>
      </div>
      

  
