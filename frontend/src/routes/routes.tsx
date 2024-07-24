import { Navigate, useRoutes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Heart from '../pages/Heart';
import DashBoard from '../pages/DashBoard';
import Lung from '../pages/Lung';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import About from '../pages/About';


const AppRoutes = () => {
    return useRoutes([
      {
        element: <Layout /> ,
        children: [
          { element: <DashBoard />, index: true },
          { path: 'heart', element: <Heart /> },
          { path: 'lung', element: <Lung /> },
          { path: 'about', element: <About /> },
        ],
      },
      { path: 'login', element: <Login /> },
      { path: '404', element: <NotFound /> },
      { path: '*', element: <Navigate to="/404" replace /> },
    ]);
  };
  
export default AppRoutes;