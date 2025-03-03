const express = require("express");
const { createServer, request } = require("http");
const WebSocket = require("ws");
const { setupWSConnection } = require("y-websocket/bin/utils");
const dbRoutes = require("./config/db.js");
const { MongodbPersistence } = require("y-mongodb-provider");
const mongoose = require("mongoose");



const app = express();
const PORT = process.env.PORT || 5000; // Change the port if needed

app.use(express.json()); // Middleware to parse JSON requests
app.use("/api", dbRoutes); // Prefix all routes with /api
const cors = require('cors');
app.use(cors());

// MongoDB Connection (for Yjs persistence)
const uri = "mongodb+srv://devanshjaiswal291203:JkcVkZ9mkQmgN2oZ@cluster0.avlaf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(uri)
    .then(() => console.log("MongoDB connected successfully"))
    .catch(err => console.log("MongoDB connection error:", err));

const yMongoDBPersistence = new MongodbPersistence(uri);

const server = createServer(app);

const wss = new WebSocket.Server({server: server});
//Client ka ws bhejo
wss.on("connection", (ws, request) => {
  setupWSConnection(ws, request, { persistence: yMongoDBPersistence})
})

server.listen(PORT, () => {
  console.log(`HTTP server running`);
})

//app.listen(PORT, () => {
//    console.log(`Server running on http://localhost:${PORT}`);
//});
