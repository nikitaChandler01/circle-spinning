import TransparentCard from '@shared/ui/Cards/TransparentCard';
import Carousel from '@shared/ui/Carousel/Carousel';
import { useAnimatedEventsWidget } from '../model';
import './EventsWidget.scss';

interface IEventsWidget {
  setCurrentAgeId: (item: number) => void;
  ageTitle: string;
  ageId: number;
}

const EventsWidget = ({ setCurrentAgeId, ageTitle, ageId }: IEventsWidget) => {
  const { containerRef, events, timeOfAnimation } = useAnimatedEventsWidget({ ageId, setCurrentAgeId });

  return (
    <div className="events" ref={containerRef}>
      <div className="events__title">{ageTitle}</div>
      <div className="events__divider" />
      <Carousel
        items={events}
        itemRenderer={(item) => <TransparentCard title={`${item.year}`} content={item.eventDesc} />}
      />
    </div>
  );
};

export default EventsWidget;
