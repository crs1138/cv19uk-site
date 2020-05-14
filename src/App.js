import React from 'react';
import Timeline from './Timeline/Timeline';
import { useEvents } from './API/Fetch';
import './App.scss';

function App() {
  const [events, loading] = useEvents();
  return (
    <div className="App">
      <div className="container">
        <h1>Hello!!!</h1>
        Is this the real life, is this the fantasy?
        {/* @todo Loading spinner */}
        { loading ? (`Loading`) : (
          <Timeline events={events} />
        )}
      </div>
    </div>
  );
}

export default App;
