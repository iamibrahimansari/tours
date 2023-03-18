import './App.css';
import './components/style.css';
import './components/media-queries.css';
import countries from './components/data/data';
import Header from './components/Header';
import Card from './components/Card';
import Button from './components/Button';
import {useState} from 'react';

const App = () => {
  const [cards, setCards] = useState(countries);
  const removeCard = countryName =>{
    const newList = cards.filter(card => card.name !== countryName);
    setCards(newList);
  }

  const refreshApp = () =>{
    setCards(countries);
  }

  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>
      <main className="main">
        {
          cards.length ? 
          <div className="cards">
            {cards.map(card => <Card {...card} onClick={() => removeCard(card.name)} />)}
          </div> :
          <Button text="Refresh" className="refresh-btn" onClick={refreshApp} />
        }
      </main>
    </div>
  );
}

export default App;
