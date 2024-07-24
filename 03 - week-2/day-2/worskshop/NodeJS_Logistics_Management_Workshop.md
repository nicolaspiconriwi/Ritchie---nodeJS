
# Node.js Logistics Management Workshop: Real Project

## Introduction

Welcome to the Node.js Logistics Management workshop. This project is designed to apply basic concepts of Node.js, Express, promises, and the difference between development and production dependencies. You will create a RESTful API that interacts with the file system instead of a database.

## Submission Instructions

1. Create a repository on GitHub named `nodejs-logistics-project`.
2. Follow the instructions and complete the objectives outlined in this document.
3. Upload your project to GitHub and share the repository link.

## Objectives

1. Set up a Node.js development environment.
2. Create a web server using Node.js and Express.
3. Implement routes and middleware in Express.
4. Read and write data in the file system using the `fs` module with promises.
5. Handle errors and secure the RESTful API with middleware.
6. Understanding status codes and response bodies.
7. Differentiate between development and production dependencies.
8. Design relational model for the required entities.

## Project Description

You will create a RESTful API to manage logistics information. The entities to be managed are: **Warehouses**, **Shipments**, **Drivers**, and **Vehicles**. Each entity will be stored in a JSON file in the file system.

### Warehouse

A warehouse is a building for storing goods. It has the following properties:

- **ID**: A unique identifier for the warehouse.
- **Name**: The name of the warehouse.
- **Location**: The location of the warehouse.

### Shipment

A shipment is a load of goods that is transported from one place to another. It has the following properties:

- **ID**: A unique identifier for the shipment.
- **Item**: The name of the item being shipped.
- **Quantity**: The quantity of the item being shipped.

### Driver

A driver is a person who drives a vehicle to transport goods. It has the following properties:

- **ID**: A unique identifier for the driver.
- **Name**: The name of the driver.

### Vehicle

A vehicle is a machine used to transport goods. It has the following properties:

- **ID**: A unique identifier for the vehicle.
- **Model**: The model of the vehicle.
- **Year**: The year the vehicle was manufactured.

## Relationship Between Entities

- A warehouse can have multiple shipments. However, a shipment can only belong to one warehouse.
- A driver can drive multiple vehicles. However, a vehicle can only be driven by one driver.
- A vehicle can transport multiple shipments. However, a shipment can only be transported by one vehicle.
- A shipment can be transported by multiple drivers. However, a driver can only transport one shipment.
- A driver can work in multiple warehouses. However, a warehouse can only have one driver.
- A vehicle can be parked in multiple warehouses. However, a warehouse can only have one vehicle parked.
- A warehouse can have multiple drivers. However, a driver can only work in one warehouse.

## User Stories

### 1. As a user, I want to create a new warehouse to add to the list of warehouses.

- **Route:** POST /warehouses
- **Request Body:**
  ```json
  {
    "name": "Warehouse Name",
    "location": "Warehouse Location"
  }
  ```
- **Successful Response:**
  - **Code:** Buscar el código correcto
  - **Response Body:**
    ```json
    {
      "message": "Warehouse created successfully",
      "warehouse": {
        "id": 1,
        "name": "Warehouse Name",
        "location": "Warehouse Location"
      }
    }
    ```

### 2. As a user, I want to see all warehouses to review them.

- **Route:** GET /warehouses
- **Successful Response:**
  - **Code:** Buscar el código correcto
  - **Response Body:**
    ```json
    {
      "warehouses": [
        {
          "id": 1,
          "name": "Warehouse Name",
          "location": "Warehouse Location"
        }
      ]
    }
    ```

### 3. As a user, I want to view a specific warehouse by its ID to know its details.

- **Route:** GET /warehouses/:id
- **Successful Response:**
  - **Code:** Buscar el código correcto
  - **Response Body:**
    ```json
    {
      "warehouse": {
        "id": 1,
        "name": "Warehouse Name",
        "location": "Warehouse Location"
      }
    }
    ```

### 4. As a user, I want to update an existing warehouse to modify its details.

- **Route:** PUT /warehouses/:id
- **Request Body:**
  ```json
  {
    "name": "New Warehouse Name",
    "location": "New Warehouse Location"
  }
  ```

### 5. As a user, I want to delete a warehouse to keep my list organized.

- **Route:** DELETE /warehouses/:id
- **Successful Response:**
  - **Code:** Buscar el código correcto
  - **Response Body:**
    ```json
    {
      "message": "Warehouse deleted successfully"
    }
    ```

### 6. As a user, I want to create a new shipment to add to the list of shipments.

- **Route:** POST /shipments
- **Request Body:**
  ```json
  {
    "item": "Item Name",
    "quantity": 100,
    "warehouseId": 1
  }
  ```

### 7. As a user, I want to see all shipments to review them.

- **Route:** GET /shipments
- **Successful Response:**
  - **Code:** Buscar el código correcto
  - **Response Body:**
    ```json
    {
      "shipments": [
        {
          "id": 1,
          "item": "Item Name",
          "quantity": 100,
          "warehouseId": 1
        }
      ]
    }
    ```

### 8. As a user, I want to view a specific shipment by its ID to know its details.

- **Route:** GET /shipments/:id
- **Successful Response:**
  - **Code:** Buscar el código correcto
  - **Response Body:**
    ```json
    {
      "shipment": {
        "id": 1,
        "item": "Item Name",
        "quantity": 100,
        "warehouseId": 1
      }
    }
    ```

### 9. As a user, I want to update an existing shipment to modify its details.

- **Route:** PUT /shipments/:id
- **Request Body:**
  ```json
  {
    "item": "New Item Name",
    "quantity": 150,
    "warehouseId": 1
  }
  ```

### 10. As a user, I want to delete a shipment to keep my list organized.

- **Route:** DELETE /shipments/:id
- **Successful Response:**
  - **Code:** Buscar el código correcto
  - **Response Body:**
    ```json
    {
      "message": "Shipment deleted successfully"
    }
    ```

### 11. As a user, I want to create a new driver to add to the list of drivers.

- **Route:** POST /drivers
- **Request Body:**
  ```json
  {
    "name": "Driver Name"
  }
  ```

### 12. As a user, I want to see all drivers to review them.

- **Route:** GET /drivers
- **Successful Response:**
  - **Code:** Buscar el código correcto
  - **Response Body:**
    ```json
    {
      "drivers": [
        {
          "id": 1,
          "name": "Driver Name"
        }
      ]
    }
    ```

## Technical Requirements

- The project must be created with Node.js and Express.
- You must implement a RESTful API.
- You must use the `fs` module to read and write files.
- You must use middleware to handle errors and secure the API.
- You must differentiate between development and production dependencies.
- You must differentiate the variety of status codes.

## Resources

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [fs](https://nodejs.org/api/fs.html)
- [Middleware in Express](https://expressjs.com/en/guide/using-middleware.html)
- [Difference between development and production dependencies](https://dev.to/therealdanvega/what-is-the-difference-between-dependencies-devdependencies-and-peerdependencies-in-a-npm-package-json-file-2b)
