// 💡 Composant personnalisé pour les liens de navigation
// 💡 Facilite la navigation entre les différentes pages de l'application


import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { RouterLinkProps } from "../../interfaces/router-link-props";


const RouterLink = forwardRef<HTMLAnchorElement, RouterLinkProps>(({ href, ...other }, ref) => (
    <Link ref={ref} to={href} {...other} />
));

export default RouterLink;