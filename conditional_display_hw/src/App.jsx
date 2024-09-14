import Card from './components/Card'; 
import data from './products.json'
import { useState, useEffect } from 'react';
import "./App.css"

import Rowenta1 from './card_photo/Rowenta1.webp';
import Rowenta2 from './card_photo/Rowenta2.webp';
import IdeaHome from './card_photo/IdeaHome.webp';
import Dryer from './card_photo/Dryer.webp';



const App = () => {
  const [items, setItems] = useState([]);
  const imagesMap  = {
    Rowenta1: Rowenta1,
    Rowenta2: Rowenta2,
    IdeaHome: IdeaHome,
    Dryer: Dryer,
};
useEffect(() => {
  const updatedProducts = data.map(product => ({
    ...product,
    photo: imagesMap[product.photo.split('/').pop().split('.')[0]], 
  }));
  setItems(updatedProducts);
}, []);


  return (
    <div>
      <div className="cards-container">
        {items.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};



export default App
