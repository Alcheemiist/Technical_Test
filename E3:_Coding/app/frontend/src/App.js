import './App.css';
import './JobApplication.css'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
      <Routes>
          <Route path="/" element={
              <JobApplication/>
          }/>
          <Route path="candidate" element={<Candidate />} />
          <Route path="*" element={<> Not Found </>} />

      </Routes>
      </BrowserRouter>
  );
}
function JobApplication() {

	const [selectedFile, setSelectedFile] = useState(null);
  const data = {
    firstName: 'name',
    lastName: 'lastname',
    Email:    'email',
    Description: 'description',
  }

  const submitApp = () => {
  
  if (selectedFile)
  {
    if (!selectedFile.name.endsWith('.pdf') && !selectedFile.name.endsWith('.docx') )
    {
      alert('Please upload a pdf or docx file')
      return
    }
    else 
    {
      const formData = new FormData()
      formData.append('file', selectedFile)
      console.log(JSON.stringify(formData))
      axios.post('/upload', formData).then((res) => {
        // console.log(res)
      }).catch((err) => {
        // console.log(err)
      })
    
    }
    console.log(selectedFile.name)
  }

  data.firstName = document.getElementById('Firstname').value
  data.lastName = document.getElementById('Lastname').value
  data.Email = document.getElementById('Email').value
  data.Description = document.getElementById('Aboutme').value

  axios.post('/api', data).then((res) => {
    // console.log(res)
    alert('Application submitted')
    window.location.reload()
  }).catch((err) => {
    // console.log(err)
  })
}

  return (
    <div className="App">
      <header className="App-header">
        <div className='canva'>
        
          <div>
            <h1> Job Application </h1>
            <p> This is a job application form </p>
          </div >
          <div className='information' > 

            <input id='Firstname' className='item' type="text" placeholder='First name' />
            <input id='Lastname' className='item' type="text" placeholder='Last name'  />
            <input id='Email' className='item' type="text" placeholder='Email' />
            <textarea id='Aboutme' className='Aboutext'  name="texto" rows="3" cols="50" charswidth="23" placeholder='About you' />
            <div id='file_input'>  
              <input  type="file" onChange={(event) => setSelectedFile(event.target.files[0])}></input>  
            </div>
            <button id='submit_button' value='Submit' onClick={submitApp}> SUBMIT </button>

          </div>

        </div>
      </header>
    </div>
  );
}

function Candidate() {

  const [candidate, setCandidate] = useState(1)
  // const [candidates, setCandidates] = useState([])
  // var candidates = []
  
  useEffect(() => {
    axios.get('/candidate').then((res) => {
      setCandidate(res.data.number)
      // candidates = res.data.candidats

    //  console.log(candidates )
    
    }).catch((err) => {
      console.log(err)
    })

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {candidate} Candidate submitted application.
        </p>

        <>
        {
          // candidates && candidates.map((candidate) => {
          //     return (
          //       <div className='s'>
          //       </div>
          //     )
          //   }
          //   )
        }
        </>

      </header>
    </div>
  );
}


export default App;
