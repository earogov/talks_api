"use strict";

export const isProd = process.env.NODE_ENV === "production";
export const port = process.env.PORT || 8080;