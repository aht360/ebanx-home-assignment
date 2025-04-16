import { Context } from "@hono/hono";
import { NotFoundError } from "../errors/NotFoundError.ts";

export function errorHandler(error: Error, c: Context) {
  if (error instanceof NotFoundError) {
    return c.json(0, 404);
  }

  return c.json({ error: "Internal server error" }, 500);
}
