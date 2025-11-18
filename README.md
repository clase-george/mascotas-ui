# 🐾 Práctica React – Gestión de Mascotas

En esta práctica debes construir una pequeña aplicación usando React, aplicando las buenas prácticas vistas en clase:
* Separación en componentes
* Uso adecuado de hooks
* Manejo de errores y estados de carga
* Layout consistente
* Peticiones a servicios bien estructuradas

La aplicación consumirá la API REST incluida en el proyecto.

## 🚀 1. Iniciar el proyecto
1.	Instala las dependencias:
```
npm install
```
2.	Arranca el servidor de la API (OBLIGATORIO antes de abrir React):
```
npm run api
```
Esto levantará el backend en:
```
http://localhost:3000/api
```
3.	En otra terminal, arranca la app de React:
```
npm run dev
```

## 🧱 2. Qué tienes que construir

Sigue la guía que puedes encontrar en la siguiente url [https://standing-hoodie-a6a.notion.site/Examen-DAM2-DI-1T-Mascotas-2ac91519db6d807bb1c5e9ade711c8cc](https://standing-hoodie-a6a.notion.site/Examen-DAM2-DI-1T-Mascotas-2ac91519db6d807bb1c5e9ade711c8cc)


## 🛠️ 3. Requisitos técnicos (lo que SÍ debes hacer)
* Crear componentes reutilizables
* Usar hooks correctamente:
  useState
  useEffect 
  useNavigate
* Separar la lógica de llamadas a la API en un módulo
* Manejar estados:
  * cargando
  * error
  * datos
* No repetir código
* Diseño limpio y funcional

## 📁 4. Recomendación de estructura (opcional pero recomendable)
```
src/
    services/
        mascotasService.ts
    components/
    types /
    pages/
        ListadoMascotas.jsx
        EditarMascota.jsx
        CrearMascota.jsx
    layout/
        AppLayout.jsx
```

## 📌 5. Importante

Antes de empezar a programar asegúrate de que el servidor está levantado:
```
npm run api
```
Si la API no está funcionando, tu app NO podrá cargar datos.
