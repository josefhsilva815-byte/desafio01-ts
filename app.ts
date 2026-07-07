import { CompanyAccount } from './class/CompanyAccount'
import { NewAccount } from './class/NewAccount';
import { PeopleAccount } from './class/PeopleAccount'

const people = new PeopleAccount(12, 'Carlos', 132);

console.log(`
  Nome: ${people.getName()}
  Número da Conta: ${people.getAccNumber()}
  Saldo: R$${people.getBalance()}
  Status: ${people.getStatus()}
`)

people.deposit(50)
console.log(`
  Deposito de R$50
  Saldo atual: R$${people.getBalance()}
`) // Expected balance: 50

people.withdraw(25)
console.log(`
  Saque de R$25
  Saldo atual: R$${people.getBalance()}
`) // Expected balance: 25

console.log("===================================")

const enterprise = new CompanyAccount('Nestle', 435);

console.log(`
  Nome: ${enterprise.getName()}
  Número da Conta: ${enterprise.getAccNumber()}
  Saldo: R$${enterprise.getBalance()}
  Status: ${enterprise.getStatus()}
`)

enterprise.deposit(500000);
console.log(`
  Deposito de R$500000
  Saldo atual: R$${enterprise.getBalance()}
`) // Expected balance: 500000

enterprise.withdraw(15000);
console.log(`
  Saque de R$15000
  Saldo atual: R$${enterprise.getBalance()}
`) // Expected balance: 485000

enterprise.getLoan(50000)
console.log(`
  Empréstimo de R$50000
  Saldo atual: R$${enterprise.getBalance()}
`) // Expected balance: 535000

console.log("===================================")

const newPeople = new NewAccount('Gabriel', 312);

console.log(`
  Nome: ${newPeople.getName()}
  Número da Conta: ${newPeople.getAccNumber()}
  Saldo: R$${newPeople.getBalance()}
  Status: ${newPeople.getStatus()}
`)

newPeople.deposit(100);
console.log(`
  Deposito de R$100
  Saldo atual: R$${newPeople.getBalance()}
`) // Expected balance: 110

newPeople.withdraw(20);
console.log(`
  Saque de R$20
  Saldo atual: R$${newPeople.getBalance()}
`) // Expected balance: 100
