import React, { useState, useEffect } from 'react';
import './App.css';
import { cards } from './db'; 

const App = () => {
  const [azkar, setAzkar] = useState([]);
  const [counts, setCounts] = useState([]);

  useEffect(() => {
    const firstSix = cards.slice(0, 6); 
    setAzkar(firstSix);
    setCounts(firstSix.map(z => z.count));
  }, []);

  const decrement = (index) => {
    if (counts[index] > 0) {
      const newCounts = [...counts];
      newCounts[index]--;
      setCounts(newCounts);
    }
  };

  const resetCount = (index, e) => {
    e.stopPropagation();
    const newCounts = [...counts];
    newCounts[index] = azkar[index].count;
    setCounts(newCounts);
  };

  return (
    <div className="container">
      {azkar.map((z, i) => (
        <div
          key={z.id}
          className="card"
          style={{ backgroundColor: z.backgroundColor }}
          onClick={() => decrement(i)}
        >
          <div className="title">{z.title}</div>
          <div className="refresh-inline" onClick={(e) => resetCount(i, e)}>
            &#x21bb;
          </div>
          <div className="count">{counts[i]}</div>
        </div>
      ))}
    </div>
  );
};

export default App;
