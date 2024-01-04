import { pgTable, boolean, integer, text } from "drizzle-orm/pg-core";

// this is how you define a table in drizzle
export const users = pgTable("users", {
  // in drizzle, we format things like an object
  // the left side is what we'll call the property in javascript
  // the right side is the data type with the name of the row we want it to have in the database
  id: integer("id"),
  name: text("name"),
  // the left and right side don't always need to have the same name
  phone_number: integer("pnumber"),
  is_zaid: boolean("is_zaid"),
});
