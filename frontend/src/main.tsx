import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";

import App from "./App.tsx";
import "./index.css";




ReactDOM.createRoot(document.getElementById("root")!).render(
   
  <BrowserRouter>
    <Suspense>
      
      <App />
    </Suspense>
  </BrowserRouter>

);
