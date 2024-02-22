**23. Problem: Mongoose Population**

**Problem Statement:**
Extend the previous "Product" schema to include a reference to a "Category" entity. Implement a Mongoose population query to retrieve all products with their corresponding category details.

**Function Signature:**
```javascript
/**
 * Retrieves all products with populated category details from MongoDB
 * @returns {Array} - Array of product objects with populated category details
 */
function getProductsPopulatedWithCategory() {
  // Your implementation here
}
```

**Expected Output:**
- The function should return an array of product objects with populated category details.

**Test Cases:**
1. Create products with associated categories, then call the function to retrieve products with populated category details.

**Hint:**

To solve this problem, you'll need to:

- Define a Category schema.
- Update the Product schema to include a reference to Category.
- Create a ProductWithCategory model using the updated schema.
- Implement the getProductsPopulatedWithCategory function using Mongoose's populate method to retrieve all products with their corresponding category details.
- Hint: Use Mongoose's populate method on the category field of the ProductWithCategory model to populate the category details.
