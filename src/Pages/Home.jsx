import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
    {/* landing */}
      <div style={{height: '100vh', backgroundImage: 'url("/landing.png")', backgroundSize: 'cover',backgroundAttachment: 'fixed' }} className="d-flex justify-content-center align-items-center">

      <div style={{backgroundColor: 'rgb(0,0,0,0.4)'}} className="w-50 p-5 rounded text-light text-center">
        <h1>Designed To Get Hired. Your Skills, Your Story, Your Next Job - All In One.</h1>
        <Link to={'/steps'} style={{ backgroundColor: '#755846' }} className='btn text-light mt-3'>Make Your Resume With AI</Link>
      </div>
      </div>

      {/* about */}
      <div className="container my-5">
        <h1 className='text-center mb-5'>Whats AI rBuilber</h1>
        <div className="row align-items-center">
          <div className="col-1"></div>
          <div className="col-5">
              <p style={{textAlign: 'justify'}}>An AI rBuilder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems.
              </p>
              <p style={{textAlign: 'justify'}}>The system can suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly.</p>

              <p style={{textAlign: 'justify'}}>The main goal of the AI rBuilder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can edit content, preview their resume, and download it in formats such as PDF.</p>

              <p style={{textAlign: 'justify'}}>This type of system is especially useful for students & fresh graduates, who want to create high-quality resumes that increase their chances of getting shortlisted for job interviews.</p>
          </div>
          <div className="col-1"></div>
          <div className="col-5">
              <img width={'100%'} height={'550px'} src="/resume.png" alt="" />
          </div>
        </div>
      </div>
      <div style={{height: '80hv', backgroundImage: 'url("/team.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}></div>


             {/* testimony */}
            <div className="container my-5">
        <h1 className='text-center mb-5'>Testimony</h1>
        <div className="row align-items-center">
          <div className="col-1"></div>
          <div className="col-5">
            <h5>Trusted by professionals WorldWide</h5>
              <p style={{textAlign: 'justify'}}>At rBuilder, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.
              </p>
              <p style={{textAlign: 'justify'}}>In fact, users who used rBuilder reported getting hired an average of 48 days faster.</p>

              <p style={{textAlign: 'justify'}}>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out</p>

              
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
              <div className="row">
                <div className="col-md-3">
                  <img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjn4rtF0iJ6FYDWxAUcdYq-I2Ut1TZAxtCkPgAzTwKyg&s=10" alt="" />
                </div>
                <div className="col-md-3">
                  <img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBvq26wOg0Zi4H-gLYQKJsHN1IhEoteb3j2cn9u__ifA&s=10" alt="" />
                </div>
                <div className="col-md-3">
                  <img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqQ8w8lnb-PRtDiL9Zu8t3XQBE3loh1pbI1eE35vX8Q&s=10" alt="" />
                </div>
                <div className="col-md-3">
                  <img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9dXpIDQCY5ChEZrsyH-aa_hEDXNAmZAqH4vOWEFI4gQ&s=10" alt="" />
                </div>
                <div className="col-md-3">
                  <img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZdnzbRKC27ueAGlHY25CCVXyvlLK_p3j21QRuTYS5OA&s=10" alt="" />
                </div>
                <div className="col-md-3">
                  <img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8goCl_NWwzekE8J5csv3DDVYWiyxNKeet7-ICCL_zXQ&s=10" alt="" />
                </div>
                <div className="col-md-3">
                  <img className='img-fluid p-2' src="https://t4.ftcdn.net/jpg/02/46/14/93/360_F_246149382_KHkt8Mw8pptlmVuiqmhavvHBC4SEqBu1.jpg" alt="" />
                </div>
                <div className="col-md-3">
                  <img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjn4rtF0iJ6FYDWxAUcdYq-I2Ut1TZAxtCkPgAzTwKyg&s=10" alt="" />
                </div>
                <div className="col-md-3">
                  <img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj9DU5Azx-Ftrig7xUWdy39dMeSoYCU97CzEjrO0pr0g&s=10" alt="" />
                </div>
                <div className="col-md-3">
                  <img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkdGdbJ6o_iV1nJOFdlESagI9mJ-z_ejc69In_8Phr1w&s=10" alt="" />
                </div>
                <div className="col-md-3">
                  <img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSee00mc04RwhAA8ZXsAvNNgqyg63SPtpqz9X42jmUwkA&s=10" alt="" />
                </div>
                <div className="col-md-3">
                  <img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjn4rtF0iJ6FYDWxAUcdYq-I2Ut1TZAxtCkPgAzTwKyg&s=10" alt="" />
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
