
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import jobRole from '../assets/jobRole.json'
import jobSkills from '../assets/jobSkills.json'
import summaries from '../assets/summaries.json'
import { saveResumeAPI } from '../services/allAPI';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const steps = ['Basic Informations', 'Contact Details', 'Education Details', 'Review And Submit'];

function Userinputs({setresumeData,resumeData}) {
  // console.log(resumeData);
  
  const navigate = useNavigate()

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const RenderStepContent = (StepCount) => {
    switch (StepCount) {
      case 0: return (
        <div>
          <h3>Personal Details</h3>
          <div className="p-3 row">
            <TextField id="standard-basic-name" label="FULLName" variant="standard"
            value={resumeData.fullName}onChange={e=>setresumeData({...resumeData,fullName:e.target.value})} />
            <TextField id="standard-basic-loc" label="Location" variant="standard"
            value={resumeData.location}onChange={e=>setresumeData({...resumeData,location:e.target.value})} />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Choose Job Tile</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Job"
              onChange={e=>setresumeData({...resumeData,job:e.target.value})} >
                {jobRole.jobRoles.map(job=>(
                  <MenuItem key={job} value={job}>{job}</MenuItem>
                  ))} 
              </Select>
            </FormControl>
          </div>
        </div>
      )
        break;
      case 1: return (
        <div>
          <h3>Contact Details</h3>
          <div className="p-3 row">
            <TextField id="standard-basic-email" label="Email" variant="standard"
            value={resumeData.email} onChange={e=>setresumeData({...resumeData,email:e.target.value })} />
            <TextField id="standard-basic-num" label="Contact Number" variant="standard"
             value={resumeData.phone} onChange={e=>setresumeData({...resumeData,phone:e.target.value })}/>
            <TextField id="standard-basic-linkedin" label="Linkedin Link " variant="standard"
            value={resumeData.linkedin} onChange={e=>setresumeData({...resumeData,linkedin:e.target.value})}/>
            <TextField id="standard-basic-github" label="GitHub Link" variant="standard"
            value={resumeData.github} onChange={e=>setresumeData({...resumeData,github:e.target.value})}/>
          </div>
        </div>
      )
        break;
      case 2: return (
        <div>
          <h3>Educational Details</h3>
          <div className="p-3 row">
            <TextField id="standard-basic-degree" label="Bacherlor's Degree" variant="standard"
             value={resumeData.degree} onChange={e=>setresumeData({...resumeData,degree:e.target.value})}/>
            <TextField id="standard-basic-college" label="College/University Name" variant="standard"
            value={resumeData.college} onChange={e=>setresumeData({...resumeData,college:e.target.value})}/>
            <TextField id="standard-basic-year" label="Year Of Graduation" variant="standard"
            value={resumeData.year} onChange={e=>setresumeData({...resumeData,year:e.target.value})}/>
          </div>
        </div>
      )
        break;
        case 3: return (
          <div>
            <p>Our AI will generate Skills & Summary according to your job role.Once the form get submitted, user won't get the chance to update the resume details. If you want ot proceed please click the <b>Generate AI Skill & Summary</b> button to submit. </p>
          </div>
        ) 
        break;
        default: return null;
        break;
    }
  }

  //generate skill and summary according tojobroles


  const generateSkillsandSummary=()=>{
    setresumeData({...resumeData,skill:jobSkills[resumeData.job],summary:summaries[resumeData.job]})
    handleNext()
  }


  const handleAddresume= async()=>{
    const{fullName,location,job,email,phone,linkedin,github,degree,college,year,skill,summary} = resumeData
    if(fullName&&location&&job&&email&&phone&&linkedin&&github&&degree&&college&&year&&skill&&summary){
      const response = await saveResumeAPI(resumeData)
      console.log(response);
      const resumeId = response.data.id
      if( response.status ==201){
        toast.success("Resume Created")
        setTimeout(()=>{
          navigate(`/view/${resumeId}`)
        },2000 )
      }
    }else{
      toast.info("please fill missing fields")
    }
  }

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleAddresume}>
                Finish
              </Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            <Box>
              {
                RenderStepContent(activeStep)
              }
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />


              {activeStep === steps.length - 1 ? <Button onClick={generateSkillsandSummary} >Generate AI skills & Summary</Button> : <Button onClick={handleNext} >Next</Button>}

            </Box>
          </React.Fragment>
        )}
      </Box>
    </div>
  )
}

export default Userinputs
