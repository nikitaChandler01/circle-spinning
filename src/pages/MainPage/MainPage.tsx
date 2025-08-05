import React from 'react';
import './MainPage.scss';
import { EventsWidget } from '@widgets/EventsWidget';
import PageGrid from './PageGrid';
import { HighlightTitle } from '@shared/ui/Typography/HighlightTitle';

const MainPage = () => {
  const pageTitle = 'Исторические \n даты';

  return (
    <div className="main-page">
      <PageGrid />
      <div className="main-page__widget-wrapper">
        <HighlightTitle text={pageTitle} />
        <EventsWidget />
      </div>
    </div>
  );
};

export default MainPage;
