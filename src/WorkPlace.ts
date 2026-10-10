import Employee from './Employee.js';

export class WorkPlace {
    private address: string;
    private name: string;
    private employees: Employee[];

    constructor(address: string, name: string) {
        this.address = address;
        this.name = name;
        this.employees = [];
    }

    public addNewEmployee(emp: Employee): void {
        if (!this.employees.includes(emp)) {
            this.employees.push(emp);
            console.log(`[WorkPlace] Сотрудник ${emp.getName()} добавлен на "${this.name}".`);
        } else {
            console.log(`[WorkPlace] Сотрудник ${emp.getName()} уже привязан к "${this.name}".`);
        }
    }

    public deleteEmployee(emp: Employee): void {
        const index = this.employees.indexOf(emp);
        if (index !== -1) {
            this.employees.splice(index, 1);
            console.log(`[WorkPlace] Сотрудник ${emp.getName()} удалён с "${this.name}".`);
        } else {
            console.log(`[WorkPlace] Сотрудник ${emp.getName()} не найден на "${this.name}".`);
        }
    }

    public modifyEmployee(emp: Employee): void {
        const index = this.employees.findIndex(e => e.getId() === emp.getId());
        if (index !== -1) {
            this.employees[index] = emp;
            console.log(`[WorkPlace] Данные сотрудника с ID ${emp.getId()} обновлены.`);
        } else {
            console.log(`[WorkPlace] Сотрудник с ID ${emp.getId()} не найден для изменения.`);
        }
    }

    public getAddress(): string {
        return this.address;
    }

    public getName(): string {
        return this.name;
    }

    public getEmployeeById(id: number): Employee | null {
        const found = this.employees.find(e => e.getId() === id);
        return found ?? null;
    }

    public getAllEmployees(): Employee[] {
        return [...this.employees];
    }

    public toString(): string {
        return `WorkPlace "${this.name}" (${this.address}), сотрудников: ${this.employees.length}`;
    }
}