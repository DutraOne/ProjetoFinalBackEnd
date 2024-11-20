import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://livraria_4hyx_user:7TKYpn7VNK0Z6d1dHGYX5gDle3mSgdnE@dpg-csfaa7tds78s738qm440-a.oregon-postgres.render.com/livraria_4hyx';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;