import type { Mascota } from "@/types/mascotas";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MascotasEditar() {
  /*
                  En React:
                  - useEffect: cargar datos de la mascota (GET)
                  - useState: controlar los campos del formulario
                  - onSubmit: lanzar PUT con los datos actualizados

   */
  const [form,setForm] = useState<Mascota>({
     numeroChip: "",
        nombre: "",
        tipo: "",
        raza: "",
        edad: 0,
        pesoKg:0,
  })

  const {numeroChip} = useParams();
  const [errorPost,setErrorPost] = useState<boolean>(false);
  const [errorFetch,setErrorFetch] = useState<boolean>(false);
  const [mensajeError,setMensajeError] = useState<string>("");
  const[mensajeErrorPost,setMensajeErrorPost] = useState<string>("");

  useEffect(() => {
    console.log('cargando mascotas para editar...');
    setErrorFetch(false)
    fetch(`http://localhost:3000/api/mascotas/${numeroChip}`,{  //peticion a la api
      method: "GET",
    })
    .then(response =>{ 
        if(!response.ok){
           return response.json().then(errorData => {
                const mensaje = errorData.error || errorData.message || "Error desconocido del servidor";
            throw new Error(mensaje);
           })
        }
        return response.json()})
    .then((res) => {
      setForm(res);
    }).catch((error) => {
      console.error('Error fetching mascotas:', error);
      setMensajeError(error.message)
      console.log(error.message)
     setErrorFetch(true)
    });
  }, [numeroChip]);


 

  const handlEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorPost(false);
    try{
        const response = await fetch(`http://localhost:3000/api/mascotas/${numeroChip}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(form),
    });
    if(!response.ok){
        const errorData = await response.json();
        throw new Error(errorData.error)
    }
    alert(`Mascotas ${form.numeroChip} ha sido editado`)
    window.location.href = '/';
    }
    catch(error){
        console.error(error)
        setErrorPost(true)
        setMensajeErrorPost(error.message)
    }
  };

 
  const handleTipoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, tipo: e.target.value , raza:""}));
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => { //por cada vez que se produzva uno de los eventos, se lanza lo de abajo
    const { name, value } = e.target; //basicamente guardamos en name y value el valor del objeto cuando se produce el evento
    setForm(prev => ({ ...prev, [name]: value })); 
  };
  
    return (
        <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-6 grid gap-6 lg:grid-cols-[2fr,1fr]">

            <div className="md:col-span-2 flex items-center justify-between">
              
                <button
                        type="button"
                        className="inline-flex items-center text-xs font-medium text-slate-600 hover:text-slate-900"
                >
                  <a href="/" > ← Volver al listado</a> 
                </button>
            </div>

        
            

            
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 md:p-5">
                <div className="mb-4">
                    <h2 className="text-base font-semibold text-slate-900">
                        Datos de la mascota
                    </h2>
                </div>

                {errorFetch ? 
                (<section className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 md:p-5">
                <div
                        id="error-message"
                        className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700"
                >
                    <strong>Error de carga: </strong> {mensajeError}
                </div>
            </section>):(
               <form
                        id="mascota-form"
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                    
                    <div className="flex flex-col gap-1">
                        <label
                                htmlFor="f-numero-chip"
                                className="text-xs font-medium text-slate-600"
                        >
                            Nº de chip
                        </label>
                        <input
                                id="f-numero-chip"
                                name="numeroChip"
                                type="text"
                                value={form.numeroChip}
                                onChange={handleChange}
                                disabled
                              
                                className="rounded-lg border border-slate-300 bg-slate-100 px-3 py-1.5 text-sm text-slate-700"
                        />
                        <p className="text-[11px] text-slate-500">
                            El número de chip es la clave de la mascota y no se puede cambiar.
                        </p>
                    </div>

                 
                    <div className="flex flex-col gap-1">
                        <label
                                htmlFor="f-nombre"
                                className="text-xs font-medium text-slate-600"
                        >
                            Nombre
                        </label>
                        <input
                                id="f-nombre"
                                name="nombre"
                                type="text"
                                placeholder="Luna, Toby..."
                                value={form.nombre}
                                onChange={handleChange}
                                className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                    </div>

       
                    <div className="flex flex-col gap-1">
                        <label
                                htmlFor="f-tipo"
                                className="text-xs font-medium text-slate-600"
                        >
                            Tipo
                        </label>
                        <select
                                id="f-tipo"
                                name="tipo"
                                value={form.tipo}
                                onChange={handleTipoChange}
                                className={`rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring focus:ring-blue-200`}
                        >
                            <option>perro</option>
                            <option>gato</option>
                        </select>
                    </div>

              
                    <div className="flex flex-col gap-1">
                        <label
                                htmlFor="f-raza"
                                className="text-xs font-medium text-slate-600"
                        >
                            Raza
                        </label>
                        <input
                                id="f-raza"
                                name="raza"
                                type="text"
                                placeholder="Mestizo, Labrador..."
                                value={form.raza}
                                onChange={handleChange}
                                className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                    </div>

                  
                    <div className="flex flex-col gap-1">
                        <label
                                htmlFor="f-edad"
                                className="text-xs font-medium text-slate-600"
                        >
                            Edad (años)
                        </label>
                        <input
                                id="f-edad"
                                name="edad"
                                type="number"
                                min="0"
                                max="30"
                                value={form.edad}
                                onChange={handleChange}
                                className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                    </div>

               
                    <div className="flex flex-col gap-1">
                        <label
                                htmlFor="f-peso"
                                className="text-xs font-medium text-slate-600"
                        >
                            Peso (kg)
                        </label>
                        <input
                                id="f-peso"
                                name="pesoKg"
                                type="number"
                                min="0"
                                step="0.1"
                                value={form.pesoKg}
                                onChange={handleChange}
                                className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                    </div>

                    
                    {errorPost ? (
                        <div className="md:col-span-2">
                       
                        <div
                                id="form-error"
                                className="mb-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700"
                        >

                            {mensajeErrorPost}
                        </div>

                        <div
                                id="form-success"
                                className="hidden mb-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-emerald-700"
                        >
                
                        </div>
                    </div>
                    ):(
                       <div></div> 
                    )}

                   
                    <div
                            id="error-message-form"
                            className="hidden mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700 md:col-span-2"
                    >
                        edad debe ser un número válido
                    </div>

                 
                    <div className="md:col-span-2 flex items-center justify-between">
                      

                        <button
                                type="submit"
                                onClick={handlEdit}
                                className="inline-flex items-center rounded-full bg-blue-600 px-4 py-1.5 text-xs font-medium text-white hover:bg-blue-700"
                        >
                            <a href="/">Guardar cambios</a>
                        </button>
                    </div>
                </form>
            )
            }
                
            </section>

            
            <aside className="space-y-4">
                <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
                    <h2 className="text-sm font-semibold text-slate-900 mb-2">
                        Endpoints utilizados
                    </h2>
                    <div className="space-y-2 text-xs text-slate-700">
                        <div>
                            <div className="font-medium text-slate-800">
                                Cargar datos de la mascota
                            </div>
                            <code
                                    className="mt-0.5 inline-block rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[11px]"
                            >
                                GET /api/mascotas/{}
                            </code>
                        </div>
                        <div>
                            <div className="font-medium text-slate-800">
                                Guardar cambios
                            </div>
                            <code
                                    className="mt-0.5 inline-block rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[11px]"
                            >
                                PUT /api/mascotas/{}
                            </code>
                        </div>
                        <div className="mt-2">
                            <div className="font-medium text-slate-800">
                                Posibles errores
                            </div>
                            <ul className="mt-1 list-disc pl-4 text-[11px] text-slate-600">
                                <li><code>404</code> → mascota no encontrada</li>
                                <li><code>400</code> → datos no válidos</li>
                                <li><code>500</code> → error actualizando mascota</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </aside>
        </div>
    </main>
    );
}