import { HomePage } from "@/features/home";
import { MainLayout } from "@/layouts/Main";

const Home = () => {
  return <HomePage />;
};

Home.getLayout = (page: React.ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
