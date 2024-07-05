# E-commerce Website

This project is a full-stack e-commerce website developed using Java (Spring Boot) for the backend and React for the frontend. The application includes user authentication and authorization using OAuth and integrates a payment gateway using Stripe. The entire application is deployed on AWS using Docker and Kubernetes.

## Features
- User authentication and authorization using OAuth
- Payment gateway integration with Stripe
- Deployment on AWS using Docker and Kubernetes


## Prerequisites
- Java 11
- Node.js
- Docker
- Kubernetes

## Getting Started

### Backend
1. Navigate to the backend directory:
   ```sh
   cd backend
2. Build the Spring Boot application:
   ```sh
   mvn clean install
4. Run the application:
   ```sh
   java -jar target/ecommerce-backend.jar

# Frontend

1. Navigate to the frontend directory:
   ```sh
   cd frontend
3. Install dependencies:
   ```sh
   npm install
5. Run the application:
   ```sh
   npm start
   
# Docker

1. Build and run Docker containers:
   ```sh
   docker-compose up --build
# Kubernetes
1. Apply Kubernetes configurations:
   ```sh
   kubectl apply -f kubernetes/deployment.yaml
   ```sh
   kubectl apply -f kubernetes/service.yaml
