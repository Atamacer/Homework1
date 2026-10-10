import { CustomerType } from './CustomerType.js';
import { WorkPlace } from './WorkPlace.js';
import { Employee } from './Employee.js';
import { Goods } from './Goods.js';
import { Customers } from './Customers.js';
import { Orders } from './Orders.js';

function line(title: string): void {
    console.log('\n========================================');
    console.log(title);
    console.log('========================================');
}

line('Создание рабочего места');
const office = new WorkPlace('ул. Ленина, д. 1', 'Головной офис');
console.log(office.toString());

line('Создание сотрудников');
const emp1 = new Employee('Иван', 30, 101, office);
const emp2 = new Employee('Мария', 25, 102, office);
console.log(emp1.toString());
console.log(emp2.toString());

line('Добавление сотрудников на рабочее место');
office.addNewEmployee(emp1);
office.addNewEmployee(emp2);
console.log(office.toString());

line('Поиск сотрудника по ID');
const found = office.getEmployeeById(101);
console.log('Найден:', found ? found.getName() : 'не найден');

line('Создание товаров');
const laptop = new Goods(1, 'Ноутбук', 'ООО Техно', 'Розница', 50, 75000);
const mouse = new Goods(2, 'Мышь', 'ООО Техно', 'Розница', 200, 1500);
console.log(laptop.toString());
console.log(mouse.toString());
console.log('Склад пуст', laptop.isSashEmpty());

line('Создание клиентов');
const client1 = new Customers('Алексей', 40, 1, CustomerType.PermanentCustomer);
const client2 = new Customers('Ольга', 22, 2, CustomerType.NewCustomer);
console.log(client1.toString());
console.log(client2.toString());

line('Создание заказов');
const order1 = new Orders(1001, client1, emp1, laptop, 2);
const order2 = new Orders(1002, client2, emp2, mouse, 5);
console.log(order1.toString());
console.log(order2.toString());

line('Расчёт стоимости заказов');
console.log(`Заказ #1: ${order1.calcTotalCost()} руб.`);
console.log(`Заказ #2: ${order2.calcTotalCost()} руб.`);

line('toString()');
console.log(client1.toString());
console.log(laptop.toString());

line('Изменение количества в заказе #2');
order2.addAmount(3);
console.log(`Новое количество: ${order2.getAmount()}`);
console.log(`Новая стоимость: ${order2.calcTotalCost()} руб.`);

line('Изменение продавца и покупателя у товара');
mouse.setSeller('Новый продавец');
mouse.setBuyer('Новый покупатель');
console.log(mouse.toString());

line('Удаление сотрудника Мария');
office.deleteEmployee(emp2);
console.log(office.toString());

line('Поиск удалённого сотрудника');
const removed = office.getEmployeeById(102);
console.log('Результат:', removed ? removed.getName() : 'не найден');

line('Изменение сотрудника Иван');
const updatedIvan = new Employee('Иван', 31, 101, office);
office.modifyEmployee(updatedIvan);
const check = office.getEmployeeById(101);
console.log('После изменения:', check ? check.toString() : 'не найден');

