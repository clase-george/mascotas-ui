import {createBrowserRouter} from "react-router-dom";
import PageNotFound from "@/pages/PageNotFound";
import ListadoMascotas from "@/pages/ListadoMascotas.tsx";
import MascotasEditar from "@/pages/MascotasEditar";


export const router = createBrowserRouter([
    {path: "/", element:<ListadoMascotas/> },
    {path: "*", element: <PageNotFound/>},
    {path: "/mascotas/editar/", element: <MascotasEditar/>},
]);