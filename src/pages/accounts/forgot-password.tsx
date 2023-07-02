import { ForgotPasswordPage } from "@/features/auths";
import { MainLayout } from "@/layouts/Main";

const ForgotPassword = () => {
  return <ForgotPasswordPage />;
};

ForgotPassword.getLayout = (page: React.ReactElement) => {
  return <MainLayout plainBg>{page}</MainLayout>;
};

export default ForgotPassword;
