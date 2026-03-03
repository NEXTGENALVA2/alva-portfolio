import {
  RouterProvider,
} from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from "./routes/Router.jsx";
import { fetchAndCacheProjects } from "./lib/cache.js";

// Preload projects data on app start for instant navigation
fetchAndCacheProjects().catch(err => console.error("Failed to preload projects:", err));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
