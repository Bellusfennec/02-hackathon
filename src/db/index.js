const db = {
  partners: [
    {
      id: 1,
      firstName: "Нияз",
      lastName: "Зайцев",
      age: 31,
      image: "89993415.jpeg",
      info: "Живу в Казани. Люблю компьютерные игры. Иногда бегаю.",
      position: { name: "Team Leader", color: "red" },
      socials: [
        { id: 1, name: "GitHub", link: "https://github.com/Bellusfennec" },
        { id: 2, name: "VK", link: "https://vk.com/bellusfennec" },
      ],
      impacts: [
        { id: 1, name: "layouts" },
        { id: 2, name: "pages" },
        { id: 3, name: "navbar." },
        { id: 4, name: "loading." },
        { id: 5, name: "card" },
        { id: 6, name: "localStorageService" },
        { id: 7, name: "useFavorites." },
        { id: 8, name: "badge." },
      ],
      skills: [
        { id: 1, name: "CSS", percent: 85, color: "red" },
        { id: 2, name: "Javascript", percent: 70, color: "yellow" },
        { id: 3, name: "React", percent: 75, color: "blue" },
      ],
    },
    {
      id: 2,
      firstName: "Андрей",
      lastName: "Кутузов",
      age: 18,
      image: "52581965.jpeg",
      info: "О себе (2-3 предложения)",
      position: { name: "Frontend Developer", color: "indigo" },
      socials: [
        { id: 1, name: "GitHub", link: "https://github.com/Andrey999K" },
      ],
      impacts: [{ id: 1, name: "Добавил компонент progress." }],
      skills: [
        { id: 1, name: "CSS", percent: 85, color: "" },
        { id: 2, name: "Javascript", percent: 79, color: "" },
        { id: 3, name: "React", percent: 71, color: "" },
      ],
    },
    {
      id: 3,
      firstName: "Алмаз",
      lastName: "Кубакаев",
      age: 18,
      image: "90685957.jpeg",
      info: "О себе (2-3 предложения)",
      position: { name: "Frontend Developer", color: "indigo" },
      socials: [
        { id: 1, name: "GitHub", link: "https://github.com/Almaz2607" },
      ],
      impacts: [{ id: 1, name: "Добавил компонент breadCrumbs." }],
      skills: [
        { id: 1, name: "CSS", percent: 84, color: "" },
        { id: 2, name: "Javascript", percent: 77, color: "" },
        { id: 3, name: "React", percent: 75, color: "" },
      ],
    },
  ],
};
export default db;
