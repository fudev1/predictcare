// 💡 Hook personnalisé pour récupérer le chemin courant de l'URL
// => Simplifie l'accès au chemin courant de l'URL avec l'optimisation du hook useMemo


import { useMemo } from "react";
import { useLocation } from "react-router-dom";

const usePathname = () => {
    const { pathname } = useLocation();
    return useMemo(() => pathname, [pathname]);
}

export { usePathname };