import React, { useRef } from 'react'
import { MdEditDocument } from "react-icons/md";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import jobRole from '../assets/jobRole.json'
import { IoIosClose } from "react-icons/io";
import { toast } from 'react-toastify';
import { updateResumeAPI } from '../services/allAPI';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight: "80vh",
  overflowY: "auto",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Edits({ resumeData, setresumeData }) {



  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const skillRef = useRef()

  const addSkill=(skill)=>{
    if(skill){
      if(resumeData?.skill?.map(item=>item.toLowerCase()).includes(skill.toLowerCase())){
        toast.warn("Given Skill already Added")
      }else{
        setresumeData({...resumeData,skill:[...resumeData?.skill,skill]})
      }
      skillRef.current.value=""
    }else{
      toast.info("Please Enter a valid Skill !!!")
    }
  }

  const removeSkill = (skill)=>{
    setresumeData({...resumeData,skill:resumeData.skill.filter(item=>item!=skill)})
  }

  const handleUpdateResume= async()=>{
      const{fullName,location,job,email,phone,linkedin,github,degree,college,year,skill,summary} = resumeData
      if(fullName&&location&&job&&email&&phone&&linkedin&&github&&degree&&college&&year&&skill.length>0&&summary){
        const response = await updateResumeAPI(resumeData.id, resumeData )
        //console.log(response);
        
        if( response.status ==200){
          toast.success("Resume Updated")
          handleClose()
        }
      }else{
        toast.info("please add valid details")
      }
    }
  

  return (
    <div>
      <button onClick={handleOpen} style={{ color: '#714a2f' }} className='btn'><MdEditDocument className='fs-3' />Edit CV</button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Resume
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
             
              <h3>Personal Details</h3>
              <div className="p-3 row">
                <TextField id="standard-basic-name" label="FULLName" variant="standard"
                  value={resumeData.fullName} onChange={e => setresumeData({ ...resumeData, fullName: e.target.value })} />
                <TextField id="standard-basic-loc" label="Location" variant="standard"
                  value={resumeData.location} onChange={e => setresumeData({ ...resumeData, location: e.target.value })} />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Choose Job Tile</InputLabel>
                  <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Job"
                    value={resumeData.job} onChange={e => setresumeData({ ...resumeData, job: e.target.value })} >
                    {jobRole.jobRoles.map(job => (
                      <MenuItem key={job} value={job}>{job}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
            <div>
              <h3>Contact Details</h3>
              <div className="p-3 row">
                <TextField id="standard-basic-email" label="Email" variant="standard"
                  value={resumeData.email} onChange={e => setresumeData({ ...resumeData, email: e.target.value })} />
                <TextField id="standard-basic-num" label="Contact Number" variant="standard"
                  value={resumeData.phone} onChange={e => setresumeData({ ...resumeData, phone: e.target.value })} />
                <TextField id="standard-basic-linkedin" label="Linkedin Link " variant="standard"
                  value={resumeData.linkedin} onChange={e => setresumeData({ ...resumeData, linkedin: e.target.value })} />
                <TextField id="standard-basic-github" label="GitHub Link" variant="standard"
                  value={resumeData.github} onChange={e => setresumeData({ ...resumeData, github: e.target.value })} />
              </div>
            </div>
            <div>
              <h3>Educational Details</h3>
              <div className="p-3 row">
                <TextField id="standard-basic-degree" label="Bacherlor's Degree" variant="standard"
                  value={resumeData.degree} onChange={e => setresumeData({ ...resumeData, degree: e.target.value })} />
                <TextField id="standard-basic-college" label="College/University Name" variant="standard"
                  value={resumeData.college} onChange={e => setresumeData({ ...resumeData, college: e.target.value })} />
                <TextField id="standard-basic-year" label="Year Of Graduation" variant="standard"
                  value={resumeData.year} onChange={e => setresumeData({ ...resumeData, year: e.target.value })} />
              </div>
            </div>
            <div>
              <h3>Skills</h3>
              <div className="p-3 d-flex">
              <input ref={skillRef} type="text" placeholder='Add New skill' className='form-control'/>
              <Button onClick={()=>addSkill(skillRef.current.value)} style={{color:"#714a2f"}} >Add</Button>
              </div>
              <h6>Added Skill : </h6>
              <div className='p-3 d-flex justify-content-between flex-wrap'>
                {resumeData?.skill?.map(skill => (
                  <Button key={skill} variant='contained' sx={{backgroundColor:"#b19596"}} className='my-1' onClick={()=>removeSkill(skill)}>{skill}<IoIosClose className='ms-2' /></Button>
                ))}
              </div>
            </div>
            {/* summary */}
            <div>
              <h3>Summary</h3>
              <div className="p-3 row">
                <TextField id="standard-basic-degree" label="Bacherlor's Degree" variant="standard" multiline
                   onChange={e => setresumeData({ ...resumeData, summary: e.target.value })} value={resumeData.summary}/>
              </div>
            </div>
            {/* update resume */}
            <div>
              <Button onClick={handleUpdateResume} className='btn btn-light' style={{color:"#714a2f"}}>Update</Button>
            </div>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default Edits
