import { CartPage } from "@/features/cart";
import { MainLayout } from "@/layouts/Main";

const Menu = () => {
  return <CartPage />;
};

Menu.getLayout = (page: React.ReactElement) => {
  return <MainLayout plainBg>{page}</MainLayout>;
};

export default Menu;
