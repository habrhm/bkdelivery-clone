import { NewsPage } from "@/features/news";
import { MainLayout } from "@/layouts/Main";

const Home = () => {
  return <NewsPage />;
};

Home.getLayout = (page: React.ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
