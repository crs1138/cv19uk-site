import React from 'react';
import Timeline from './Timeline/Timeline';
import './App.scss';


const testData = [
  {
    id: 1,
    date: `2019-12-30T23:00:00.000Z`,
    heading: `China alerts World Health Organisation to new virus.`,
    details: ``,
  },
  {
    id: 2,
    date: `2020-01-23T23:00:00.000Z`,
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
    date: `2020-01-24T23:00:00.000Z`,
    heading: `Boris Johnson misses first COBRA meeting.`,
    details: `Chinese doctors publish an article - in English - in the respected British medical journal The Lancet, warning the world that the number of deaths in Wuhan was “rising quickly” amid concern that coronavirus “could have acquired the ability for efficient human transmission”.`,
  },
  {
    id: 4,
    date: `2020-01-27T23:00:00.000Z`,
    heading: `January 27th Health Secretary Matt Hancock told parliament there were no confirmed coronavirus cases in the UK, and that the risk to the UK population was “low”.`,
    details: ``,
  },
  {
    id: 5,
    date: `2020-01-29T23:00:00.000Z`,
    heading: `Boris Johnson misses second COBRA meeting.`,
    details: ``,
  },
  {
    id: 6,
    date: `2020-01-30T23:00:00.000Z`,
    heading: `WHO declares the outbreak a global public health emergency.`,
    details: ``,
  },
  {
    id: 7,
    date: `2020-02-05T23:00:00.000Z`,
    heading: `Boris Johnson misses third COBRA meeting.`,
    details: ``,
  },
  {
    id: 8,
    date: `2020-03-12T23:00:00.000Z`,
    heading: `Boris Johnson keeps missing…`,
    details: ``,
  },
  {
    id: 9,
    date: `2020-04-24T23:00:00.000Z`,
    heading: `Boris Johnson keeps missing…`,
    details: ``,
  },
  {
    id: 10,
    date: `2020-05-05T23:00:00.000Z`,
    heading: `Boris Johnson keeps missing…`,
    details: ``,
  },
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
