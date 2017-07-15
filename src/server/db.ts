"use strict";

import * as knex from "knex";
export const db = knex({
  client: "pg",
  connection: process.env.DATABASE_URL,
  migrations: {
    tableName: "migrations",
  },
  debug: process.env.DATABASE_DEBUG === "true",
});
