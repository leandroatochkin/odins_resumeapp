  import { useState } from 'react'

  import './App.css'
  import PersonalInfo from './components/PersonalInfo'
  import EducationlInfo from './components/EducationInfo'
  import CvDisplay from './components/CvDisplay'
  import ExperienceInfo from './components/ExperienceInfo'
import Tools from './components/Tools'

  function App() {

    const [educationData, setEducationData] = useState([]);
    const [workExperienceData, setWorkExperienceData] = useState([]);
    const [personalData, setPersonalData] = useState({
      firstName: '',
      lastName: '',
      address: '',
      email: '',
      phone: '',
      website: '',
      bio: '',
      photo: null
    });
    
    console.log(personalData)
  
    return (
      <>
  <h1>CV maker</h1>
  <PersonalInfo personalData={personalData} setPersonalData={setPersonalData} />
  <EducationlInfo educationData={educationData} setEducationData={setEducationData} />
  <ExperienceInfo workExperienceData={workExperienceData} setWorkExperienceData={setWorkExperienceData} />
  <Tools />
  <CvDisplay personalData={personalData} educationData={educationData} workExperienceData={workExperienceData} />
      </>
    )
  }

  export default App
