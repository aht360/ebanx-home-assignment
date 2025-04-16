import { Context, Next } from "@hono/hono";
import { Event } from "../types/account.ts";
import { ErrorMessages } from "../constants/errorMessages.ts";
import {
  validateEventType,
  validateAmount,
  validateDeposit,
  validateWithdraw,
  validateTransfer,
} from "../validators/eventValidator.ts";

export async function validateEventRequest(c: Context, next: Next) {
  try {
    const event = await c.req.json<Event>();

    if (!event) {
      return c.json({ error: ErrorMessages.INVALID_JSON }, 400);
    }

    const validations = [
      validateEventType(event),
      validateAmount(event),
      validateDeposit(event),
      validateWithdraw(event),
      validateTransfer(event),
    ];

    const error = validations.find((error) => error !== null);

    if (error) {
      return c.json({ error }, 400);
    }

    await next();
  } catch (_error) {
    return c.json({ error: ErrorMessages.INVALID_JSON }, 400);
  }
}
