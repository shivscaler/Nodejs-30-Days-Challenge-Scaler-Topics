**11. Problem: Express Authentication Middleware**

**Problem Statement:**
Implement an authentication middleware for an Express application. The middleware should check for the presence of a valid JWT (JSON Web Token) in the request headers. If a valid token is present, allow the request to proceed; otherwise, return a 401 Unauthorized status.

**Function Signature:**
```javascript
/**
 * Authentication middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function authenticationMiddleware(req, res, next) {
  // Your implementation here
}
```

**Expected Output:**
- If a valid JWT is present, allow the request to proceed.
- If no JWT is present or it's invalid, return a 401 Unauthorized status.

**Test Cases:**
1. Request with a valid JWT should proceed.
2. Request without a JWT or with an invalid JWT should return a 401 Unauthorized status.

