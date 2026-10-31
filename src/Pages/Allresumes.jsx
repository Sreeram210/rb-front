import { Button } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { deleteResumeAPI, getAllResumesAPI } from '../services/allAPI';
import { FaBackward } from "react-icons/fa";
import { FaForward } from "react-icons/fa";


function Allresumes() {

  const [allresumes,setAllresumes] = useState([])
  const [allDummyResumes,setAllDummyResumes] = useState([])
  const [searchKey,setSeachKey] = useState("")
  const [currentPage,setCurrentPage] = useState(1)
  const rowsPerPage = 4
  const lastIndexofCurrentPage = currentPage* rowsPerPage
  const firstIndexofCurrentPage = lastIndexofCurrentPage - rowsPerPage
  const currentResumes = allresumes.slice(firstIndexofCurrentPage,lastIndexofCurrentPage)
  const totalPages = Math.ceil(allresumes.length/rowsPerPage)

  const getAllresumes=async()=>{
    const result = await getAllResumesAPI()
    // console.log(result);
    if(result.status == 200){
      setAllresumes(result.data)
      setAllDummyResumes(result.data)
    }
  }

const removeResume = async(id)=>{
  if(confirm("are you sure want to delete resume")){
    const response =await deleteResumeAPI(id)
    if(response.status == 200){
      getAllresumes()
    }
  }
}

const searchOutput = useMemo(()=>{
  setAllresumes(allDummyResumes.filter(item=>item.job.toLowerCase().includes(searchKey.toLowerCase())))
},[searchKey])

  useEffect(()=>{
    getAllresumes()
  },[])




  return (
    <>
      <div className="my-5 container d-flex justify-content-center align-items-center flex-column">
        <h1>All Saved Resumes</h1>
        <p style={{textAlign: 'justify'}} className='my-5'>All resumes submitted to the platform in one place, allowing administrators or recruiters to efficiently view, search, filter, and manage candidate profiles. It provides a quick overview of available candidates and their key details, making the recruitment and candidate-selection process more organized and efficient.</p>
        <div className="d-flex justify-content-center align-items-center w-50">
          <input onChange={e => {setSeachKey(e.target.value);setCurrentPage(1)}} type='text' placeholder='Search candidate by job Roles' className='form-control'/>
          <FaSearch style={{marginLeft: '-30px'}}/>
        </div>
        <table className='my-5 table table-hover table-stripped'>
          <thead>
            <tr className='table-dark'>
              <th>#</th>
              <th>resume</th>
              <th>Job Role</th>
              <th>...</th>
            </tr>
          </thead>
          <tbody>

           { currentResumes.length> 0? currentResumes.map((resume,index)=>(
            <tr key={resume.id}>
              <td>{index+1}</td>
              <td><Link to={`/view/${resume.id}`}> {resume.fullName}</Link> </td>
              <td>{resume.job}</td>
              <td><Button onClick={()=>removeResume(resume.id)} className='btn text-danger'><FaTrash/></Button> </td>
            </tr>
           )):  <p>Nothing to display</p>
            }
          </tbody>
        </table>
        <div className="d-flex align-items-center">
          <button className='btn' onClick={()=>setCurrentPage(currentPage-1)}>
            <FaBackward />
          </button>
          {currentPage} of {totalPages}
          <button className='btn' onClick={()=>setCurrentPage(currentPage+1)}>
            <FaForward />
          </button>
        </div>
        </div> 
    </>
  )
}

export default Allresumes
