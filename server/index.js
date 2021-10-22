const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('<h1>Products API</h1>'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
