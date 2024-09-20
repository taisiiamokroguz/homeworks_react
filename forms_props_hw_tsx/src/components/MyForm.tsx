import React, { useState } from 'react';
import "./MyForm.css";


interface MyFormProps {
  onAddItem: (title: string, price: number) => void;
}

const MyForm: React.FC<MyFormProps> = ({ onAddItem }) => {
  const [title, setTitle] = useState<string>('');
  const [price, setPrice] = useState<string>(''); 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const priceValue = parseFloat(price); 
    if (title && !isNaN(priceValue)) {
      onAddItem(title, priceValue); 
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