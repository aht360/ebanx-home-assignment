import { Context, Next } from "@hono/hono";

export async function validateBalanceRequest(c: Context, next: Next) {
  const accountId = c.req.query("account_id");

  if (!accountId) {
    return c.json({ error: "account_id is required" }, 400);
  }

  await next();
}
