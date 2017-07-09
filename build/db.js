"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const knex = require("knex");
exports.db = knex({
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
        tableName: "migrations",
    },
    debug: process.env.DATABASE_DEBUG === "true",
});
//# sourceMappingURL=db.js.map