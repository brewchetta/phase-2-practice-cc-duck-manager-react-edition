import React, { useState } from 'react';

function DuckForm({addDuck}) {

  const BLANK_FORM_DATA = {
    name: '',
    img_url: '',
  }

  const [formData, setFormData] = useState(BLANK_FORM_DATA)

  function handleChange(e) {
    const key = e.target.name;
    const val = e.target.value;
    console.log(key, val)
    setFormData({...formData, [key]: val});
  }

  function handleSubmit(e) {
    e.preventDefault();
    addDuck(formData)

  }

  return (
    <form id="new-duck-form" onSubmit={handleSubmit}>
       <label htmlFor="duck-name-input">New Duck Name:</label>
       <input 
        type="text" 
        name="name"
        value={formData.name} 
        onChange={handleChange}
        formdatakey='name'
      />

       <label htmlFor="duck-image-input">New Duck Image URL:</label>
       <input 
        type="text" 
        name="img_url"
        value={formData.img_url} 
        onChange={handleChange}
        formdatakey='img_url'
      />

       <input type="submit" value="Create Duck" />
    </form>
  )
}

export default DuckForm
