# Order System

Учебный проект на TypeScript — консольное приложение «Система заказов». Демонстрирует ООП и UML-связи между классами: агрегацию, ассоциацию и зависимость.

## Стек

- Node.js 18+
- TypeScript 5+
- ts-node

## Структура

```
src/
├── CustomerType.ts   
├── WorkPlace.ts      
├── Employee.ts      
├── Goods.ts          
├── Customers.ts      
├── Orders.ts         
└── index.ts          
```

## Установка и запуск

Через ts-node:

```bash
npm install
npm start          
```

Со сборкой:

```bash
npm run build
npm run run
```

## Классы

- **`WorkPlace`** — содержит массив сотрудников (агрегация).
- **`Employee`** — хранит ссылку на рабочее место.
- **`Goods`** — товар с ценой и остатком на складе.
- **`Customers`** — клиент с типом из `CustomerType`.
- **`Orders`** — связывает клиента, сотрудника и товар (ассоциация).

## Скрипты

| Команда | Действие |
|---|---|
| `npm start` | Запуск `src/index.ts` через `ts-node` |
| `npm run build` | Компиляция в `dist/` |
| `npm run run` | Запуск скомпилированного `dist/index.js` |



