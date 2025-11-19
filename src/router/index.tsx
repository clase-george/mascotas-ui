import {createBrowserRouter} from "react-router-dom";
import PageNotFound from "@/pages/PageNotFound";
import ListadoMascotas from "@/pages/ListadoMascotas.tsx";
import MascotasEditar from "@/pages/MascotasEditar";
import MascotasCrear from "@/pages/MascotasCrear";


export const router = createBrowserRouter([
    {path: "/", element:<ListadoMascotas/> },
    {path: "*", element: <PageNotFound/>},
    {path: "/mascotas/editar/:numeroChip", element: <MascotasEditar/>},
    {path: "/mascotas/crear/", element: <MascotasCrear/>}
]);