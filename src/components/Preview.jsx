import React from 'react';

const Preview = ({ data, handleEdit,  handleDelete }) => {
  return (
    <div className='preview-container'>
      <h2>Preview</h2>
      
      {Array.isArray(data) ? (//allows to edit or remove multiple elements, it works for multiple times like education or experience
        data.map((dataItem, index) => (
          dataItem && (
            <div key={index} className='preview-line'>
              {Object.entries(dataItem).map(([key, value])=>{
                return <div key={key} className='preview-item'><span style={{fontWeight: 'bolder'}}>{key}:</span><br/>{value}</div>
              })}
              <button onClick={(e) => handleEdit(index, e)} className='edit-button'>
                edit
              </button>
              <button onClick={(e) => handleDelete(index, e)} className='edit-button'>
                remove  
              </button>
            </div>
          )
        ))
      ) : (
        Object.entries(data).map(([key, value]) => (//since personal info, theres only one, i removed the delete button
          value && (
            <div key={key} className='preview-line'>
              {value}
              <button onClick={() => handleFunction(key)} className='edit-button'>
                edit
              </button>
            </div>
          )
        ))
      )}
    </div>
  );
};

export default Preview;
