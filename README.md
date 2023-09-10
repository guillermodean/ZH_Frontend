# Humedales de Navarra App

Frontend for the [Humedales API](https://github.com/guillermodean/ZonasHumedas.git).

Esta es una aplicación web que proporciona un listado de humedales en la región de Navarra, junto con observaciones de animales y plantas en estos humedales. La aplicación está diseñada para ayudar a los entusiastas de la naturaleza y los científicos a explorar y registrar observaciones de la vida silvestre en los humedales de Navarra.
La información de los humedales está almacenada en una base de datos en DynamoDB, que ya ha sido creada previamente, se gestiona a traves de la API [Humedales API](https://github.com/guillermodean/ZonasHumedas.git).

## Características

- Lista de humedales con información detallada.
- Registro y visualización de observaciones de animales y plantas en cada humedal.
- Búsqueda y filtrado de humedales por ubicación y tipo.
- Interfaz de usuario intuitiva y fácil de usar.

## Capturas de Pantalla

![Home](/src/assets/images/Captura%20de%20pantalla%202023-09-10%20173435%20-%20home.jpg)
_Home de la página_

![List](/src/assets/images/Captura%20de%20pantalla%202023-09-10%20173541%20-%20list.jpg)
_Ejemplo de la tabla y mapa de busqueda de los Humedales._

## Despliegue

La aplicación está desplegada en la siguiente URL: [https://humedales.guillermodean.com](https://humedales.guillermodean.com).

## Instalación Local

Si deseas ejecutar la aplicación en tu entorno local, puedes usar Docker y Docker Compose para simplificar el proceso. Asegúrate de tener Docker instalado.

1. Clona este repositorio o descarga el código fuente.

2. Descarga las imágenes de Docker desde Docker Hub:

   ```bash
   docker pull guillermojdean/humedales-frontend:latest
   ```
3. Utiliza `docker-compose` para iniciar la aplicación junto con el backend:

   ```bash
   docker-compose up -d
   ```

4. Abre tu navegador y accede a `http://localhost:3000` para ver la aplicación en funcionamiento en tu entorno local.

## Tecnologías Utilizadas

- Angular (versión 11.2.19)
- Express.js (versión 4.18.2)
- AWS DynamoDB
- Leaflet (versión 1.9.3)
- Docker


## Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.

2. Crea una rama para tu contribución: "consola" git checkout -b feature/tu-caracteristica "consola"

3. Realiza tus cambios y realiza commits descriptivos.

4. Haz un pull request a la rama principal de este repositorio.

## Autores

- Guillermo Dean - [GitHub](https://github.com/tuusuario)


## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](License) para obtener más detalles.

