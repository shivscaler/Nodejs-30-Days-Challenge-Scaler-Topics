### Problem 1: File Reader

**Problem Statement:**
Create a function `readFileContent(filePath)` that takes the path to a file as input and reads its content asynchronously using the `fs` module. The function should print the content to the console.

**Function Signature:**
```javascript
function readFileContent(filePath) {
    // Implementation
}
```

**Expected Output:**
```
File Content:
This is the content of the file.
Hello, Node.js!
```

**Test Cases:**
```javascript
readFileContent('test-files/file1.txt');
// Expected Output: Content of file1.txt

readFileContent('test-files/empty-file.txt');
// Expected Output: (empty string)

readFileContent('test-files/nonexistent-file.txt');
// Expected Output: Error reading file: ENOENT: no such file or directory...
```
