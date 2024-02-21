**22. Problem: MongoDB CRUD Operations**

**Problem Statement:**
Implement a set of CRUD (Create, Read, Update, Delete) operations for a "Product" entity using MongoDB and Mongoose. Define a Mongoose schema for the product with properties like "name," "price," and "quantity." Implement functions to create, read, update, and delete products.

**Function Signature:**
```javascript
/**
 * Creates a new product in MongoDB
 * @param {Object} product - Product object with properties name, price, and quantity
 */
function createProduct(product) {
  // Your implementation here
}

/**
 * Retrieves all products from MongoDB
 * @returns {Array} - Array of product objects
 */
function getAllProducts() {
  // Your implementation here
}

/**
 * Updates a product in MongoDB
 * @param {string} productId - ID of the product to update
 * @param {Object} updatedProduct - Updated product object
 */
function updateProduct(productId, updatedProduct) {
  // Your implementation here
}

/**
 * Deletes a product from MongoDB
 * @param {string} productId - ID of the product to delete
 */
function deleteProduct(productId) {
  // Your implementation here
}
```

**Expected Output:**
- The functions should perform the respective CRUD operations on the "Product" collection in MongoDB.

**Test Cases:**
1. Create a product, retrieve all products, update a product, and then delete the product.

**hint:**
To solve this problem, you can follow these steps:

1. Define a Mongoose schema for the "Product" entity with properties like "name," "price," and "quantity."
2. Create a Mongoose model using the schema.
3. Implement the createProduct function to create a new product in MongoDB.
4. Implement the getAllProducts function to retrieve all products from MongoDB.
6. Implement the updateProduct function to update a product in MongoDB.
7. Implement the deleteProduct function to delete a product from MongoDB.
8. You can use Mongoose methods like save, find, findByIdAndUpdate, and findByIdAndDelete to perform the CRUD operations.
