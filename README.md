# Humedales
---
## Description

Frontend for the [Humedales API](https://github.com/guillermodean/ZonasHumedas.git). Consisting on 

Este es un proyecto de Angular y TypeScript que muestra un listado de humedales en Navarra junto con sus descripciones y ubicaciones en el mapa. Además, permite a los usuarios con privilegios de administrador iniciar sesión y editar la información de cada humedal a través de un sistema de autenticación basado en JWT.

La información de los humedales está almacenada en una base de datos en DynamoDB, que ya ha sido creada previamente, se gestiona a traves de la API [Humedales API](https://github.com/guillermodean/ZonasHumedas.git).

## Requisitos
* Node.js
* Angular CLI
* AWS CLI
## Instalación


Clona el repositorio en tu máquina local.
En la terminal, navega hasta el directorio del proyecto y ejecuta `npm install` para instalar todas las dependencias.
Configura las credenciales de AWS en tu máquina usando el comando `aws configure`.
Ejecuta ng serve para iniciar el servidor local.


## Uso
Una vez que hayas iniciado el servidor local, puedes acceder a la aplicación en tu navegador web navegando a http://localhost:4200/.

Para ver la lista de humedales, simplemente haz clic en la sección correspondiente en la barra de navegación. Cada humedal está representado por un marcador en el mapa, que puedes hacer clic para ver más información.

Si tienes privilegios de administrador, puedes iniciar sesión en la aplicación haciendo clic en el botón de "Iniciar sesi
