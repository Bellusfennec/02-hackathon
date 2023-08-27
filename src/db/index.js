const db = {
  partners: [
    {
      id: 1,
      firstName: "Нияз",
      lastName: "Зайцев",
      age: 31,
      image: "89993415.jpeg",
      info: "Живу в Казани. Люблю компьютерные игры. Иногда бегаю.",
      position: "Team Leader",
      socials: [
        { id: 1, name: "GitHub", link: "https://vk.com/bellusfennec" },
        { id: 2, name: "VK", link: "https://github.com/Bellusfennec" },
      ],
      impacts: [
        { id: 1, name: "Создал проект." },
        { id: 2, name: "Добавил компонент navbar." },
      ],
      skills: [
        { id: 1, name: "CSS", percent: 82 },
        { id: 2, name: "Javascript", percent: 71 },
        { id: 3, name: "React", percent: 79 },
      ],
    },
    {
      id: 2,
      firstName: "Андрей",
      lastName: "Кутузов",
      age: 18,
      image: "52581965.jpeg",
      info: "О себе (2-3 предложения)",
      position: "Frontend Development",
      socials: [
        { id: 1, name: "GitHub", link: "https://github.com/Andrey999K" },
      ],
      impacts: [{ id: 1, name: "Добавил компонент progress." }],
      skills: [
        { id: 1, name: "CSS", percent: 85 },
        { id: 2, name: "Javascript", percent: 79 },
        { id: 3, name: "React", percent: 71 },
      ],
    },
    {
      id: 3,
      firstName: "Алмаз",
      lastName: "Кубакаев",
      age: 51,
      image: "90685957.jpeg",
      info: "Живу в Бишкеке. Люблю читать книги. Нравится отдых на природе.",
      position: "Frontend Development",
      socials: [
        { id: 1, name: "GitHub", link: "https://github.com/Almaz2607" },
      ],
      impacts: [{ id: 1, name: "Добавил компонент breadCrumbs." }],
      skills: [
        { id: 1, name: "CSS", percent: 84 },
        { id: 2, name: "Javascript", percent: 77 },
        { id: 3, name: "React", percent: 75 },
      ],
    },
  ],
};
export default db;
