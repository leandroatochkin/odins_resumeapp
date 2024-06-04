import React, { useState } from 'react';
import { ExpandButton } from './ExpandButton';
import Preview from './Preview';
import { WorkExperience } from '../assets/classes';

const WorkExperienceInfo = ({ workExperienceData, setWorkExperienceData }) => {
  const [formData, setFormData] = useState({
    company: '',
    position: '',
    start: '',
    end: '',
    description: '',
    notFinished: false,
  });

  const [expanded, setExpanded] = useState(true);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleExpanded = (e) => {
    e.preventDefault();
    setExpanded(prevExpanded => !prevExpanded);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleAddWorkExperience = (e) => {
    e.preventDefault();
    const status = formData.notFinished ? 'currently working' : 'finished';
    if (formData.company !== '' && formData.position !== '' && formData.description !== '') {
      if (editingIndex !== null) {
        // Edit existing entry
        setWorkExperienceData(prevData => {
          const newData = [...prevData];
          newData[editingIndex] = new WorkExperience(
            formData.company,
            formData.position,
            formData.start,
            formData.end,
            formData.description,
            status
          );
          return newData;
        });
        setEditingIndex(null); // Reset editing index after updating
      } else {
        // Add new entry
        const newEntry = new WorkExperience(
          formData.company,
          formData.position,
          formData.start,
          formData.end,
          formData.description,
          status
        );
        setWorkExperienceData(prevData => [...prevData, newEntry]);
      }

      // Reset form fields
      setFormData({
        company: '',
        position: '',
        start: '',
        end: '',
        description: '',
        notFinished: false,
      });
    } else {
      alert('Please fill all fields');
    }
  };

  const handleEdit = (index, e) => {
    e.preventDefault();
    const itemToEdit = workExperienceData[index];
    setFormData({
      company: itemToEdit.company,
      position: itemToEdit.position,
      start: itemToEdit.start,
      end: itemToEdit.end,
      description: itemToEdit.description,
      notFinished: itemToEdit.status === 'currently working',
    });
    setEditingIndex(index);
  };

  const handleDelete = (index, e) => {
    e.preventDefault();
    setWorkExperienceData(prevData => prevData.filter((_, i) => i !== index));
  };

  return (
    <div className='input-display'>
      <form className={`section-info ${expanded ? 'expanded' : 'hidden'}`}>
        <div className='component-top-container'>
          <h2>Work Experience</h2>
          <ExpandButton expanded={expanded} handleExpanded={handleExpanded} />
        </div>
        <label htmlFor='company'>Company</label>
        <input 
          type='text'
          name='company'
          value={formData.company}
          onChange={handleInputChange}
          maxLength={20}
        />
        <label htmlFor='position'>Position</label>
        <input 
          type='text'
          name='position'
          value={formData.position}
          onChange={handleInputChange}
          maxLength={20}
        />
        <fieldset className='fieldset'>
          <label htmlFor='start'>Start date:</label>
          <input 
            type='date'
            name='start'
            value={formData.start}
            onChange={handleInputChange}
          />
          <label htmlFor='end'>End date:</label>
          <input 
            type='date'
            name='end'
            value={formData.end}
            onChange={handleInputChange}
          />
          <label htmlFor='not-finished'>Currently working</label>
          <input 
            type='checkbox'
            name='notFinished'
            checked={formData.notFinished}
            onChange={handleInputChange}
          />
        </fieldset>
        <fieldset className='fieldset'>
        <label htmlFor='description'>Job Description</label>
        <textarea
          name='description'
          value={formData.description}
          onChange={handleInputChange}
          maxLength={200}
        />
        </fieldset>
        <button className='add-experience-button' onClick={handleAddWorkExperience}>
          {editingIndex !== null ? 'Update' : 'Add'}
        </button>
        <Preview data={workExperienceData} handleEdit={handleEdit} handleDelete={handleDelete} />
      </form>
    </div>
  );
};

export default WorkExperienceInfo;
