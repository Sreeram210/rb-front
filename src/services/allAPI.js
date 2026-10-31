import axiosService from "../api/axiosService";

// saveResumeAPI - called by component userInput When finish button is clicked
export const saveResumeAPI = async(resumeDetails)=>{
    return await axiosService('POST','/resumes',resumeDetails)
}



 //  viewResumeAPI - called by view component when resume added
export const viewResumeAPI = async(resumeId)=>{
    return await axiosService('GET',`/resumes/${resumeId}`,{})
}


// get all resumesAPI - called by allResumes Components When resume added
export const getAllResumesAPI = async()=>{
    return await axiosService('GET',`/resumes/`,{})
}



//deleteResumeAPI - called by allResumes Component when delete button clicked 
 export const deleteResumeAPI = async(resumeId)=>{
    return await axiosService('DELETE',`/resumes/${resumeId}`,{})
}


// downloadResumeAPI - called by component userInput When download button is clicked
export const downloadResumeAPI = async(resumeDetails)=>{
    return await axiosService('POST','/downloads',resumeDetails)
}


// getAlldownloadResumesAPI - called by component userInput When download button is clicked
export const getAlldownloadResumesAPI = async()=>{
    return await axiosService('GET','/downloads',{})
}


//updateResumeAPI
export const updateResumeAPI = async(resumeId,resumeDetails)=>{
    return await axiosService('PUT',`/resumes/${resumeId}`,resumeDetails)
}