// 🔸 Lazy : Fonction React pour charger des composants à la demande ( optimisation )
// 🔸 Suspense : Fonction React pour afficher un état de chargement pendant le chargement des composants
// 🔸 useRoute : React Router, permet de définir les routes de manière déclarative et dynamique
// 🔸 Navigate : Permet de rediriger vers une route spécifique dans le navigateur

// 💡 Définir les routes principales de l'application en utilisant useRoutes de React Router
// 💡 `DashboardLayout` : Enveloppe les routes protégées pour inclure le menu latéral

import { lazy, Suspense } from 'react';
import { Outlet, useRoutes, Navigate } from 'react-router-dom';
import { ReactNode } from 'react';
// import { useAuth } from '../hooks/useAuth';

import DashBoardLayout from '../layouts/dashboard/DashBoardLayout';
import AuthLayout from '../layouts/authentification/AuthLayout';

export const IndexPage = lazy(() => import('../pages/IndexPage'));
export const LoginPage = lazy(() => import('../pages/LoginPage'));
export const HearthPage = lazy(() => import('../pages/HearthPage'));
export const LungPage = lazy(() => import('../pages/LungPage'));
export const UsersPage = lazy(() => import('../pages/UsersPage'));
export const ProfilePage = lazy(() => import('../pages/ProfilePage'));
export const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

// --------------------------------------------------------------------------------------

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

const Router = () => {
  const routes = useRoutes([
    {
      element: (
        <ProtectedRoute>
          <DashBoardLayout>
            <Suspense>
              <Outlet />
            </Suspense>
          </DashBoardLayout>
        </ProtectedRoute>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'hearth', element: <HearthPage /> },
        { path: 'lung', element: <LungPage /> },
        {
          path: 'users',
          children: [
            { element: <UsersPage />, index: true },
            // { path: 'list', element: <UsersListPage /> },
            // { path: 'edit', element: <UsersEditPage /> },
          ],
        },
      ],
    },
    {
      path: 'login',
      element: (
        <AuthLayout>
          <Suspense>
            <LoginPage />
          </Suspense>
        </AuthLayout>
      ),
    },
    {
      path: 'not-found',
      element: (
        <Suspense>
          <NotFoundPage />
        </Suspense>
      ),
    },
    {
      path: '*',
      element: <Navigate to="/not-found" replace />,
    },
  ]);

  return routes;
};

export default Router;
