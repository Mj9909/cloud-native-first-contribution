const statusEl = document.getElementById('status');
const checkBtn = document.getElementById('checkBtn');

async function checkHealth() {
  statusEl.textContent = 'Checking...';
  statusEl.className = '';

  try {
    const res = await fetch('/health');
    if (!res.ok) {
      throw new Error('Unhealthy response');
    }

    const data = await res.json();
    statusEl.textContent = data.status === 'ok' ? 'Healthy' : 'Unknown';
    statusEl.className = data.status === 'ok' ? 'ok' : 'bad';
  } catch (err) {
    statusEl.textContent = 'Unavailable';
    statusEl.className = 'bad';
  }
}

checkBtn.addEventListener('click', checkHealth);
checkHealth();
