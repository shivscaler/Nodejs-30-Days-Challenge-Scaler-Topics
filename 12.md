**12. Problem: Express Rate Limiting**

**Problem Statement:**
Implement a rate-limiting middleware for an Express application. The middleware should limit the number of requests from a single IP address to a specified rate, and return a 429 Too Many Requests status if the limit is exceeded.

**Function Signature:**
```javascript
/**
 * Rate-limiting middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function rateLimitMiddleware(req, res, next) {
  // Your implementation here
}
```

**Expected Output:**
- If the number of requests from a single IP is below the limit, allow the request to proceed.
- If the limit is exceeded, return a 429 Too Many Requests status.

**Test Cases:**
1. Send requests within the limit; all should proceed.
2. Send requests exceeding the limit; some should return a 429 status.
