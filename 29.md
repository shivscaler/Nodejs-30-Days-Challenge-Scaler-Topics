**Problem 29: Error Handling Middleware**

**Problem Statement:**
You are developing a complex web application with multiple routes and middleware in Node.js and Express. You want to implement a centralized error handling mechanism to catch and handle errors gracefully without crashing the server. Design a middleware function that intercepts errors thrown by route handlers or other middleware and sends an appropriate error response to the client.

**Function Signature:**
```javascript
function errorHandler(err, req, res, next) {
    // Your implementation here
}
```
