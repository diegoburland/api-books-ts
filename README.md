# API de Libros con Node.js, TypeScript y Express

Una API RESTful sencilla para crear, leer, actualizar y eliminar libros.

### Requisitos
- Nodejs
- npm
- typescript
- express
- eslint

## Instalación

1. Clona este repositorio

    ```bash
    git clone git@github.com:diegoburland/api-books-ts.git

2. Navega al directorio del proyecto

    ```bash
    cd api-books-ts

3. Instala las dependencias
    ```bash
    npm install

## Uso

1. Inicia el servidor en modo desarrollo:

    ```bash
    npm run dev

2. La API estará disponible en:
    ```bash
    http://localhost:3000

## Endpoints

- Obtener todos los libros:
GET /books

- Obtener un libro por ID:
GET /books/:id

- Añadir un libro:
POST /books

- Actualizar un libro por ID:
PUT /books/:id

- Eliminar un libro por ID:
DELETE /books/:id

## Licencia
MIT

## Contribuciones
Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para cualquier mejora o corrección.