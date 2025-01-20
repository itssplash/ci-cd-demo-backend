const express = require('express');
const app = express();

// Sample API endpoint
app.get('/api/message', (req, res) => {
    res.json({ message: "Hello from the Node.js Backend!" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
