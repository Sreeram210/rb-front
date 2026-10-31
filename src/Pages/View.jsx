import { Button } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { IoMdDownload } from "react-icons/io";
import { data, Link, useParams } from 'react-router-dom';
import { FaBackward } from "react-icons/fa";
import Preview from '../Components/Preview';
import Edits from '../Components/Edits'
import { downloadResumeAPI, viewResumeAPI } from '../services/allAPI';
import html2canvas from 'html2canvas'
import { jsPDF } from "jspdf";


function View() {

  const {id} = useParams()
  const [resume,setResume]=useState({})
  const previewRef = useRef()

  const getResume = async()=>{
    const response = await viewResumeAPI(id)
    // console.log(response);
    if(response.status == 200){
      setResume(response.data)
    }
  }

  useEffect(()=>{
    getResume()
  },[])

  const downloadCv = async()=>{
    const previewTag = previewRef.current
    const canvas = await html2canvas(previewTag)
    // console.log(canvas);
    canvas.toBlob(async(imgFile)=>{
      //create formData to send file via API
      const formData = new FormData()
      formData.append("file",imgFile),
      formData.append("upload_preset","resumes")
      //generate resumeIMG from cloudinary api-call
      const result = await fetch("https://api.cloudinary.com/v1_1/rvuynobi/image/upload",{
        method:"POST",
        body:formData
      })
      const serverData = await result.json()
      // console.log(serverData);
      const url = serverData.secure_url
      generatePDF(url);
      
    })
    
  }

  const generatePDF = async(resumeIMG)=>{
    const pdf = new jsPDF()
    const imgWidth = pdf.internal.pageSize.getWidth()
    const imgHeight = pdf.internal.pageSize.getHeight()
    pdf.addImage(resumeIMG,"PNG",0,0,imgWidth,imgHeight)
    // api call to save download resume details in jsonserver
    const today =new Date()
    let timeStamp = `${today.toLocaleDateString()},${today.toLocaleTimeString()}`
    const result = await downloadResumeAPI({timeStamp,resumeIMG,resumeId:resume.id,jobRole:resume.job})
    if(result.status == 201 ){
      pdf.save(`${resume.fullName}-CV.pdf`)
    }
  }

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            {/* navigation icons */}
            <div className="d-flex justify-content-center align-items-center">
              {/* downloads */}
              <Button onClick={downloadCv} style={{color:'#714a2f'}} className='btn me-2'><IoMdDownload className='fs-5' /> Download CV</Button>
              {/* Edits */}
              <Edits resumeData={resume} setresumeData={setResume} />
              {/* Back */}
              <Link to={'/form'} style={{color: '#714a2f'}} className='btn'><FaBackward className='fs-5'/>Home</Link>
            </div>
            <div className="p-5" ref={previewRef}>
              <Preview resumeData={resume} />
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </div>
  )
}

export default View
