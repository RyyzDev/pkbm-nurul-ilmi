const express = require('express');

//server functino init
async function startServer() {
  const app = express();
  const PORT = 8000;

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });

}

startServer();