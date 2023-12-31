# Front: Proyecto de Next.js

Este es un proyecto de Next.js que utiliza las siguientes rutas y estructura de archivos:

- `pages/index.js`: Ruta principal (`/`)
- `pages/items/index.js`: Ruta para la página de elementos (`/items`)
- `pages/items/[id]/index.js`: Ruta para la página de un elemento específico (`/items/:id`)

## Instalación

Para comenzar con este proyecto, sigue estos pasos:

- Instala las dependencias utilizando yarn: 
```bash
 yarn install
```
- Ejecución en Modo Desarrollo
Para ejecutar el proyecto en modo de desarrollo, utiliza el siguiente comando:

```bash
yarn dev
```
Esto iniciará el servidor de desarrollo y podrás acceder a tu aplicación en `http://localhost:3000.`

- Ejecución en Modo Producción
Si deseas ejecutar la aplicación en modo de producción, primero debes construir el proyecto y luego iniciarlo. Utiliza los siguientes comandos:
```bash
yarn build
yarn start
```