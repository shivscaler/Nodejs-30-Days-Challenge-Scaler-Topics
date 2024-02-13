**14. Problem: Express Caching Middleware**

**Problem Statement:**
Implement a caching middleware for an Express application. The middleware should cache responses based on the request URL and return cached responses for subsequent identical requests. Allow cache expiration after a specified time.

**Function Signature:**
```javascript
/**
 * Caching middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function cachingMiddleware(req, res, next) {
  // Your implementation here
}
```

**Expected Output:**
- Cached responses should be returned for identical requests within the cache expiration time.
- Subsequent requests after cache expiration should trigger a new response.

**Test Cases:**
1. Make a request, cache the response, and make the same request again within the cache expiration time.
2. Make a request, cache the response, wait for cache expiration, and make the same request again.
