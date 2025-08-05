import { HighlightTitle } from '@shared/ui/Typography/HighlightTitle';
import { EventsWidget } from '@widgets/EventsWidget';
import { TimelineControllerWidget } from '@widgets/TimelineControllerWidget';
import { useState } from 'react';
import './MainPage.scss';
import PageGrid from './PageGrid';
import { TIMELINE_MOCKS } from '@shared/mocks/TimelineMocks';

const MainPage = () => {
  const pageTitle = 'Исторические \n даты';

  const [currentAge, setCurrentAge] = useState<number>(1);
  const ageId = TIMELINE_MOCKS[currentAge - 1].id;
  return (
    <div className="main-page">
      <PageGrid />
      <div className="main-page__widgets-wrapper">
        {/* <Circle strokeOpacity={0.2} /> */}
        <HighlightTitle text={pageTitle} />
        <div className="main-page__content">
          <TimelineControllerWidget currentAge={currentAge} setCurrentAge={setCurrentAge} />
          <EventsWidget ageId={ageId} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
