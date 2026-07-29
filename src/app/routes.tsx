import { createBrowserRouter, Navigate } from "react-router";
import Layout from "./pages/Layout";
import NewNote from "./pages/NewNote";
import EditorShell from "./pages/EditorShell";
import EditorDeTexto from "./pages/tabs/EditorDeTexto";
import PlaceholderTab from "./pages/tabs/PlaceholderTab";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: NewNote },
      {
        path: "editor",
        Component: EditorShell,
        children: [
          { index: true, element: <Navigate to="texto" replace /> },
          { path: "texto", Component: EditorDeTexto },
          { path: "info", element: <PlaceholderTab label="Info. Básica" /> },
          { path: "imagen", element: <PlaceholderTab label="Imagen de la Nota" /> },
          { path: "archivo", element: <PlaceholderTab label="Archivo" /> },
          { path: "galeria", element: <PlaceholderTab label="Galería" /> },
          { path: "relacionado", element: <PlaceholderTab label="Contenido Relacionado" /> },
          { path: "video", element: <PlaceholderTab label="Video" /> },
        ],
      },
    ],
  },
]);
