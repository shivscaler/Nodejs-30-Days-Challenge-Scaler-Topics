**24. Problem: Express Route for Product CRUD Operations**

**Problem Statement:**
Create Express routes for handling CRUD operations on products using MongoDB and Mongoose. Implement routes for creating, reading, updating, and deleting products.

**Function Signature:**
```javascript
/**
 * Express route to create a new product
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function createProductRoute(req, res) {
  // Your implementation here
}

/**
 * Express route to retrieve all products
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function getAllProductsRoute(req, res) {
  // Your implementation here
}

/**
 * Express route to update a product
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function updateProductRoute(req, res) {
  // Your implementation here
}

/**
 * Express route to delete a product
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function deleteProductRoute(req, res) {
  // Your implementation here
}
```

**Expected Output:**
- The routes should perform the respective CRUD operations on the "Product" collection in MongoDB.

**Test Cases:**
1. Use tools like Postman to send HTTP requests to each route and check the MongoDB database for the expected changes.

**Hint:**
Schema Definition: Use the mongoose.Schema constructor to define a schema with fields like name, description, price, etc. Use appropriate data types and validation as needed.

Model Creation: Use the mongoose.model method to create a model for the products collection based on the schema defined in step 1.

Route Handlers: Implement route handlers that use the Mongoose model to perform CRUD operations on the products collection. For example, the handler for creating a product would create a new instance of the model with the request body and then save it to the database.

MongoDB Connection: Use the mongoose.connect method to connect to your MongoDB database. You can specify the connection URI as a parameter to this method.

Express Routes: Use the app.post, app.get, app.put, and app.delete methods of the Express app object to define routes for creating, reading, updating, and deleting products, respectively. Map these routes to the appropriate route handlers.

Testing: Use Postman or a similar tool to send HTTP requests to your Express routes and verify that they perform the expected CRUD operations on the MongoDB database.
