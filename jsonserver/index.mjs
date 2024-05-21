// Подключаем необходимые модули
import express from "express";

import bodyParser from "body-parser";

import jsonServer from "json-server";
// Создаем приложение Express
const app = express();

// Подключаем JSON Server и определяем маршруты
const router = jsonServer.router('./jsonserver/db.json');
const middlewares = jsonServer.defaults();

// Используем middleware для обработки JSON-запросов
app.use(bodyParser.json());

// Используем middleware JSON Server
app.use(middlewares);

// Обработчик для обновления таблицы columns

app.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 100);
    });
    next();
});
app.put('/update-columns', (req, res) => {
    try {
        const reqColumns = req.body.map(
            item => {
                const {cards, ...rest} = item
                return rest
            }
        );

        if (!Array.isArray(reqColumns)) {
            throw new Error('Данные должны быть представлены в виде массива');
        }

        const currentState = router.db.getState();

        const boardId = req.body[0]['boardId'];
        const otherColumns = currentState.columns.filter((column) => column['boardId'] !== boardId);
        // console.log(currentState.columns);
        let newColumns = [...otherColumns, ...reqColumns]
        console.log(newColumns);

        currentState.columns = newColumns;
        router.db.set('columns', newColumns).write();

        res.sendStatus(200);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/update-cards', (req, res) => {
    try {
        const allColumns = req.body;
        console.log(allColumns);
        let newCards = [];

        allColumns.forEach(column => {
            // Проверяем, есть ли у текущего элемента свойство cards
            if (column.cards) {
                // Если есть, добавляем карточки этой колонки в общий массив карточек
                newCards = [...newCards, ...column.cards];
            }
        });

        if (!Array.isArray(newCards)) {
            throw new Error('Данные должны быть представлены в виде массива');
        }

        const currentState = router.db.getState();
        currentState.cards = newCards;

        router.db.set('cards', newCards).write();

        res.sendStatus(200);
    } catch (error) {
        res.status(500).jsonp({ error: error.message });
    }
});

app.use(router);

app.listen(5005, () => {
    console.log('JSON Server is running');
});