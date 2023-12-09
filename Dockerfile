# Utilizar imagen base de Node.js
FROM node:lts

#Crea y cambia el directorio actual a /app
WORKDIR /app

#Copiar archivo de dependencias
COPY ./package*.json /app/

#Instalar las dependencias
RUN npm install 

#Copiamos el contenido del proyecto a /app
COPY . /app

# Cambiamos al directorio src
WORKDIR /app/src

#Exponer puerto 80
EXPOSE 80

#Iniciar aplicación
CMD [ "node", "app.js" ]