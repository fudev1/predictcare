// 🚩 Liste de lien de navigation qui seront affichés dans le menu => /routes/routes.tsx
// 💡 const nameConst = (param) => value;
// 💡 const nameConst = (param) => { return value; };

import SpaceDashboardTwoToneIcon from "@mui/icons-material/SpaceDashboardTwoTone";

export const navLinks = [
  {
    title: "dashboard",
    path: "/",
    icon: SpaceDashboardTwoToneIcon,
  },
  {
    title: "heart disease",
    path: "/heart",
    icon: SpaceDashboardTwoToneIcon,
  },
  {
    title: "lung",
    path: "/lung",
    icon: SpaceDashboardTwoToneIcon,
  },
  {
    title: "about",
    path: "/about",
    icon: SpaceDashboardTwoToneIcon,
  },
];
