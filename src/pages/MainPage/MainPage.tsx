import { TIMELINE_MOCKS } from '@shared/mocks/TimelineMocks';
import { HighlightTitle } from '@shared/ui/Typography/HighlightTitle';
import { EventsWidget } from '@widgets/EventsWidget';
import { TimelineControllerWidget } from '@widgets/TimelineControllerWidget';
import { TimelineSelect } from '@widgets/TimelineSelect';
import { useRef, useState } from 'react';
import './MainPage.scss';
import PageGrid from './PageGrid';
import { TimelineYears } from '@widgets/TimelineYears';

const MainPage = () => {
  const pageTitle = 'Исторические \n даты';
  const circleRef = useRef<SVGCircleElement>(null);
  const [currentAge, setCurrentAge] = useState<number>(1);
  const ageId = TIMELINE_MOCKS[currentAge - 1].id;
  return (
    <div className="main-page">
      <TimelineSelect refPath={circleRef} currentAge={currentAge} />
      <PageGrid circleRef={circleRef} />
      <div className="main-page__widgets-wrapper">
        <HighlightTitle text={pageTitle} />
        <TimelineYears currentAge={currentAge} />
        <div className="main-page__content">
          <TimelineControllerWidget currentAge={currentAge} setCurrentAge={setCurrentAge} />
          <EventsWidget ageId={ageId} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
