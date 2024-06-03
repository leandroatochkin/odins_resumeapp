import React from 'react'

const CvDisplay = ({educationData, workExperienceData, personalData}) => {
  return (
    <div className='cv-display'>
        <div className='header'>
            {console.log(educationData, workExperienceData, personalData)}
        <p className='title'>Curriculum Vitae</p>
        <h2 className='name'>{personalData.firstName} {personalData.lastName}</h2>
        <p className='bio'>{personalData.bio}</p>
        <p>Contact Info</p>
            <ul className='contact-info'>
                <li>phone:{personalData.phone}</li>
                <li>email:{personalData.email}</li>
                <li>website:{personalData.website}</li>
                <li>address:{personalData.address}</li>
            </ul>
        </div>
        <div className='experience'>
            <p>Work Experience</p>
        </div>
    </div>
  )
}

export default CvDisplay