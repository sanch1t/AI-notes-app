import type { Config } from "drizzle-kit";
import * as dotenv from 'dotenv'

dotenv.config({
    path: ".env",
  }); //telling this file where .env is for db_url


export default {
    driver:'pg', //postgres
    schema:'./src/lib/db/schema.ts',
    dbCredentials:{
        connectionString: process.env.DATABASE_URL!,
    },
} satisfies Config

//npx drizzle-kit studio
//to see all the tables