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
    title: 'Эра первых космических достижений',
  },
  {
    id: 2,
    startYear: 1971,
    endYear: 1980,
    title: 'Время орбитальных станций и международного сотрудничества',
  },
  {
    id: 3,
    startYear: 1981,
    endYear: 1990,
    title: "Расцвет программы 'Мир' и многоразовых кораблей",
  },
  {
    id: 4,
    startYear: 1991,
    endYear: 2000,
    title: 'Начало коммерческой космонавтики и создание МКС',
  },
  {
    id: 5,
    startYear: 2001,
    endYear: 2010,
    title: 'Развитие космического туризма и навигационных систем',
  },
  {
    id: 6,
    startYear: 2011,
    endYear: 2020,
    title: 'Частная космонавтика и международные проекты',
  },
];
