import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit(value: number): void { // Depósito
        if (value < 0) throw new Error("No accept negative numbers!");
        super.deposit(value + 10)
    }
}