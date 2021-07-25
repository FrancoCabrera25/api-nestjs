import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    secretKey: process.env.SECRET_KEY,
    database: {
      name: process.env.DATABASE_NAME,
      password: process.env.DATABASE_PASSWORD,
    },
  };
});
