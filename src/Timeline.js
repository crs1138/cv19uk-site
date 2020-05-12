import React from 'react';
import TimeUnitList from './TimeUnitList';
import './scss/Timeline.module.scss';

function Timeline({ events }) {
    return (
      <div className="tm timeline">
        <div className="tm__line"></div>
        <TimeUnitList events={ events } />
      </div>
    );
  }

export default Timeline;