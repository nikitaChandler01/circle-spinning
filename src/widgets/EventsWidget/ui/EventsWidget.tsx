import TransparentCard from '@shared/ui/Cards/TransparentCard';
import Carousel from '@shared/ui/Carousel/Carousel';
import './EventsWidget.scss';
import { useAnimatedEventsWidget } from '../model';

interface IEventsWidget {
  ageId: number;
}

const EventsWidget = ({ ageId }: IEventsWidget) => {
  const { containerRef, events } = useAnimatedEventsWidget({ ageId });

  return (
    <div ref={containerRef}>
      <Carousel
        items={events}
        itemRenderer={(item) => <TransparentCard title={`${item.year}`} content={item.eventDesc} />}
      />
    </div>
  );
};

export default EventsWidget;
