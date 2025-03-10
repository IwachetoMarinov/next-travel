import { NavigationInterface } from "@/interfaces/NavigationInterface";

export const LOGIN_ROUTE = "/login";
export const REGISTER_ROUTE = "/register";
export const PROFILE_ROUTE = "/profile";
export const HOME_ROUTE = "/";
export const ABOUT_ROUTE = "/about";
export const EVENTS_ROUTE = "/events";
export const NEWS_ROUTE = "/news";
export const BLOG_ROUTE = "/blog";
export const PRIVACY_POLICY_ROUTE = "/privacy-policy";
export const TERMS_OF_SERVICE_ROUTE = "/terms-of-service";
export const FAQ_ROUTE = "/faq";

export const navigation: NavigationInterface[] = [
  {
    title: "Начало",
    href: HOME_ROUTE,
  },
  {
    title: "За нас",
    href: ABOUT_ROUTE,
  },
  {
    title: "Събития",
    href: EVENTS_ROUTE,
  },
  {
    title: "Новини",
    href: NEWS_ROUTE,
  },
  {
    title: "Блог",
    href: BLOG_ROUTE,
  },
  {
    title: "Профил",
    href: PROFILE_ROUTE,
  },
];

export const footerNavigation: NavigationInterface[] = [
  {
    title: "Начало",
    href: HOME_ROUTE,
  },
  {
    title: "Политика за поверителност",
    href: PRIVACY_POLICY_ROUTE,
  },
  {
    title: "Условия за ползване",
    href: TERMS_OF_SERVICE_ROUTE,
  },
  {
    title: "FAQ",
    href: FAQ_ROUTE,
  },
];
