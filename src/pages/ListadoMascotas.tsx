import Header from "@/components/Header";
import type { Mascota } from "@/types/mascotas";

import { useEffect, useState } from "react";

export default function ListadoMascotas(){
   const [mascotas, setMascotas] = useState<Mascota[]>([]);
   const [searchTerm,setSearchTerm] = useState<string>("")
   
  useEffect(() => {
    console.log('cargando mascotas...');
    fetch("http://localhost:3000/api/mascotas",{  //peticion a la api
      method: "GET",
    })
    .then(response => response.json())
    .then((data) => {
      setMascotas(data);
      console.log(data)
    })
    .catch((error) => {
      console.error('Error fetching mascotas:', error);
    });
    
  }, []);
  const confirm = window.confirm;

  const handleDelete = async(numeroChip: string) => {

    await confirm("Estas seguro?");
    
    await fetch(`http://localhost:3000/api/mascotas/${numeroChip}`, {
        method: "DELETE",
    });
    setMascotas(prev => prev.filter(mascota => mascota.numeroChip !== numeroChip))
    alert("MAscota borrada");
  }

  const filteredMascotas  = mascotas.filter((mascota: Mascota) => 
        mascota.tipo.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
    return (
        <>
        <Header />
           <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-6 grid gap-6 lg:grid-cols-[2fr,1fr]">
           
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 md:p-5">
                <div className="flex items-center justify-between mb-4 md:mb-5">
                    <h2 className="text-base font-semibold text-slate-900">
                        Mascotas
                    </h2>

                   
                    <button
                            className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-1.5 text-xs font-medium text-white hover:bg-emerald-700"
                            type="button"
                    >
                      <a href="/mascotas/crear/">Añadir nueva mascota</a>  
                    </button>
                </div>

                
                <form
                        className="flex flex-wrap items-end gap-3 mb-4 md:mb-5"
                        id="filters-form"
                >
                   
                    <div className="flex flex-col gap-1 w-full sm:w-auto sm:min-w-[150px]">
                        <label
                                className="text-xs font-medium text-slate-600"
                                htmlFor="f-tipo"
                        >
                            Tipo
                        </label>
                        <select
                                className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                                id="f-tipo"
                                name="tipo"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                
                                
                        >
                            <option value="">Todos</option>
                            <option value="perro">Perro</option>
                            <option value="gato">Gato</option>
                        </select>
                    </div>

                    
                    <div className="flex flex-col gap-1 w-full sm:w-auto sm:min-w-[120px]">
                        <label
                                className="text-xs font-medium text-slate-600"
                                htmlFor="f-edad-min"
                                
                        >
                            Edad mínima
                        </label>
                        <input
                                className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                                id="f-edad-min"
                                name="edadMin"
                                placeholder="0"
                                
                        />
                    </div>

                   
                    <div className="flex flex-col gap-1 w-full sm:w-auto sm:min-w-[120px]">
                        <label
                                className="text-xs font-medium text-slate-600"
                                htmlFor="f-edad-max"
                                
                        >
                            Edad máxima
                        </label>
                        <input
                                className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                                id="f-edad-max"
                                name="edadMax"
                                placeholder="18"
                                
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                                className="inline-flex items-center rounded-full bg-blue-600 px-4 py-1.5 text-xs font-medium text-white hover:bg-blue-700"
                                type="submit"
                               
                                
                        >
                            Aplicar filtros
                        </button>
                        <button
                                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50"
                                type="reset"
                        >
                            Limpiar
                        </button>
                    </div>
                </form>



                <div className="flex items-center justify-between mb-3 text-xs text-slate-600">
                  <span id="total-mascotas">
                    Total de mascotas encontradas:
                    <span className=" font-semibold text-slate-900">{filteredMascotas.length}</span>
                  </span>
                </div>

                
                <div
                        className="hidden  mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700"
                        id="error-message"
                >
                    
                    Parámetros de filtro no válidos
                </div>

                
                <div className="overflow-x-auto rounded-lg border border-slate-200">
                    <table className="min-w-full text-sm">
                        <thead className="bg-slate-50">
                        <tr className="text-left text-xs font-semibold text-slate-500">
                            <th className="px-3 py-2">Nº chip</th>
                            <th className="px-3 py-2">Nombre</th>
                            <th className="px-3 py-2">Tipo</th>
                            <th className="px-3 py-2">Raza</th>
                            <th className="px-3 py-2">Edad</th>
                            <th className="px-3 py-2">Peso</th>
                            <th className="px-3 py-2 text-right">Acciones</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100" id="mascotas-tbody">

                   {filteredMascotas.map((m: Mascota) => (
    // Quitamos el <> de aquí
    <tr key={m.numeroChip} className="bg-white">
        <td className="px-3 py-2">
            <span className="inline-flex rounded-full bg-slate-900 px-2.5 py-0.5 text-[11px] font-mono text-slate-50">
                {m.numeroChip}
            </span>
        </td>
        <td className="px-3 py-2">
            <div className="text-[13px] text-slate-900">{m.nombre}</div>
        </td>
        <td className="px-3 py-2">
            <span className="inline-flex rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
                {m.tipo}
            </span>
        </td>
        <td className="px-3 py-2 text-[13px] text-slate-700">
            {m.raza}
        </td>
        <td className="px-3 py-2 text-[13px] text-slate-700">
            {m.edad}
        </td>
        <td className="px-3 py-2 text-[13px] text-slate-700">
            {m.pesoKg} kg
        </td>
        <td className="px-3 py-2">
            <div className="flex justify-between">
                <button 
                onClick={()=> handleDelete(m.numeroChip)}
                className="inline-flex items-center rounded-full bg-red-600 px-3 py-1 text-[11px] font-medium text-white hover:bg-red-700">
                    Eliminar
                </button>
                <button 
                
                className="inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-[11px] font-medium text-white hover:bg-blue-700">
                    <a href={`/mascotas/editar/${m.numeroChip}`}>Editar</a> 
                </button>
            </div>
        </td>
    </tr>
    // Quitamos el </> de aquí
))}
                        </tbody>
                    </table>
                </div>
            </section>


            <aside className="space-y-4">
                <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
                    <h2 className="text-sm font-semibold text-slate-900 mb-2">
                        Endpoints usados
                    </h2>
                    <div className="space-y-2 text-xs text-slate-700">
                        <div>
                            <div className="font-medium text-slate-800">
                                Listado de mascotas
                            </div>
                            <code
                                    className="mt-0.5 inline-block rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[11px]"
                            >
                                GET /api/mascotas
                            </code>
                            <p className="mt-1 text-[11px] text-slate-500">
                                Puedes añadir filtros:
                                <code>?tipo=perro&edadMin=2&edadMax=10</code>
                            </p>
                        </div>

                        <div>
                            <div className="font-medium text-slate-800">
                                Eliminar mascotas
                            </div>
                            <code
                                    className="mt-0.5 inline-block rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[11px]"
                            >
                            
                            </code>
                        </div>
                    </div>
                </section>


            </aside>
        </div>
    </main>
        </>
    );
}