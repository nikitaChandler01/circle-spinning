import { Circle } from '@shared/ui/Circle';
import { HighlightTitle } from '@shared/ui/Typography/HighlightTitle';
import { EventsWidget } from '@widgets/EventsWidget';
import './MainPage.scss';
import PageGrid from './PageGrid';

const MainPage = () => {
  const pageTitle = 'Исторические \n даты';

  return (
    <div className="main-page">
      <PageGrid />
      <div className="main-page__widget-wrapper">
        <Circle strokeOpacity={0.2} />
        <HighlightTitle text={pageTitle} />
        <EventsWidget />
      </div>
    </div>
  );
};

export default MainPage;
