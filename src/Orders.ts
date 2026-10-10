import { Customers } from './Customers.js';
import { Employee } from './Employee.js';
import { Goods } from './Goods.js';


export class Orders {
    private orderId: number;
    private customer: Customers;
    private employee: Employee;
    private good: Goods;
    private amount: number;
    private totalCost: number;

    constructor(
        orderId: number,
        customer: Customers,
        employee: Employee,
        good: Goods,
        amount: number
    ) {
        this.orderId = orderId;
        this.customer = customer;
        this.employee = employee;
        this.good = good;
        this.amount = amount;
        this.totalCost = 0;
    }

    public getOrderId(): number {
        return this.orderId;
    }

    public getAmount(): number {
        return this.amount;
    }

    public getTotalCost(): number {
        return this.totalCost;
    }

    public addAmount(amount: number): void {
        if (amount <= 0) {
            console.log(`[Orders] Нельзя добавить отрицательное количество: ${amount}`);
            return;
        }
        this.amount += amount;
    }


    public calcTotalCost(): number {
        this.totalCost = this.amount * this.good.getPrice();
        return this.totalCost;
    }

    public toString(): string {
        return (
            `Заказ #${this.orderId} | Клиент: ${this.customer.getName()} | ` +
            `Сотрудник: ${this.employee.getName()} | Товар: ${this.good.getGoodName()} | ` +
            `Количество: ${this.amount} | Итог: ${this.totalCost}`
        );
    }
}