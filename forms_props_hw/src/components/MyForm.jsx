import React, { useState } from 'react';
import "./MyForm.css"

const MyForm = ({ onAddItem }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && price) {
      onAddItem(title, price);
      setTitle('');
      setPrice('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="title-div">
        <input
          placeholder="Title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="price-div">
        <input
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button className="add-button" type="submit">Add</button>
    </form>
  );
};

export default MyForm;