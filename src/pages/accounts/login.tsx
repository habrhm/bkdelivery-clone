import { LoginPage } from "@/features/auths";
import { MainLayout } from "@/layouts/Main";

const Login = () => {
  return <LoginPage />;
};

Login.getLayout = (page: React.ReactElement) => {
  return <MainLayout plainBg>{page}</MainLayout>;
};

export default Login;
