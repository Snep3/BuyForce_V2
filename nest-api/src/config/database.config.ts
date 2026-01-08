// nest-api/src/config/database.config.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig = (): TypeOrmModuleOptions => {
  const isProd = process.env.NODE_ENV === 'production';

  return {
    type: 'postgres',

    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 5432),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,

    // 🔴 חשוב – Neon מחייב SSL
    ssl: {
      rejectUnauthorized: false,
    },

    synchronize: !isProd, // בפרודקשן לא מסנכרנים אוטומטית
    logging: !isProd,

    autoLoadEntities: true,
  };
};
