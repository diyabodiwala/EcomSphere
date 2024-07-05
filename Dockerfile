# Backend Dockerfile
FROM openjdk:11
ADD target/ecommerce-backend.jar ecommerce-backend.jar
ENTRYPOINT ["java", "-jar", "/ecommerce-backend.jar"]

# Frontend Dockerfile
FROM node:14
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
