import gsap from 'gsap';
import { activeAndHoveredSelectStyles, decreasedSelectedItemStyles } from '../constants';

//по сути в shared можно создать класс animation.service
//там будет определен gsap и подключаться нужные плагины
//и инкапсулировать в него всю логику анимаций
//методы класса принимали extends HTMLElement target и стили которые надо применить
//стили "конечных стадий анимации" описывать рядом с определением самих сущностей или shared компонентов
//но такие анимации используются только в этом виджете поэтому это будет только здесь

interface IMoveForPath {
  path: SVGPathElement;
  elements: (HTMLDivElement | null)[];
  startPoint: number;
  endPoint: number;
  duration?: number;
  ease?: string;
}

export const increaseTarget = (increasingElem: HTMLDivElement | null) =>
  gsap.to(increasingElem, activeAndHoveredSelectStyles);

export const decreaseTarget = (increasingElem: HTMLDivElement | null) =>
  gsap.to(increasingElem, decreasedSelectedItemStyles);

export const moveForPath = ({ path, elements, startPoint, endPoint, duration = 0, ease }: IMoveForPath) =>
  gsap.to(elements, {
    motionPath: {
      path: path,
      align: path,
      autoRotate: false,
      alignOrigin: [0.5, 0.5],
      start: (i) => (i + 0.5 - startPoint + 1) / 6,
      end: (i) => (i + 0.5 - endPoint + 1) / 6,
    },
    duration,
    ease,
  });
