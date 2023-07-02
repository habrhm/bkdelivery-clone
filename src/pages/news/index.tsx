import { NewsPage } from "@/features/news";
import { MainLayout } from "@/layouts/Main";

const News = () => {
  return <NewsPage />;
};

News.getLayout = (page: React.ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default News;
