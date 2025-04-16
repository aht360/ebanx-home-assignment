import { Context } from "@hono/hono";
import { AccountService } from "../services/accountService.ts";
import { Event } from "../types/account.ts";

export class AccountController {
  constructor(private accountService: AccountService) {}

  getBalance(c: Context) {
    const accountId = c.req.query("account_id")!;
    const balance = this.accountService.getBalance(accountId);
    return c.json(balance, 200);
  }

  async createEvent(c: Context) {
    const event = await c.req.json<Event>();
    const result = this.accountService.createEvent(event);
    return c.json(result, 201);
  }
}
