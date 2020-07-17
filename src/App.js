import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import CardList from './components/CardList';

const App = () => {
  const [cards, setCards] = useState([]);

  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo));
  };

  return (
    <div className='App'>
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
    </div>
  );
};

export default App;
