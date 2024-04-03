export class Transaction {
  type: TransactionType;
  sent = 0;
  received = 0;
  timestamp?: Date;
  blockHeight?: number;
}

export enum TransactionType {
  Send,
  Receive
}
