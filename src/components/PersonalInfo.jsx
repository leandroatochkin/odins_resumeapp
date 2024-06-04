import React from 'react';
import { ExpandButton } from './ExpandButton';
import Preview from './Preview';
import { useState } from 'react';

const PersonalInfo = ({ personalData, setPersonalData }) => {
  const [expanded, setExpanded] = useState(true);

  const handleExpanded = (e) => {
    e.preventDefault();
    setExpanded(prevExpanded => !prevExpanded);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className='input-display'>
      <form className={`section-info ${expanded ? 'expanded' : 'hidden'}`}>
        <div className='component-top-container'>
          <h2>Personal Info</h2>
          <ExpandButton expanded={expanded} handleExpanded={handleExpanded} />
        </div>
        <label htmlFor='firstName'>First Name</label>
        <input
          type="text"
          name="firstName"
          value={personalData.firstName}
          onChange={handleInputChange}
          maxLength={16}
        />
        <label htmlFor='lastName'>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={personalData.lastName}
          onChange={handleInputChange}
          maxLength={16}
        />
        <label htmlFor='address'>Address</label>
        <input
          type="text"
          name="address"
          value={personalData.address}
          onChange={handleInputChange}
          maxLength={20}
        />
        <label htmlFor='email'>Email</label>
        <input
          type="email"
          name="email"
          value={personalData.email}
          onChange={handleInputChange}
          maxLength={20}
        />
        <label htmlFor='phone'>Phone</label>
        <input
          type="tel"
          name="phone"
          value={personalData.phone}
          onChange={handleInputChange}
          maxLength={20}
        />
        <label htmlFor='website'>Website</label>
        <input
          type="url"
          name="website"
          value={personalData.website}
          onChange={handleInputChange}
          maxLength={20}
        />
        <label htmlFor='bio'>Bio</label>
        <textarea
          name="bio"
          value={personalData.bio}
          onChange={handleInputChange}
          maxLength={200}
        />
        <Preview data={personalData} />
      </form>
    </div>
  );
};

export default PersonalInfo;
