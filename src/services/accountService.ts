import { AccountModel } from "../models/accountModel.ts";
import { CreatedEvent, EventType, Event } from "../types/account.ts";

export class AccountService {
  constructor(private accountModel: AccountModel) {}

  reset() {
    this.accountModel.reset();
  }

  getBalance(accountId: string): number {
    return this.accountModel.getBalance(accountId);
  }

  createEvent(event: Event): CreatedEvent {
    if (event.type === EventType.DEPOSIT) {
      return this.accountModel.createDepositEvent(event);
    }

    if (event.type === EventType.WITHDRAW) {
      return this.accountModel.createWithdrawEvent(event);
    }

    if (event.type === EventType.TRANSFER) {
      return this.accountModel.createTransferEvent(event);
    }

    throw new Error("Invalid event type");
  }
}
