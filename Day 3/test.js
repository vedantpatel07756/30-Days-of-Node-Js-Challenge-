const { exec } = require('child_process');
const os = require('os');

function executeCommand(command) {
  const childProcess = exec(command, { shell: os.platform() === 'win32' ? 'cmd' : '/bin/bash' }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error.message}`);
      return;
    }

    console.log(`Command Output:\n${stdout.trim()}`);

    if (stderr) {
      console.error(`Command Error Output:\n${stderr}`);
    }
  });

  childProcess.on('exit', (code) => {
    console.log(`Command exited with code ${code}`);
  });
}

// Test Cases
executeCommand(os.platform() === 'win32' ? 'dir' : 'ls -la');
// Expected Output: (output of 'dir' on Windows or 'ls -la' on Unix-like systems)

executeCommand('echo "Hello, Node.js!"');
// Expected Output: Hello, Node.js!
