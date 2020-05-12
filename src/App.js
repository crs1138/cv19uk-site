import React from 'react';
import Timeline from './Timeline';
import './scss/App.scss';


const testData = [
  {
    id: 1,
    date: `December 31, 2019`,
    heading: `China alerts World Health Organisation to new virus.`
  },
  {
    id: 2,
    date: `January 23, 2020`,
    heading: `Study reveals a third of China’s patients require intensive care.`,
    details: `Chinese government shuts down city of Wuhan.`,
    images: [
      {
        thumbnail: `https://via.placeholder.com/150`,
        full: `https://via.placeholder.com/500x300`,
      },
    ],
  },
  {
    id: 3,
    date: `January 24, 2020`,
    heading: `Boris Johnson misses first COBRA meeting.`,
    details: `Chinese doctors publish an article - in English - in the respected British medical journal The Lancet, warning the world that the number of deaths in Wuhan was “rising quickly” amid concern that coronavirus “could have acquired the ability for efficient human transmission”.`,
  },
  {
    id: 4,
    date: `January 27, 2020`,
    heading: `January 27th Health Secretary Matt Hancock told parliament there were no confirmed coronavirus cases in the UK, and that the risk to the UK population was “low”.`
  },
  {
    id: 5,
    date: `January 29, 2020`,
    heading: `Boris Johnson misses second COBRA meeting.`
  },
  {
    id: 6,
    date: `January 30, 2020`,
    heading: `WHO declares the outbreak a global public health emergency.`
  },
  {
    id: 7,
    date: `February 5, 2020`,
    heading: `Boris Johnson misses third COBRA meeting.`
  }
];

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Hello!!!</h1>
        Is this the real life, is this the fantasy?
        <Timeline events={testData} />
      </div>
    </div>
  );
}


export default App;
