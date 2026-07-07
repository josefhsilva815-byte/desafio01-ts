export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName(): string {
    return this.name
  }
  getAccNumber(): number {
    return this.accountNumber
  }
  getBalance(): number {
    return this.balance
  }
  getStatus(): boolean {
    return this.status
  }



  deposit(value: number): void { // Depósito
    if(value < 0) throw new Error("No accept negative numbers!");
    this.balance += value
  }

  withdraw(value: number): void { // Saque
    this.validateStatus()
    if(value > this.balance) throw new Error("The balance is insufficient");
    this.balance -= value
  }



  private validateStatus(): boolean {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
