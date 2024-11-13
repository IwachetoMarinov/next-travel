"use client";
import { LOGIN_ROUTE, PROFILE_ROUTE, REGISTER_ROUTE } from "@/constants/routes";
import { AuthContext } from "@/provider/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const GUEST_ROUTES = [LOGIN_ROUTE, REGISTER_ROUTE];

const useAuthentication = () => {
  const { user }: any = AuthContext();
  console.log("User Info ", user);

  const userInfo = user?.user || null;
  const router = useRouter();
  const currentRoute = window.location.pathname;

  useEffect(() => {
    console.log("User Info ", userInfo);

    // if(!userInfo && !GUEST_ROUTES.includes(currentRoute)){
    //     router.push(LOGIN_ROUTE)
    // }

    // if(userInfo && GUEST_ROUTES.includes(currentRoute)){
    //     router.push(PROFILE_ROUTE);
    // }
  }, []);

  return { user: userInfo };
};

export default useAuthentication;
