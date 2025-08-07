import { TIMELINE_MOCKS } from '@shared/mocks/TimelineMocks';
import { Circle } from '@shared/ui/Circle';
import { HighlightTitle } from '@shared/ui/Typography/HighlightTitle';
import { EventsWidget } from '@widgets/EventsWidget';
import { TimelineControllerWidget } from '@widgets/TimelineControllerWidget';
import { TimelineSelectWrapper } from '@widgets/TimelineSelect';
import { TimelineYears } from '@widgets/TimelineYears';
import { useRef, useState } from 'react';
import './MainPage.scss';
import PageGrid from './PageGrid';

const MainPage = () => {
  const pageTitle = 'Исторические \n даты';
  const circleRef = useRef<SVGCircleElement>(null);
  const [currentAge, setCurrentAge] = useState<number>(1);
  const ageId = TIMELINE_MOCKS[currentAge - 1].id;
  return (
    <div className="main-page">
      <TimelineSelectWrapper
        timelineAges={TIMELINE_MOCKS}
        refPath={circleRef}
        currentAgeId={currentAge}
        setCurrentAgeId={setCurrentAge}
      />
      <PageGrid circleRef={circleRef} />
      <div className="main-page__widgets-wrapper">
        <HighlightTitle text={pageTitle} />
        <Circle strokeOpacity={0.2} forwardRef={circleRef} />
        <TimelineYears timelineAges={TIMELINE_MOCKS} currentAge={currentAge} />
        <div className="main-page__content">
          <TimelineControllerWidget
            timelineAges={TIMELINE_MOCKS}
            currentAge={currentAge}
            setCurrentAge={setCurrentAge}
          />
          <EventsWidget ageId={ageId} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
