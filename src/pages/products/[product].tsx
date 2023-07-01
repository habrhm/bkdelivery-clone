import { ProductsPage } from "@/features/products";
import { MainLayout } from "@/layouts/Main";
import { MenuLayout } from "@/layouts/Menu";

const Menu = () => {
  return <ProductsPage />;
};

Menu.getLayout = (page: React.ReactElement) => {
  return (
    <MainLayout plainBg>
      <MenuLayout>{page}</MenuLayout>
    </MainLayout>
  );
};

export default Menu;
