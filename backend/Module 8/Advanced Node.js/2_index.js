// Basic Clustering
// Description: Implement a basic clustering setup to create multiple workers in a Node.js script.

// Steps:
// 1. Check if the current process is the master using cluster.isMaster .
// 2. Fork workers based on the number of CPU cores available using os.cpus().length .
// 3. In each worker, create an HTTP server that listens on port 8000.
// 4. Log messages to show when a worker is started or terminated.

