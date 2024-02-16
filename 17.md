**17. Problem: Mongoose Schema and Model**

**Problem Statement:**
Define a Mongoose schema for a "User" with properties: "username" (string) and "email" (string). Create a Mongoose model for the User schema. Implement a function to add a new user to the MongoDB database.

**Function Signature:**
```javascript
/**
 * Adds a new user to the MongoDB database
 * @param {Object} user - User object with properties username and email
 */
function addUserToDatabase(user) {
  // Your implementation here
}
```

**Expected Output:**
- If the user is successfully added, log a success message.

**Test Cases:**
1. Call `addUserToDatabase({ username: 'john_doe', email: 'john@example.com' })` and check the server logs for a success message.

**Hint:**

To solve this problem, you need to follow these steps:

Define a Mongoose schema for the "User" with properties "username" (string) and "email" (string).
Create a Mongoose model for the User schema.
Implement a function addUserToDatabase that takes a user object and adds it to the MongoDB database using the User model.
Here are some hints to guide you through the process:

Define the Mongoose schema:

Use mongoose.Schema to define a schema for the User.
The schema should have two fields: "username" (String) and "email" (String).
Create the Mongoose model:

Use mongoose.model to create a model for the User schema.
Pass the model a name (e.g., 'User') and the schema you defined.
Implement the addUserToDatabase function:

Inside the function, create a new User object using the provided user data.
Use the save method on the User object to save it to the database.
Log a success message if the user is saved successfully, or an error message if there's an error.
Remember to connect Mongoose to your MongoDB database using mongoose.connect.
