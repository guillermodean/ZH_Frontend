# Dockerfile to for angular app

# Base image    
FROM node:14.15.4-alpine3.12

# Set working directory

WORKDIR /usr/src/app

# Copy package.json and package-lock.json

COPY package*.json ./

# Install dependencies

RUN npm install

# Copy app source

COPY . .

# Expose port 4200

EXPOSE 4200

# Start app

CMD ["npm", "start"]

# Build image

# docker build -t humedales-frontend .

# Run container

# docker run -it -p 4200:4200 humedales-frontend

# Open browser

# http://localhost:4200

# Stop container

# docker stop humedales-frontend

# Remove container