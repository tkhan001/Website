const express = require('express');
const app = express();
const port = 3000;

// Get routes
app.get('/', (req, res) => {
    res.sentFile('index.html')
});

// Listen to request on specific port
app.listen(port, () => {
    console.log('Server is running on port ${port}')
})
