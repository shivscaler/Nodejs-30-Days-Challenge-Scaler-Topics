**15. Problem: Express Logging Middleware**

**Problem Statement:**
Create a logging middleware for an Express application. The middleware should log detailed information about each incoming request, including the timestamp, HTTP method, URL, request headers, and request body.

**Function Signature:**
```javascript
/**
 * Logging middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function loggingMiddleware(req, res, next) {
  // Your implementation here
}
```

**Expected Output:**
- Each incoming request should be logged with detailed information.

**Test Cases:**
1. Make multiple requests and check the server logs for detailed information.

**Hint**
To create a logging middleware for Express, you'll need to define a function that takes req, res, and next as parameters. Inside this function, use console.log to print the timestamp, HTTP method, URL, headers, and body of the incoming request. Finally, call next() to pass control to the next middleware.





