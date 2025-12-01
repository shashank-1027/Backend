import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/test';

async function start() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('DB connected');
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  } catch (err) {
    console.error('Failed to connect to DB or start server:', err);
    process.exit(1);
  }
}

start();