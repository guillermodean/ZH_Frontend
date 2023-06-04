# Use the official Node.js image as the base image
FROM node:14-alpine AS build

# Set the working directory inside the container to /app
RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app


# Build the app for production
RUN npm run build

# Use a lightweight production image as the final image
FROM nginx:1.21.0-alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist/Humedales /usr/share/nginx/html

CMD [ "nginx", "-g", "daemon off;" ]

# Build image

# docker build -t humedales-frontend .

# Run container

# docker run -it -p 4200:4200 humedales-frontend

# Open browser

# http://localhost:4200

# Stop container

# docker stop humedales-frontend

# Remove container