import { config } from 'dotenv';
import { resolve } from 'path';

config({ path: resolve(__dirname, '..', '.env.example') });

export const DATABASE_URL = process.env.DATABASE_URL;
