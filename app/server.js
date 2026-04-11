// ============================================================
// cloud-native-first-contribution — server.js
// A beginner-friendly Express server to demonstrate
// cloud-native concepts (Docker + Kubernetes).
// ============================================================

const path = require('path');

// Import the Express framework
const express = require('express');

// Create an Express application instance
const app = express();

// Define the port the server will listen on.
// process.env.PORT lets Kubernetes / Docker override it if needed.
const PORT = process.env.PORT || 3000;

const clientDist = path.join(__dirname, '../client/dist');

// ------------------------------------------------------------
// Routes
// ------------------------------------------------------------

// Health endpoint — used by Kubernetes liveness / readiness probes
// Returns a simple JSON object so orchestrators know the app is alive
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Single-page app (Vite build) — assets + HTML fallback
app.use(
  express.static(clientDist, {
    index: false,
    fallthrough: true,
  }),
);

app.get('*', (req, res) => {
  res.sendFile(path.join(clientDist, 'index.html'));
});

// ------------------------------------------------------------
// Start the server
// ------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
  console.log(`   Web UI → GET http://localhost:${PORT}/`);
  console.log(`   Health → GET http://localhost:${PORT}/health`);
});
