**16. Problem: MongoDB Connection Setup**

**Problem Statement:**
Create an Express application with MongoDB integration using Mongoose. Implement a function to establish a connection to a MongoDB database. Ensure that the connection is successful and log a success message.

**Function Signature:**
```javascript
/**
 * Establishes a connection to MongoDB using Mongoose
 */
function connectToMongoDB() {
  // Your implementation here
}
```

**Expected Output:**
- If the connection is successful, log a success message.

**Test Cases:**
1. Call `connectToMongoDB()` and check the server logs for a successful connection message.

**Hint**


Setup Mongoose: Ensure Mongoose is installed in your project. If not, install it using npm (npm install mongoose).

Connect to MongoDB: Use mongoose.connect() to connect to your MongoDB database. Replace 'mongodb://localhost/mydatabase' with your MongoDB connection string.

Handle Connection Events: Use db.on('error', ...) to handle connection errors and db.once('open', ...) to log a success message when the connection is established.

Testing: After defining the connectToMongoDB function, call it in your code to establish the MongoDB connection.

Verify Connection: Check your server logs for the success message to ensure the connection was successful.

Remember, understanding how Mongoose connects to MongoDB and how to handle connection events will be key to solving this problem.
