
**25. Problem: Mongoose Indexing**

**Problem Statement:**
Implement indexing on the "name" field of the "Product" collection to optimize query performance. Write a function to create the index.

**Function Signature:**
```javascript
/**
 * Creates an index on the "name" field of the "Product" collection in MongoDB
 */
function createProductNameIndex() {
  // Your implementation here
}
```

**Expected Output:**
- The function should create an index on the "name" field of the "Product" collection.

**Test Cases:**
1. Call the function and check the MongoDB database for the created index.

**Hint:**


Get access to your Mongoose Product model.

Use the createIndex method on the name field of the Product collection.

Provide a callback function to handle the result.
