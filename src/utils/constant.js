import {
  faUserAlt,
  faBell,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export const NAVIGATION_USER_DROPDOWN = [
  {
    id: "user_01",
    title: "Log in",
    slug: "/auth/login",
    icon: faUserAlt,
    code: "login",
    requiresAuth: false, // show only if NOT logged in
  },
  {
    id: "user_02",
    title: "Notification",
    slug: "/notification",
    icon: faBell,
    code: "notification",
    requiresAuth: true, // show only if logged in
  },
  {
    id: "user_03",
    title: "Logout",
    slug: "/logout",
    icon: faArrowRightFromBracket,
    code: "logout",
    requiresAuth: true, // show only if logged in
  },
];
