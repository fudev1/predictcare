// 🔸 Lazy : Fonction React pour charger des composants à la demande ( optimisation )
// 🔸 Suspense : Fonction React pour afficher un état de chargement pendant le chargement des composants
// 🔸 useRoute : React Router, permet de définir les routes de manière déclarative et dynamique
// 🔸 Navigate : Permet de rediriger vers une route spécifique dans le navigateur

// 💡 Définir les routes principales de l'application en utilisant useRoutes de React Router
// 💡 `DashboardLayout` : Enveloppe les routes protégées pour inclure le menu latéral


import { lazy, Suspense } from "react";
import { Outlet, useRoutes, Navigate } from "react-router-dom";

import DashBoardLayout from "../layouts/DashBoardLayout";

export const IndexPage = lazy(() => import('../pages/IndexPage'));
export const LoginPage = lazy(() => import('../pages/LoginPage'));
export const HearthPage = lazy(() => import('../pages/HearthPage'));
export const LungPage = lazy(() => import('../pages/LungPage'));
export const UsersPage = lazy(() => import('../pages/UsersPage'));
export const ProfilePage = lazy(() => import('../pages/ProfilePage'));
export const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

// --------------------------------------------------------------------------------------

const Router = () => {
    const routes = useRoutes([
        {
            element: (
                <DashBoardLayout>
                    <Suspense>
                        <Outlet />
                    </Suspense>
                </DashBoardLayout>
            ),
            children: [
                {element: <IndexPage />, index: true},
                {path: 'hearth', element: <HearthPage />},
                {path: 'lung', element: <LungPage />},
                {path: 'users', element: <UsersPage />},
            ],
        },
        {
            path: 'login',
            element: <LoginPage />,
        }, 
        {
            path: 'not-found',
            element: <NotFoundPage />,
        },
        {
            path: '*',
            element: <Navigate to="/not-found" replace />,
        }
    ])

    return routes;
}

export default Router;