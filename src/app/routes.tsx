import { createBrowserRouter, Navigate } from "react-router";
import Layout from "./pages/Layout";
import NewNote from "./pages/NewNote";
import EditorShell from "./pages/EditorShell";
import EditorDeTexto from "./pages/tabs/EditorDeTexto";
import InfoBasica from "./pages/tabs/InfoBasica";
import ImagenNota from "./pages/tabs/ImagenNota";
import Archivo from "./pages/tabs/Archivo";
import Galeria from "./pages/tabs/Galeria";
import ContenidoRelacionado from "./pages/tabs/ContenidoRelacionado";
import VideoTab from "./pages/tabs/VideoTab";
import MobileEditor from "./pages/MobileEditor";

export const router = createBrowserRouter([
  { path: "/mobile", Component: MobileEditor },
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
          { path: "info", Component: InfoBasica },
          { path: "imagen", Component: ImagenNota },
          { path: "archivo", Component: Archivo },
          { path: "galeria", Component: Galeria },
          { path: "relacionado", Component: ContenidoRelacionado },
          { path: "video", Component: VideoTab },
        ],
      },
    ],
  },
]);
