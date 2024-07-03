// 💡 Hook personnalisé pour pouvoir utiliser les fonctions de navigation dans plusieurs composants

import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { RouterLinkProps } from "../../interfaces/router-link-props";

const useRouter = () => {
    const navigate = useNavigate();

    const router = useMemo(() => ({
        back: () => navigate(-1),
        forward: () => navigate(1),
        reload: () => navigate(0),
        push: (href: RouterLinkProps) => navigate(href.path),
        replace: (href: RouterLinkProps) => navigate(href.path, { replace: true }),
    }), [navigate]);

    return router;
}

export { useRouter };


// --------------------------------------------------------------------------------------

// 🦁 Exemple d'utilisation
// const MyComponent = () => {
//     const router = useRouter();
//     return (
//         <div>
//             <button onClick={() => router.back()}>Back</button>
//             <button onClick={() => router.forward()}>Forward</button>
//             <button onClick={() => router.reload()}>Reload</button>
//             <button onClick={() => router.push({ href: "/users", path: "/users" })}>Push</button>
//             <button onClick={() => router.replace({ href: "/users", path: "/users" })}>Replace</button>
//         </div>
//     )
// }

// --------------------------------------------------------------------------------------

// 🦁 Exemple d'utilisation SANS le hook useRouter
// const MyComponent = () => {
//     const navigate = useNavigate();
//     const goBack = () => navigate(-1);
//     const goForward = () => navigate(1);
//     const reload = () => navigate(0);
//     const push = () => navigate("/users");
//     const replace = () => navigate("/users", { replace: true });
//
//     return (
//         <div>
//             <button onClick={goBack}>Back</button>
//             <button onClick={goForward}>Forward</button>
//             <button onClick={reload}>Reload</button>
//             <button onClick={push}>Push</button>
//             <button onClick={replace}>Replace</button>
//         </div>
//     )
// }


