import 'dotenv/config';
// utils entry (keep for future helper exports)
export {};

import mongoose from "mongoose";
import{ DB_NAME } from "./constants.js";


connectDB();