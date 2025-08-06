interface Event {
  year: number;
  eventDesc: string;
}

interface EventsMock {
  [idOfTimeline: number]: Event[];
}

export const EVENTS_MOCKS: EventsMock = {
  1: [
    { year: 1961, eventDesc: 'Первый полет человека в космос - Юрий Гагарин' },
    { year: 1963, eventDesc: 'Валентина Терешкова - первая женщина в космосе' },
    { year: 1965, eventDesc: 'Алексей Леонов - первый выход в открытый космос' },
    { year: 1969, eventDesc: 'Американцы высадились на Луну (Аполлон-11)' },
  ],
  2: [
    { year: 1971, eventDesc: 'Нобелевская премия по литературе Пабло Неруде' },
    { year: 1973, eventDesc: "Александр Солженицын завершил 'Архипелаг ГУЛАГ'" },
    { year: 1977, eventDesc: "Толкиеновский 'Сильмариллион' издан после смерти" },
    { year: 1979, eventDesc: "Рэй Брэдбери публикует 'Марсианские хроники'" },
  ],
  3: [
    { year: 1981, eventDesc: "Группа Queen выпускает легендарный альбом 'Greatest Hits'" },
    { year: 1984, eventDesc: 'Madonna становится мировой поп-иконой' },
    { year: 1987, eventDesc: "U2 выпускает культовый альбом 'The Joshua Tree'" },
    { year: 1989, eventDesc: 'Первое выступление Nirvana - начало гранжа' },
  ],
  4: [
    { year: 1991, eventDesc: 'Распад СССР - изменения в мировом спорте' },
    { year: 1994, eventDesc: 'ЧМ по футболу в США - рост популярности спорта' },
    { year: 1996, eventDesc: 'Олимпиада в Атланте - 100 лет современным Играм' },
    { year: 1999, eventDesc: 'Сборная Франции по футболу выигрывает ЧМ-98' },
  ],
  5: [
    { year: 2001, eventDesc: "Выход 'Властелина колец' - новая эра в кино" },
    { year: 2003, eventDesc: 'Матрица: Революция - культовый фантастический фильм' },
    { year: 2008, eventDesc: 'Темный рыцарь - рекордные сборы для фильмов' },
    { year: 2010, eventDesc: "Начало вселенной Marvel - 'Железный человек 2'" },
  ],
  6: [
    { year: 2011, eventDesc: 'Apple представляет Siri - начало эры голосовых помощников' },
    { year: 2014, eventDesc: 'Facebook покупает Oculus - развитие VR технологий' },
    { year: 2016, eventDesc: 'AlphaGo побеждает чемпиона по игре в Го' },
    { year: 2020, eventDesc: 'Илон Маск представляет нейрочип Neuralink' },
  ],
};
