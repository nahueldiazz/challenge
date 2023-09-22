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

# Back: Proyecto de Nest

Este es un proyecto de Nest.js que implementa dos endpoints de API:

- `/api/items`: Un endpoint GET que acepta una consulta de búsqueda "q" como cadena para buscar elementos.
- `/api/items/:id`: Un endpoint GET que acepta un ID de elemento y devuelve el detalle del elemento correspondiente.


## Intalacion
- Instala las dependencias utilizando yarn: 
```bash
 yarn install
```

## Ejecucion 
```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Endpoinst de API

- GET `/api/items`
```bash
http://localhost:8080/api/items?q=tu-busqueda
```

- GET `/api/items/:id`
```bash
http://localhost:8080/api/items/1
```