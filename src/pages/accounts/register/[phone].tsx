import { RegisterPage } from "@/features/auths";
import { MainLayout } from "@/layouts/Main";

const Register = () => {
  return <RegisterPage />;
};

Register.getLayout = (page: React.ReactElement) => {
  return <MainLayout plainBg>{page}</MainLayout>;
};

export default Register;
