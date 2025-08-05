import React from 'react';
import './MainPage.scss';
import { EventsWidget } from '@widgets/EventsWidget';

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="main-page__widget-wrapper">
        <EventsWidget />
      </div>
    </div>
  );
};

export default MainPage;
