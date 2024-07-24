
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
  - **Code:** 201
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
  - **Code:** 200
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
  - **Code:** 200
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
  - **Code:** 200
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
  - **Code:** 200
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
  - **Code:** 200
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
  - **Code:** 200
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
  - **Code:** 200
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

### 13. As a user, I want to view a specific driver by its ID to know its details.

- **Route:** GET /drivers/:id
- **Successful Response:**
  - **Code:** 200
  - **Response Body:**
    ```json
    {
      "driver": {
        "id": 1,
        "name": "Driver Name"
      }
    }
    ```

### 14. As a user, I want to update an existing driver to modify their details.

- **Route:** PUT /drivers/:id
- **Request Body:**
  ```json
  {
    "name": "New Driver Name"
  }
  ```

### 15. As a user, I want to delete a driver to keep my list organized.

- **Route:** DELETE /drivers/:id
- **Successful Response:**
  - **Code:** 200
  - **Response Body:**
    ```json
    {
      "message": "Driver deleted successfully"
    }
    ```

### 16. As a user, I want to create a new vehicle to add to the list of vehicles.

- **Route:** POST /vehicles
- **Request Body:**
  ```json
  {
    "model": "Vehicle Model",
    "plateNumber": "ABC123"
  }
  ```

### 17. As a user, I want to see all vehicles to review them.

- **Route:** GET /vehicles
- **Successful Response:**
  - **Code:** 200
  - **Response Body:**
    ```json
    {
      "vehicles": [
        {
          "id": 1,
          "model": "Vehicle Model",
          "plateNumber": "ABC123"
        }
      ]
    }
    ```

### 18. As a user, I want to view a specific vehicle by its ID to know its details.

- **Route:** GET /vehicles/:id
- **Successful Response:**
  - **Code:** 200
  - **Response Body:**
    ```json
    {
      "vehicle": {
        "id": 1,
        "model": "Vehicle Model",
        "plateNumber": "ABC123"
      }
    }
    ```

### 19. As a user, I want to update an existing vehicle to modify its details.

- **Route:** PUT /vehicles/:id
- **Request Body:**
  ```json
  {
    "model": "New Vehicle Model",
    "plateNumber": "XYZ789"
  }
  ```

### 20. As a user, I want to delete a vehicle to keep my list organized.

- **Route:** DELETE /vehicles/:id
- **Successful Response:**
  - **Code:** 200
  - **Response Body:**
    ```json
    {
      "message": "Vehicle deleted successfully"
    }
    ```

## Technical Requirements

- The project must be created with Node.js and Express.
- You must implement a RESTful API.
- You must use the `fs` module to read and write files.
- You must use middleware to handle errors and secure the API.
- You must differentiate between development and production dependencies.

## Resources

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [fs](https://nodejs.org/api/fs.html)
- [Middleware in Express](https://expressjs.com/en/guide/using-middleware.html)
- [Difference between development and production dependencies](https://dev.to/therealdanvega/what-is-the-difference-between-dependencies-devdependencies-and-peerdependencies-in-a-npm-package-json-file-2b)
