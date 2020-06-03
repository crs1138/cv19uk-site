import React from 'react';
import CVHeader from './Header/Header';
import Footer from './Footer/Footer';
import Timeline from './Timeline/Timeline';
import { useEvents, useSettings } from './API/Fetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/pro-duotone-svg-icons'
import './App.scss';

function App() {
  const [settings, loadingSettings] = useSettings();
  const [events, loadingEvents] = useEvents();

  return (
    <div className="App">
      { loadingSettings || loadingEvents ? (
        <div className="loading">
            <h2>Loading data…</h2>
            <FontAwesomeIcon icon={ faSpinner } size='4x' fixedWidth pulse />
            <p>Thank you for exercising your patience…</p>
        </div>
      ) : (
        <>
          <CVHeader title={settings[0].title} description={settings[0].description} />
          <main className="container">

            <Timeline events={events} />
          </main>
          <Footer content={settings[0].footer} />
        </>
      ) }
    </div>
  );
}

export default App;
