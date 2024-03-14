import { AuthContext } from "@/provider/AuthProvider";

const useAuthentication = () => {
  const { user }: any = AuthContext();

  const userInfo = user?.user || null;

  return userInfo;
};

export default useAuthentication;
