import { HomePage } from "@/features/home";
import { MainLayout } from "@/layouts/Main";

const Landing = () => {
  return <HomePage />;
};

Landing.getLayout = (page: React.ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Landing;
