import {
  Account,
  CreatedDepositEvent,
  CreatedTransferEvent,
  CreatedWithdrawEvent,
  DepositEvent,
  TransferEvent,
  WithdrawEvent,
} from "../types/account.ts";
import { NotFoundError } from "../errors/NotFoundError.ts";

export class AccountModel {
  private accounts: Map<string, Account>;

  constructor() {
    this.accounts = new Map();
  }

  reset() {
    this.accounts.clear();
  }

  getBalance(accountId: string): number {
    const account = this.accounts.get(accountId);

    if (!account) {
      throw new NotFoundError("Account not found");
    }

    return account.balance;
  }

  createDepositEvent(event: DepositEvent): CreatedDepositEvent {
    let account = this.accounts.get(event.destination);

    if (!account) {
      account = {
        id: event.destination,
        balance: event.amount,
      };

      this.accounts.set(event.destination, account);
    } else {
      account.balance += event.amount;
    }

    return {
      destination: account,
    };
  }

  createWithdrawEvent(event: WithdrawEvent): CreatedWithdrawEvent {
    const account = this.accounts.get(event.origin);

    if (!account) {
      console.log("account not found");
      throw new NotFoundError("Account not found");
    }

    account.balance -= event.amount;

    return {
      origin: account,
    };
  }

  createTransferEvent(event: TransferEvent): CreatedTransferEvent {
    const originAccount = this.accounts.get(event.origin);
    let destinationAccount = this.accounts.get(event.destination);

    if (!originAccount) {
      throw new NotFoundError("Origin account not found");
    }

    originAccount.balance -= event.amount;

    if (!destinationAccount) {
      destinationAccount = {
        id: event.destination,
        balance: event.amount,
      };

      this.accounts.set(event.destination, destinationAccount);
    } else {
      destinationAccount.balance += event.amount;
    }

    return {
      origin: originAccount,
      destination: destinationAccount,
    };
  }
}
