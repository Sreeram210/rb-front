import React from 'react'
import { FcDocument } from "react-icons/fc";
import { Link } from 'react-router-dom';

function Resumesteps() {
  return (
    <>
      <div style={{minHeight: '90vh'}} className="mt-5">
        <h1 className='text-center'>Create an ATS Friendly Resume in minutes with AI</h1>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-4 rounded p-5 shadow text-center">
               <FcDocument className='fs-1 text-primary md-3'/>
              <h4>Add Your Details</h4>
              <p>Our AI will Generate Skills & Summary</p>
              <h5>Step 1</h5>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-4 rounded p-5 shadow text-center">
              <FcDocument className='fs-1 text-primary md-3'/>
              <h4>Add Your Details</h4>
              <p>Our AI will Generate Skills & Summary</p>
              <h5>Step 2</h5>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
        <div className="mt-5 text-center">
          <Link to={'/form'} style={{backgroundColor: '#714a2f'}} className='btn text-light' >LET'S START</Link>
        </div>
      </div>
    </>
  )
}

export default Resumesteps
