# 2-intro-react

Este proyecto es una introducción básica a React, demostrando conceptos y componentes fundamentales. Está configurado usando Vite, una herramienta de construcción rápida para proyectos web modernos.

## Tecnologías Utilizadas

*   **React**: Una librería de JavaScript para construir interfaces de usuario.
*   **Vite**: Una herramienta de construcción que proporciona una experiencia de desarrollo más rápida y ligera para proyectos web modernos.
*   **ESLint**: Para el linting y el mantenimiento de la calidad del código.
*   **Prop-types**: Para la verificación de tipos en tiempo de ejecución para las props de React.

## Instalación

Para empezar con este proyecto, clona el repositorio e instala las dependencias:

```bash
git clone <url-del-repositorio>
cd 2-intro-react
npm install
```

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar los siguientes comandos:

### `npm run dev`

Ejecuta la aplicación en modo de desarrollo.
Abre [http://localhost:5173](http://localhost:5173) para verla en tu navegador.

La página se recargará cuando hagas cambios.
También puedes ver cualquier error de lint en la consola.

### `npm run build`

Construye la aplicación para producción en la carpeta `dist`.
Empaqueta correctamente React en modo de producción y optimiza la construcción para el mejor rendimiento.

La construcción está minificada y los nombres de archivo incluyen los hashes.
¡Tu aplicación está lista para ser desplegada!

### `npm run lint`

Ejecuta ESLint para verificar problemas de calidad del código.

### `npm run preview`

Sirve la carpeta `dist` localmente para previsualizar la construcción de producción.

## Estructura del Proyecto

El código principal de la aplicación reside en el directorio `src/`:

*   `src/main.jsx`: El punto de entrada de la aplicación React.
*   `src/HelloWordApp.jsx`: Un componente de React de ejemplo.
*   `src/index.css`: Estilos globales para la aplicación.
*   `src/components/`: Contiene componentes de React reutilizables como `Contenido.jsx`, `Title.jsx` y `UserDetail.jsx`.
*   `src/assets/`: Activos estáticos como `react.svg`.