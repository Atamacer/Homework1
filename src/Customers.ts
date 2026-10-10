import { CustomerType } from './CustomerType.js';

export class Customers {
    private name: string;
    private age: number;
    private id: number;
    private customerType: CustomerType;

    constructor(name: string, age: number, id: number, customerType: CustomerType) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.customerType = customerType;
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    public getCustomerId(): number {
        return this.id;
    }

    public getCustomerType(): CustomerType {
        return this.customerType;
    }

    public toString(): string {
        return `Customer "${this.name}", Age: ${this.age}, ID: ${this.id}, Тип: ${this.customerType}`;
    }
}