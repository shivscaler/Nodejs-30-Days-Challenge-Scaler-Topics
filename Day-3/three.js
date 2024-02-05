const cp = require('child_process');

function executeCommand(command) {
    try {
        const output = cp.execSync(command, { encoding: 'utf-8' });
        console.log(`output: ${output}`);
    } catch (error) {
        console.error(`Error executing command: ${error.message}`);
    }
}

// Example usage:
executeCommand('ls -la');
// Expected Output: (output of ls -la)

executeCommand('echo "Hello, Node.js!"');
// Expected Output: Hello, Node.js! have any error
