const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Queen-MD WhatsApp Bot is running successfully!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// බොට්ගේ මුල් index.js ෆයිල් එක ක්‍රියාත්මක කිරීම
require('./index.js');
