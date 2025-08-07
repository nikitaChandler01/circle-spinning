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
  const [currentAgeId, setCurrentAgeId] = useState<number>(1);
  const ageId = TIMELINE_MOCKS[currentAgeId - 1].id;
  const ageTitle = TIMELINE_MOCKS[currentAgeId - 1].title;
  return (
    <div className="main-page">
      <TimelineSelectWrapper
        timelineAges={TIMELINE_MOCKS}
        refPath={circleRef}
        currentAgeId={currentAgeId}
        setCurrentAgeId={setCurrentAgeId}
      />
      <PageGrid circleRef={circleRef} />
      <div className="main-page__widgets-wrapper">
        <HighlightTitle text={pageTitle} />
        <Circle strokeOpacity={0.2} forwardRef={circleRef} />
        <TimelineYears timelineAges={TIMELINE_MOCKS} currentAge={currentAgeId} />
        <div className="main-page__content">
          <TimelineControllerWidget
            timelineAges={TIMELINE_MOCKS}
            currentAge={currentAgeId}
            setCurrentAge={setCurrentAgeId}
          />
          <EventsWidget ageTitle={ageTitle} ageId={ageId} setCurrentAgeId={setCurrentAgeId} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
