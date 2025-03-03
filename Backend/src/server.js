const express = require("express");
const bodyParser = require("express");
const dbRoutes = require("./config/db.js");

const app = express();
const PORT = process.env.PORT || 5000; // Change the port if needed

app.use(express.json()); // Middleware to parse JSON requests
app.use("/api", dbRoutes); // Prefix all routes with /api

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
