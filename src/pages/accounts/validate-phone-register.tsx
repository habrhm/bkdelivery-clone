import { VerifyPhonePage } from "@/features/auths";
import { MainLayout } from "@/layouts/Main";

const VerifyPhone = () => {
  return <VerifyPhonePage />;
};

VerifyPhone.getLayout = (page: React.ReactElement) => {
  return <MainLayout plainBg>{page}</MainLayout>;
};

export default VerifyPhone;
