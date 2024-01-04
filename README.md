# Playground

This is a quick playground on how drizzle works and playing around with it.

The important bits are `package.json` (where utility short scripts live and our dependencies are specified), all the `*.sql` files under `drizzle/` and all the `*.ts` files under `src/`

Under `src/client.ts` that's where we connect to postgres and also set up drizzle

Under `src/schema.ts` that's where we define things like our tables. Whenever any tables are added, deleted, or changed, we run this using `npm run generate-migrations`. This generates SQL files for table stuff under `drizzle/*` using drizzle magic.

Under `src/run-migrations.ts` that's where we run our migrations. This doesn't run every time we run our application, we run it manually indepdently from (before) running our application to make sure the tables are ready beforehand. We run this using `npm run run-migrations`. That just runs this exact file.

Under `src/playground.ts` you have fun using drizzle.
