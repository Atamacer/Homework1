import type { WorkPlace } from './WorkPlace.js';

export default class Employee {
    private name: string;
    private age: number;
    private workPlace: WorkPlace;
    private id: number;

    constructor(name: string, age: number, id: number, workPlace: WorkPlace) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.workPlace = workPlace;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    public getWorkPlace(): WorkPlace {
        return this.workPlace;
    }

    public toString(): string {
        return `Employee "${this.name}", Age: ${this.age}, ID: ${this.id}`;
    }
}

