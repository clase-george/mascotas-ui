
import { useState } from "react";

export default function MascotasCrear(){
    const[formData, setFormData] = useState({
        numeroChip: "",
        nombre: "",
        tipo: "",
        raza: "",
        edad: 0,
        pesoKg:0,
    })
    

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const mascotaToSend = {
            numeroChip: formData.numeroChip,
            nombre: formData.nombre,
            tipo: formData.tipo,
            raza: formData.raza,
            edad: Number(formData.edad),
            pesoKg: Number(formData.pesoKg)
        }

        await fetch("http://localhost:3000/api/mascotas",{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
        },
         body: JSON.stringify(mascotaToSend)
        });
        alert("artista creado");
    };

   
     const handleReset = () => {
        setFormData({
        numeroChip: "",
        nombre: "",
        tipo: "",
        raza: "",
        edad: 0,
        pesoKg:0,
        })
         
      }
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => { //por cada vez que se produzva uno de los eventos, se lanza lo de abajo
            const { name, value } = e.target; //basicamente guardamos en name y value el valor del objeto cuando se produce el evento
            setFormData(prev => ({ ...prev, [name]: value }));
      }

   
    /*En React:
        - useState: controlar los campos del formulario
        - onSubmit: lanzar POST /api/mascotas
    */
    return(
        <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-6 grid gap-6 lg:grid-cols-[2fr,1fr]">
          
            <div className="md:col-span-2 flex items-center justify-between">
               
                <button
                        type="button"
                        className="inline-flex items-center text-xs font-medium text-slate-600 hover:text-slate-900"
                >
                  <a href="/">← Volver al listado</a>  
                </button>
            </div>

          
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 md:p-5">
                <div className="mb-4">
                    <h2 className="text-base font-semibold text-slate-900">
                        Nueva mascota
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                        Rellena los datos y guarda para crear la mascota en el sistema.
                    </p>
                </div>

                
                  
               
                <form
                        id="mascota-form"
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                 
                    <div className="flex flex-col gap-1">
                        <label
                                htmlFor="f-numero-chip"
                                className="text-xs font-medium text-slate-600"
                        >
                            Nº de chip *
                        </label>
                        <input
                                id="f-numero-chip"
                                name="numeroChip"
                                value={formData.numeroChip}
                                onChange={handleChange}
                                type="text"
                                placeholder="CH123456"
                                className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                        <p className="text-[11px] text-slate-500">
                            El número de chip será la clave de la mascota. Debe ser único.
                        </p>
                    </div>

                   
                    <div className="flex flex-col gap-1">
                        <label
                                htmlFor="f-nombre"
                                className="text-xs font-medium text-slate-600"
                        >
                            Nombre *
                        </label>
                        <input
                                id="f-nombre"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                type="text"
                                placeholder="Luna, Toby..."
                                className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                    </div>

                    
                    <div className="flex flex-col gap-1">
                        <label
                                htmlFor="f-tipo"
                                className="text-xs font-medium text-slate-600"
                        >
                            Tipo *
                        </label>
                        <select
                                id="f-tipo"
                                name="tipo"
                                value={formData.tipo}
                                onChange={handleChange}
                                className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                        >
                            <option value="">Selecciona un tipo</option>
                            <option value="perro">Perro</option>
                            <option value="gato">Gato</option>
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
                                value={formData.raza}
                                onChange={handleChange}
                                type="text"
                                placeholder="Mestizo, Labrador..."
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
                                value={formData.edad}
                                onChange={handleChange}
                                min="0"
                                max="30"
                                placeholder="3"
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
                                value={formData.pesoKg}
                                onChange={handleChange}
                                type="number"
                                min="0"
                                step="0.1"
                                placeholder="18.5"
                                className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                    </div>

                   
                    <div
                            id="error-message-form"
                            className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700 md:col-span-2"
                    >
                        numeroChip, nombre y tipo son obligatorios
                    </div>

                    
                    <div className="md:col-span-2 flex items-center justify-between">
                        

                        <button
                                type="submit"
                                onClick={handleSubmit}
                                className="inline-flex items-center rounded-full bg-blue-600 px-4 py-1.5 text-xs font-medium text-white hover:bg-blue-700"
                        >
                            Crear mascota
                        </button>
                        <button
                                
                                onClick={handleReset}
                                className="inline-flex items-center rounded-full bg-red-600 px-4 py-1.5 text-xs font-medium text-white hover:bg-red-700"
                        >
                           Reset
                        </button>
                    </div>
                </form>
            </section>

           
            <aside className="space-y-4">
                <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
                    <h2 className="text-sm font-semibold text-slate-900 mb-2">
                        Endpoints utilizados
                    </h2>
                    <div className="space-y-2 text-xs text-slate-700">
                        <div>
                            <div className="font-medium text-slate-800">
                                Crear mascota
                            </div>
                            <code
                                    className="mt-0.5 inline-block rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[11px]"
                            >
                                POST /api/mascotas
                            </code>
                            <p className="mt-1 text-[11px] text-slate-500">
                                Body (JSON) con:
                                <code>numeroChip, nombre, tipo, raza?, edad?, pesoKg?</code>
                            </p>
                        </div>

                        <div className="mt-2">
                            <div className="font-medium text-slate-800">
                                Posibles errores
                            </div>
                            <ul className="mt-1 list-disc pl-4 text-[11px] text-slate-600">
                                <li><code>400</code> → datos no válidos o faltan obligatorios</li>
                                <li><code>400</code> → ya existe una mascota con ese número de chip</li>
                                <li><code>500</code> → error creando mascota</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </aside>
        </div>
    </main>
    );
}