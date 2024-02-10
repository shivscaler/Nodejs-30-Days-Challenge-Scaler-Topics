**. Problem: Express Static Files**

**Problem Statement:**
Create an Express application that serves static files (e.g., HTML, CSS, images) from a "public" directory. Ensure that accessing the root ("/") returns the "index.html" file from the "public" directory.

**Function Signature:**
```javascript
/**
 * Express application serving static files from the "public" directory
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function staticFileServer(req, res) {
  // Your implementation here
}
```

**Expected Output:**
Accessing the root ("/") should return the content of "public/index.html".

**Test Cases:**
1. Request to `/` should return the content of "public/index.html".
2. Request to `/styles/style.css` should return the content of "public/styles/style.css".
