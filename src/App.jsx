import { useState } from 'react'

import './App.css'
import PersonalInfo from './components/PersonalInfo'
import EducationlInfo from './components/EducationInfo'
import CvDisplay from './components/CvDisplay'
import ExperienceInfo from './components/ExperienceInfo'

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
    bio: ''
  });
  console.log(workExperienceData)
 
  return (
    <>
<PersonalInfo personalData={personalData} setPersonalData={setPersonalData} />
<EducationlInfo educationData={educationData} setEducationData={setEducationData} />
<ExperienceInfo workExperienceData={workExperienceData} setWorkExperienceData={setWorkExperienceData} />
<CvDisplay personalData={personalData} educationData={educationData} workExperienceData={workExperienceData} />
    </>
  )
}

export default App
