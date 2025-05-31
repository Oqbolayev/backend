require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://javohir:8nVy0CxAQKZhmy9E82v1OUouppXYWqwK@dpg-d0tfoh63jp1c73ei5dn0-a.oregon-postgres.render.com/javohir',
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
