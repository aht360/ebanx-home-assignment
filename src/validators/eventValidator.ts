import { Event, EventType } from "../types/account.ts";
import { ErrorMessages } from "../constants/errorMessages.ts";

export function validateEventType(event: Event): string | null {
  if (!event.type) {
    return ErrorMessages.EVENT_TYPE_REQUIRED;
  }

  if (!Object.values(EventType).includes(event.type)) {
    return ErrorMessages.INVALID_EVENT_TYPE;
  }

  return null;
}

export function validateAmount(event: Event): string | null {
  if (typeof event.amount !== "number" || event.amount <= 0) {
    return ErrorMessages.INVALID_AMOUNT;
  }

  return null;
}

export function validateDeposit(event: Event): string | null {
  if (
    event.type === EventType.DEPOSIT &&
    (!event.destination || !event.amount)
  ) {
    return ErrorMessages.INVALID_DEPOSIT;
  }

  return null;
}

export function validateWithdraw(event: Event): string | null {
  if (event.type === EventType.WITHDRAW && (!event.origin || !event.amount)) {
    return ErrorMessages.INVALID_WITHDRAW;
  }

  return null;
}

export function validateTransfer(event: Event): string | null {
  if (
    event.type === EventType.TRANSFER &&
    (!event.origin || !event.destination || !event.amount)
  ) {
    return ErrorMessages.INVALID_TRANSFER;
  }

  return null;
}
