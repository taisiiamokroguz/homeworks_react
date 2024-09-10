import { useState, useEffect } from 'react';
import MyForm from './components/MyForm'; 
import Card from './components/Card'; 
import data from './models/products.json'
import "./App.css"

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);

  const addItem = (name, price) => {
    const newItem = {
      id: items.length + 1,
      name,
      exprice: `$$${parseFloat(price) + 10}`,
      price: `$${price}`,
    };
    setItems([...items, newItem]);
  };

  return (
    <div>
      <MyForm onAddItem={addItem} />
      <div className="cards-container">
        {items.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default App;
