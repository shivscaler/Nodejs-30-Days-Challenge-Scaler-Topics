**8. Problem: Express Error Handling**

**Problem Statement:**
Create an Express route that throws an error if the request parameter "number" is not a positive integer. Implement an error handling middleware to catch and handle this specific error, returning a custom error message and a 400 Bad Request status.

**Function Signature:**
```javascript
/**
 * Express route to handle requests with a positive integer parameter
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function positiveIntegerHandler(req, res) {
  // Your implementation here
}
```

**Expected Output:**
- If "number" is a positive integer: Return a success message.
- If "number" is not a positive integer: Trigger an error handled by the error handling middleware.

**Test Cases:**
1. Request to `/positive?number=5` should return a success message.
2. Request to `/positive?number=-2` should trigger the error handling middleware.
