import MainLayout from "./mainLayout";
import Progress from "../common/components/progress";

const UserProfile = () => {
  return <MainLayout><Progress percent={35} name="CSS" type="circle" size="sm" duration={2000}/></MainLayout>;
};
export default UserProfile;
