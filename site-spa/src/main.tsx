import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./globals.css"
import Error from './routes/Error/index.tsx'
import Home from './routes/Home/index.tsx'
import Integrantes from './routes/Integrantes/index.tsx'
import Sobre from './routes/Sobre/index.tsx'
import Faq from './routes/Faq/index.tsx'
import Login from './routes/Login/index.tsx'
import Cadastro from './routes/Cadastro/index.tsx'
import Trilhas from './routes/Trilhas/index.tsx'


const router = createBrowserRouter([
  {path: "/", element: <App/>, errorElement: <Error/>, children: [
    {path: "/", element: <Home/>},
    {path: "/integrantes", element: <Integrantes/>},
    {path: "/sobre", element: <Sobre/>},
    {path: "/faq", element: <Faq/>},
    {path: "/login", element: <Login/>},
    {path: "cadastro", element: <Cadastro/>},
    {path: "trilhas", element: <Trilhas/>}
  ]}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
