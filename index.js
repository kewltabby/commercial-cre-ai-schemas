const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Import the JSON data schema we created
const schemaData = require('./loopnet_schema.json');

app.use(express.json());

// Main endpoint that RapidAPI will contact
app.get('/v1/schema/latest', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({
        status: "active",
        provider: "B2B AI Agent Schemas",
        schema: schemaData
    });
});

// Root check endpoint
app.get('/', (req, res) => {
    res.send('CRE Schema Data Engine is Live and Running!');
});

app.listen(PORT, () => {
    console.log(`Server running smoothly on port ${PORT}`);
});
