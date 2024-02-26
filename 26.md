**26. Problem: Aggregation Pipeline for Product Stats**

**Problem Statement:**
Create an aggregation pipeline to calculate statistics for products in MongoDB. Implement a function to execute the pipeline and return aggregated results like the total number of products, the average price, and the highest quantity.

**Function Signature:**
```javascript
/**
 * Executes an aggregation pipeline to calculate product statistics
 * @returns {Object} - Aggregated product statistics
 */
function getProductStatistics() {
  // Your implementation here
}
```

**Expected Output:**
- The function should return an object with aggregated product statistics.

**Test Cases:**
1. Call the function and check the results for the expected product statistics.

**Hint:**
To calculate statistics for products in MongoDB using an aggregation pipeline, you can use the $group stage to calculate the total number of products (totalProducts), the average price (averagePrice), and the highest quantity (highestQuantity). Use $sum, $avg, and $max operators respectively for these calculations.
