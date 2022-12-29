import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [player, setPlayer] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>NBA Top {player.length} Scorers</h3>
        <List player={player}/>
        <button onClick={() => setPlayer([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
