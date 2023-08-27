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
        { id: 2, name: "VK", link: "https://vk.com/bellusfennec" }
      ],
      impacts: [
        { id: 1, name: "layouts" },
        { id: 2, name: "pages" },
        { id: 3, name: "navbar" },
        { id: 4, name: "loading" },
        { id: 5, name: "card" },
        { id: 6, name: "localStorageService" },
        { id: 7, name: "useFavorites" },
        { id: 8, name: "badge" }
      ],
      skills: [
        {
          id: 1,
          name: "CSS",
          percent: 85,
          darkColor: "#7309AA",
          lightColor: "#E4B3FC"
        },
        {
          id: 2,
          name: "Javascript",
          percent: 75,
          darkColor: "#FFC602FF",
          lightColor: "#FDF1C1"
        },
        {
          id: 3,
          name: "React",
          percent: 70,
          darkColor: "#0A67A3",
          lightColor: "#B9C2FC"
        }
      ],
      portfolio: ["/images/1.png", "/images/2.png", "/images/3.png"]
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
        { id: 1, name: "GitHub", link: "https://github.com/Andrey999K" }
      ],
      impacts: [
        { id: 1, name: "progress" },
        { id: 2, name: "slider" }
      ],
      skills: [
        {
          id: 1,
          name: "CSS",
          percent: 90,
          darkColor: "#7309AA",
          lightColor: "#E4B3FC"
        },
        {
          id: 2,
          name: "Javascript",
          percent: 80,
          darkColor: "#FFC602FF",
          lightColor: "#FDF1C1"
        },
        {
          id: 3,
          name: "React",
          percent: 70,
          darkColor: "#0A67A3",
          lightColor: "#B9C2FC"
        }
      ],
      portfolio: [
        "https://andrey999k.github.io/Portfolio/build/images/wild-acation-1440.webp",
        "https://andrey999k.github.io/Portfolio/build/images/newchurchill.ru-1440.webp",
        "https://andrey999k.github.io/Portfolio/build/images/news-page-1440.webp",
        "https://andrey999k.github.io/Portfolio/build/images/yoga-1440.webp",
        "https://andrey999k.github.io/Portfolio/build/images/delivery-food-1440.jpg",
        "https://andrey999k.github.io/Portfolio/build/images/batman-promo-1440.jpg"
      ]
    },
    {
      id: 3,
      firstName: "Алмаз",
      lastName: "Кубакаев",
      age: 51,
      image: "90685957.jpeg",
      info: "Живу в Бишкеке. Люблю читать книги. Нравится отдых на природе.",
      position: { name: "Frontend Developer", color: "indigo" },
      socials: [
        { id: 1, name: "GitHub", link: "https://github.com/Almaz2607" }
      ],
      impacts: [{ id: 1, name: "breadCrumbs" }],
      skills: [
        {
          id: 1,
          name: "CSS",
          percent: 70,
          darkColor: "#7309AA",
          lightColor: "#E4B3FC"
        },
        {
          id: 2,
          name: "Javascript",
          percent: 80,
          darkColor: "#FFC602FF",
          lightColor: "#FDF1C1"
        },
        {
          id: 3,
          name: "React",
          percent: 80,
          darkColor: "#0A67A3",
          lightColor: "#B9C2FC"
        }
      ],
      portfolio: []
    }
  ]
};
export default db;
