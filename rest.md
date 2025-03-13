REST = Representational State Transfer
SERVER <<---- req--- CLIENT
        -----reply--->> 


GET POST DELETE PATCH 

In a RESTful API, the HTTP methods—GET, POST, PUT, DELETE, and PATCH—are used to perform CRUD (Create, Read, Update, Delete) operations on resources. Here’s what each one typically represents:

### 1. **GET**
   - **Purpose**: Retrieve data from the server.
   - **Use case**: You use this method to fetch a resource or a collection of resources.
   - **Example**: 
     - `GET /users` – Fetch all users.
     - `GET /users/123` – Fetch the user with ID 123.

### 2. **POST**
   - **Purpose**: Create a new resource on the server.
   - **Use case**: When you want to add new data to the server (e.g., create a new user).
   - **Example**: 
     - `POST /users` – Create a new user by sending user data in the body of the request.

### 3. **PUT**
   - **Purpose**: Update an existing resource completely.
   - **Use case**: When you need to replace an entire resource with the new data (i.e., you send the entire resource data).
   - **Example**: 
     - `PUT /users/123` – Replace the user with ID 123 with new user data.

### 4. **DELETE**
   - **Purpose**: Delete a resource.
   - **Use case**: When you want to remove a resource from the server.
   - **Example**: 
     - `DELETE /users/123` – Delete the user with ID 123.

### 5. **PATCH**
   - **Purpose**: Partially update a resource.
   - **Use case**: When you only want to modify specific fields of a resource without replacing the entire resource.
   - **Example**: 
     - `PATCH /users/123` – Update only specific fields (like the user's email or name) of the user with ID 123.

### Summary of CRUD operations mapped to HTTP methods:
- **Create** – `POST`
- **Read** – `GET`
- **Update** – `PUT` (full update), `PATCH` (partial update)
- **Delete** – `DELETE`

These methods are used as part of building RESTful APIs, where each HTTP request maps to a specific action on the resources exposed by the API.