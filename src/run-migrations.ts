import { migrate } from "drizzle-orm/postgres-js/migrator";
import { drizzle_client, sql_connection } from "./client";

async function main() {
  // runs our migrations from the drizzle folder
  await migrate(drizzle_client, { migrationsFolder: "./drizzle" });

  // closes our raw sql connection
  await sql_connection.end();
}

main();
