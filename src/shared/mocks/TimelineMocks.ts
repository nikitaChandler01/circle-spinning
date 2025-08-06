interface TimelineMock {
  id: number;
  startYear: number;
  endYear: number;
  title: string;
}
export const TIMELINE_MOCKS: TimelineMock[] = [
  {
    id: 1,
    startYear: 1961,
    endYear: 1970,
    title: 'Наука',
  },
  {
    id: 2,
    startYear: 1971,
    endYear: 1980,
    title: 'Литература',
  },
  {
    id: 3,
    startYear: 1981,
    endYear: 1990,
    title: 'Музыка',
  },
  {
    id: 4,
    startYear: 1991,
    endYear: 2000,
    title: 'Спорт',
  },
  {
    id: 5,
    startYear: 2001,
    endYear: 2010,
    title: 'Кино',
  },
  {
    id: 6,
    startYear: 2011,
    endYear: 2020,
    title: 'Технологии',
  },
];
