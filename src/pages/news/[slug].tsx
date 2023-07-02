import { NewsDetailsPage } from "@/features/news";
import { MainLayout } from "@/layouts/Main";

const NewsDetails = () => {
  return <NewsDetailsPage />;
};

NewsDetails.getLayout = (page: React.ReactElement) => {
  return <MainLayout plainBg>{page}</MainLayout>;
};

export default NewsDetails;
