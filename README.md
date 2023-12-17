# Pokemon App

## Descripción

Este proyecto consiste en una aplicación web de visualización de Pokémon, desarrollada utilizando tecnologías modernas de frontend y backend. La aplicación permite a los usuarios explorar información sobre diferentes Pokémon.

### Backend

El backend está implementado con Node.js y Express, ofreciendo una API REST. Se han integrado dos sistemas de bases de datos: MongoDB y MySQL. Esto proporciona flexibilidad en la gestión de datos y demuestra la capacidad de trabajar con diferentes tecnologías de base de datos.

### Frontend

El frontend está desarrollado con React en JavaScript y estilizado con SASS. Se ha utilizado React Router para la navegación entre páginas. La aplicación incluye animaciones interactivas, como efectos al pasar el cursor sobre los Pokémon en el listado y una animación de "respiración" en la página de detalles de cada Pokémon. Al hacer clic en un Pokémon, la tarjeta correspondiente se amplía para crear una transición fluida a la página de detalles.

La propuesta gráfica se ha seguido fielmente, incorporando mejoras como la posibilidad de elegir entre bases de datos (MongoDB o MySQL) y el tipo de filtrado (local o en base de datos). Se han añadido toques de color para mejorar la experiencia visual del usuario.

## Instrucciones para Iniciar los Proyectos

### Backend

1. Navega a la carpeta `back` del repositorio.
2. Cambia el nombre del archivo `.env.example` a `.env` y configura las variables de entorno según tus necesidades.
3. Ejecuta `npm install` para instalar las dependencias del proyecto.
4. Inicia el servidor con `npm start`.
5. La API estará disponible en `http://localhost:3003`.

### Frontend

1. Accede a la carpeta `front` del repositorio.
2. Ejecuta `npm install` para instalar las dependencias necesarias.
3. Inicia la aplicación con `npm start`.
4. El navegador se abrirá automáticamente mostrando la interfaz en `http://localhost:3000`.

## Características Adicionales

- **Flags de Configuración**: La aplicación permite seleccionar el tipo de base de datos y el método de filtrado a través de la interfaz.
- **Animaciones Interactivas**: Efectos visuales que enriquecen la experiencia del usuario al interactuar con la lista de Pokémon.
- **Transiciones Suaves**: Las transiciones entre la vista de lista y los detalles de cada Pokémon están diseñadas para ser fluidas y atractivas.

---

Disfruta explorando el mundo de Pokémon con esta aplicación interactiva y visualmente atractiva.

---

### Nota sobre .env

El archivo `.env` contiene datos de conexión a servidores de prueba. Normalmente, estos datos no estarían presentes en un repositorio abierto, pero para facilitar la prueba de la aplicación, se han utilizado servidores de prueba accesibles públicamente.
