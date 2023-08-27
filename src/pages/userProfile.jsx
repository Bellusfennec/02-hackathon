import MainLayout from "./mainLayout";
import Slider from "../common/components/slider";

const UserProfile = () => {
  const images = [
    "https://andrey999k.github.io/Portfolio/build/images/wild-acation-1440.webp",
    "https://andrey999k.github.io/Portfolio/build/images/newchurchill.ru-1440.webp",
    "https://andrey999k.github.io/Portfolio/build/images/news-page-1440.webp",
    "https://andrey999k.github.io/Portfolio/build/images/yoga-1440.webp",
    "https://andrey999k.github.io/Portfolio/build/images/delivery-food-1440.jpg",
    "https://andrey999k.github.io/Portfolio/build/images/batman-promo-1440.jpg"
  ];
  return <MainLayout><Slider images={images} duration={2000} /></MainLayout>;
};
export default UserProfile;
