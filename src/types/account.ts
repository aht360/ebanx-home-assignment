export interface Account {
  id: string;
  balance: number;
}

export enum EventType {
  DEPOSIT = "deposit",
  WITHDRAW = "withdraw",
  TRANSFER = "transfer",
}

export interface DepositEvent {
  type: EventType.DEPOSIT;
  destination: string;
  amount: number;
}

export interface WithdrawEvent {
  type: EventType.WITHDRAW;
  origin: string;
  amount: number;
}

export interface TransferEvent {
  type: EventType.TRANSFER;
  origin: string;
  destination: string;
  amount: number;
}

export type Event = DepositEvent | WithdrawEvent | TransferEvent;

export interface CreatedDepositEvent {
  destination: Account;
}

export interface CreatedWithdrawEvent {
  origin: Account;
}

export interface CreatedTransferEvent {
  origin: Account;
  destination: Account;
}

export type CreatedEvent =
  | CreatedDepositEvent
  | CreatedWithdrawEvent
  | CreatedTransferEvent;
