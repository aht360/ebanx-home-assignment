export const ErrorMessages = {
  INVALID_JSON: "Invalid JSON body",
  EVENT_TYPE_REQUIRED: "Event type is required",
  INVALID_EVENT_TYPE:
    "Invalid event type. Must be one of: deposit, withdraw, transfer",
  INVALID_AMOUNT: "Amount must be a positive number",
  INVALID_DEPOSIT: "Destination and amount are required for deposit",
  INVALID_WITHDRAW: "Origin and amount are required for withdraw",
  INVALID_TRANSFER: "Origin, destination and amount are required for transfer",
} as const;
