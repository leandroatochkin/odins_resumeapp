import React, { useState } from 'react';
import { ExpandButton } from './ExpandButton';
import Preview from './Preview';
import { Education } from '../assets/classes';

const EducationInfo = ({ educationData, setEducationData }) => {
  const [formData, setFormData] = useState({
    establishment: '',
    degree: '',
    start: '',
    end: '',
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

  const handleAddEducation = (e) => {
    e.preventDefault();
    const status = formData.notFinished ? 'not finished' : 'finished';
    if (formData.establishment !== '' && formData.degree !== '') {
      if (editingIndex !== null) {
        // Edit existing entry
        setEducationData(prevData => {
          const newData = [...prevData];
          newData[editingIndex] = new Education(
            formData.establishment,
            formData.degree,
            formData.start,
            formData.end,
            status
          );
          return newData;
        });
        setEditingIndex(null); // Reset editing index after updating
      } else {
        // Add new entry
        const newEntry = new Education(
          formData.establishment,
          formData.degree,
          formData.start,
          formData.end,
          status
        );
        setEducationData(prevData => [...prevData, newEntry]);
      }

      // Reset form fields
      setFormData({
        establishment: '',
        degree: '',
        start: '',
        end: '',
        notFinished: false,
      });
    } else {
      alert('Please fill all fields');
    }
  };

  const handleEdit = (index, e) => {
    e.preventDefault();
    const itemToEdit = educationData[index];
    setFormData({
      establishment: itemToEdit.establishment,
      degree: itemToEdit.degree,
      start: itemToEdit.start,
      end: itemToEdit.end,
      notFinished: itemToEdit.status === 'not finished',
    });
    setEditingIndex(index);
  };

  const handleDelete = (index, e) => {
    e.preventDefault();
    setEducationData(prevData => prevData.filter((_, i) => i !== index));
  };

  return (
    <div className='input-display'>
      <form className={`section-info ${expanded ? 'expanded' : 'hidden'}`}>
        <div className='component-top-container'>
          <h2>Education</h2>
          <ExpandButton expanded={expanded} handleExpanded={handleExpanded} />
        </div>
        <label htmlFor='establishment'>Establishment</label>
        <input 
          type='text'
          name='establishment'
          value={formData.establishment}
          onChange={handleInputChange}
        />
        <label htmlFor='degree'>Degree</label>
        <input 
          type='text'
          name='degree'
          value={formData.degree}
          onChange={handleInputChange}
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
          <label htmlFor='not-finished'>Unfinished</label>
          <input 
            type='checkbox'
            name='notFinished'
            checked={formData.notFinished}
            onChange={handleInputChange}
          />
        </fieldset>
        <button className='add-establishment-button' onClick={handleAddEducation}>
          {editingIndex !== null ? 'Update' : 'Add'}
        </button>
        <Preview data={educationData} handleEdit={handleEdit} handleDelete={handleDelete} />
      </form>
    </div>
  );
};

export default EducationInfo;
