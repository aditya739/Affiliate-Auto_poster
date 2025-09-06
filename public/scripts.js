document.getElementById('postForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const platform = document.getElementById('platform').value;
  const postContent = document.getElementById('postContent').value;

  const response = await fetch('/api/schedulePost', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ platform, postContent })
  });

  const result = await response.json();
  const statusMessage = document.getElementById('statusMessage');
  if (result.success) {
    statusMessage.innerHTML = '<p style="color: green;">Post scheduled successfully!</p>';
  } else {
    statusMessage.innerHTML = '<p style="color: red;">Failed to schedule post.</p>';
  }
});
