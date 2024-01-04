import { eq } from "drizzle-orm";
import { drizzle_client, sql_connection } from "./client";
import { users } from "./schema";

async function main() {
  // insert a test record that has me
  await drizzle_client
    // tell drizzle what table we want to put it in
    .insert(users)
    // tell drizzle the data
    .values({
      id: 1,
      name: "Zaid A",
      is_zaid: true,
      phone_number: 177111771,
    });

  // get that record we just inserted
  const get_zaid = await drizzle_client
    .select()
    // tell drizzle what table
    .from(users)
    // tell drizzle what our WHERE condition is.
    // eq is a helper function from drizzle that helps us make
    // the equivalent of = in sql. This checks if the id property is
    // equal to the thing on the right side
    .where(eq(users.id, 1));

  console.log(get_zaid);

  const get_nonexistent = await drizzle_client
    .select()
    .from(users)
    .where(eq(users.id, 2));

  console.log(get_nonexistent);

  await drizzle_client
    .update(users)
    // tell drizzle what new data
    .set({
      phone_number: 2,
    })
    // make another where condition
    .where(eq(users.id, 1));

  await sql_connection.end();
}

main();
