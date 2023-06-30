import { MenusPage } from "@/features/menus";
import { MainLayout } from "@/layouts/Main";
import { MenuLayout } from "@/layouts/Menu";

const Menu = () => {
  return <MenusPage />;
};

Menu.getLayout = (page: React.ReactElement) => {
  return (
    <MainLayout>
      <MenuLayout>{page}</MenuLayout>
    </MainLayout>
  );
};

export default Menu;
