import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

// this connects us to the postgres db. it's our raw connection
// your database url should go as the first string parameter
const sql_connection = postgres("...", { max: 1 });
// this creates the drizzle utility so we can run queries
const drizzle_client = drizzle(sql_connection);

// this allows us to use our created drizzle util and our raw db connection in other files
export { drizzle_client, sql_connection };
