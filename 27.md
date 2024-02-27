**Problem 27: Authentication Middleware**

**Problem Statement:**
You are developing a web application with Node.js and Express, and you need to implement an authentication middleware to protect certain routes. The authentication should be token-based and support user roles (e.g., admin, regular user). Design a middleware function that verifies the authenticity of incoming requests and checks if the user has the required role to access certain routes.

**Function Signature:**
```javascript
function authenticateAndAuthorize(req, res, next) {
    // Your implementation here
}
```
