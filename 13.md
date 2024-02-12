**13. Problem: Express WebSocket Integration**

**Problem Statement:**
Extend an existing Express application to include WebSocket support. Create a WebSocket server that echoes back any message it receives from a client. Implement an endpoint "/websocket" that serves an HTML page with JavaScript to establish a WebSocket connection.

**Function Signature:**
```javascript
/**
 * WebSocket server for Express
 * @param {Object} server - HTTP server instance
 */
function setupWebSocket(server) {
  // Your implementation here
}
```

**Expected Output:**
- Clients should be able to establish a WebSocket connection to "/websocket".
- Messages sent by clients should be echoed back by the server.

**Test Cases:**
1. Establish a WebSocket connection and send a message; it should be echoed back.
