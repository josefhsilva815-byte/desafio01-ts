import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan(value: number): void { // Empréstimo
    if(!super.getStatus()) throw new Error("Invalid account!");
    this.deposit(value);
  }
}
