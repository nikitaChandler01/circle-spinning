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

export const moveForPath = ({
  path,
  elements,
  startPoint,
  endPoint,
  duration = 0.5,
  ease = 'power1.out',
}: IMoveForPath) =>
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

// export const moveForPath = ({ path, elements, startPoint, endPoint, duration = 0, ease }: IMoveForPath) => {
//   const totalPoints = elements.length;
//   const phaseShift = 1 / totalPoints; // это фазовый сдвиг на 60 градусов 1/6 окружности
//   const isEdgeToEdge = Math.abs(startPoint - endPoint) === totalPoints - 1;

//   return gsap.to(elements, {
//     motionPath: {
//       path: path,
//       align: path,
//       autoRotate: false,
//       alignOrigin: [0.5, 0.5],
//       start: (i) => {
//         const index = i + 0.5;
//         return (((index - startPoint + totalPoints) % totalPoints) / totalPoints + phaseShift) % 1;
//       },
//       end: (i) => {
//         const index = i + 0.5;
//         const startPos = (((index - startPoint + totalPoints) % totalPoints) / totalPoints + phaseShift) % 1;
//         const endPos = (((index - endPoint + totalPoints) % totalPoints) / totalPoints + phaseShift) % 1;

//         let delta = endPos - startPos;
//         if (!isEdgeToEdge) return startPos + delta;
//         if (delta > 0.5) delta -= 1;
//         if (delta < -0.5) delta += 1;
//         return startPos + delta;
//       },
//     },
//     duration,
//     ease,
//   });
// };
