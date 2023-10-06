import express from 'express';
import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT ?? 8080;

const app = express();

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});