import React from 'react';

const CvDisplay = ({ educationData, workExperienceData, personalData }) => {
  return (
    <div className='cv-display'>
      <div className='header'>
        <p className='title' style={{ fontWeight: 'bolder' }}>Curriculum Vitae</p>
        <h2 className='name'>{personalData.firstName} {personalData.lastName}</h2>
        <p className='bio'>{personalData.bio}</p>
        <p style={{ fontWeight: 'bolder' }}>Contact Info</p>
        <ul className='contact-info'>
          <li>phone: {personalData.phone}</li>
          <li>email: {personalData.email}</li>
          <li>website: {personalData.website}</li>
          <li>address: {personalData.address}</li>
        </ul>
      </div>
      <div className='experience'>
        <p style={{ fontWeight: 'bolder' }}>Work Experience</p>
        {workExperienceData.map((item, index) => {
          return (
            <div key={index} className='cv-line' >
              {Object.entries(item).map(([key, value]) => {
                return <div key={key} className='cv-item' ><span className='key'>{key}:</span> <span style={{height: 'auto', maxWidth: '80%', wordBreak: 'break-word'}}>{value}</span></div>;
              })}
            </div>
          );
        })}
        <div className='separator'></div>
      </div>
      <div className='education'>
        <p style={{ fontWeight: 'bolder' }}>Education</p>
        {educationData.map((item, index) => {
          return (
            <div key={index} className='cv-line'>
              {Object.entries(item).map(([key, value]) => {
                return <div key={key} className='cv-item'><span className='key'>{key}:</span> <span style={{height: 'auto', maxWidth: '80%', wordBreak: 'break-word'}}>{value}</span></div>;
              })}
            </div>
          );
        })}
        <div className='separator'></div>
      </div>
    </div>
  );
}

export default CvDisplay;
