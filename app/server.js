// ============================================================
// cloud-native-first-contribution — server.js
// A beginner-friendly Express server to demonstrate
// cloud-native concepts (Docker + Kubernetes).
// ============================================================

// Import core modules and Express
const path = require('path');
const express = require('express');

// Create an Express application instance
const app = express();

// Serve static frontend assets from app/public
app.use(express.static(path.join(__dirname, 'public')));

// Define the port the server will listen on.
// process.env.PORT lets Kubernetes / Docker override it if needed.
const PORT = process.env.PORT || 3000;

// ------------------------------------------------------------
// Routes
// ------------------------------------------------------------

// Root endpoint — serves the simple frontend UI
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Health endpoint — used by Kubernetes liveness / readiness probes
// Returns a simple JSON object so orchestrators know the app is alive
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// ------------------------------------------------------------
// Start the server
// ------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
  console.log(`   Root    → GET http://localhost:${PORT}/`);
  console.log(`   Health  → GET http://localhost:${PORT}/health`);
});
