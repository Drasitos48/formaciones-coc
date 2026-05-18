# Ejemplo de proyecto Node con Express, Nunjucks, Vite y Tailwind

Importante:
Agregado inserts de ejemplo dentro de "seeds/seed.js", para poder ejecutarlo, simplemente ejecutar en la raíz
del proyecto "npm run seed" y se insertará todo automáticamente.

## Modos de ejecución

En **desarrollo**, ejecutar en dos terminales distintos:

* `npm run dev` para poner en marcha el servidor Express
* `npm run dev:assets` para lanzar Vite en el puerto 5173 y llamarlo para que renderice los *assets* necesarios
* Acceder a la raíz del servidor (`http://localhost:3000` en este ejemplo)

En **producción**:

* `npm run build` para que Vite genere la estructura del sitio
* `npm run start` para poner en marcha el servidor
* Acceder a la raíz del servidor (`http://localhost:3000` en este ejemplo)
