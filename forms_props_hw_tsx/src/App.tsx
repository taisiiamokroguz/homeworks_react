import React, { useEffect, useReducer } from 'react';
import MyForm from './components/MyForm';
import Card from './components/Card';
import { ICard } from './types/ICard';
import { itemsReducer, initialState } from './reducer/reducer';
import "./App.css";

const App: React.FC = () => {
  const [state, dispatch] = useReducer(itemsReducer, initialState);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:5000/products');
        if (!response.ok) {
          throw new Error('Ошибка сети');
        }
        const data: ICard[] = await response.json();
        dispatch({ type: 'LOAD_ITEMS', payload: data });
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    };

    fetchItems();
  }, []);

  const addItem = async (name: string, price: number) => {
    const newItem: ICard = {
      id: state.items.length + 1,
      name,
      exprice: `$$${price + 10}`,
      price: `$${price.toFixed(2)}`,
    };

    try {
      const response = await fetch('http://localhost:5000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });

      if (!response.ok) {
        throw new Error('Ошибка при отправке данных на сервер');
      }

      const addedItem: ICard = await response.json();
      dispatch({ type: 'ADD_ITEM', payload: addedItem });
    } catch (error) {
      console.error('Ошибка при добавлении элемента:', error);
    }
  };

  return (
    <div>
      <MyForm onAddItem={addItem} />
      <div className="cards-container">
        {state.items.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default App;
