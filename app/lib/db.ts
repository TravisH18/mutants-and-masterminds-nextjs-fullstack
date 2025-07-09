import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL || 'postgres://user:password@localhost:5432/mydb',
});

export default pool;