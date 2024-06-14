import express from 'express';

import bodyParser from 'body-parser';

import jsonServer from 'json-server';
const app = express();

const router = jsonServer.router('./jsonserver/db.json');
const middlewares = jsonServer.defaults();

app.use(bodyParser.json());

app.use(middlewares);

app.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 100);
    });
    next();
});
app.put('/update-columns', (req, res) => {
    try {
        const reqColumns = req.body.map((item) => {
            const { cards, ...rest } = item;
            return rest;
        });

        if (!Array.isArray(reqColumns)) {
            throw new Error('Данные должны быть представлены в виде массива');
        }

        const currentState = router.db.getState();

        const boardId = req.body[0]['boardId'];
        const otherColumns = currentState.columns.filter(
            (column) => column['boardId'] !== boardId,
        );
        let newColumns = [...otherColumns, ...reqColumns];

        currentState.columns = newColumns;
        router.db.set('columns', newColumns).write();

        res.sendStatus(200);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/update-cards', (req, res) => {
    try {
        const reqColumns = req.body;
        let reqCards = [];
        let cardsTexts = [];
        const currentState = router.db.getState();

        reqColumns.forEach((column) => {
            if (column.cards) {
                if (column.cards.length) {
                    for (const card of column.cards) {
                        if (!cardsTexts.includes(card.card_text)) {
                            cardsTexts.push(card.card_text);
                        }
                    }
                }
                reqCards = [...reqCards, ...column.cards];
            }
        });

        const otherCards = currentState.cards.filter(
            (card) => !cardsTexts.includes(card.card_text),
        );

        const newCards = [...otherCards, ...reqCards];
        console.log(newCards);

        currentState.cards = newCards;
        router.db.set('cards', newCards).write();

        if (!Array.isArray(newCards)) {
            throw new Error('Данные должны быть представлены в виде массива');
        }

        res.sendStatus(200);
    } catch (error) {
        res.status(500).jsonp({ error: error.message });
    }
});

app.delete('/delete-board/:id', (req, res) => {
    try {
        const boardId = parseInt(req.params.id, 10);
        const currentState = router.db.getState();

        // console.log(currentState);
        console.log(typeof boardId, typeof currentState.boards[0].id);

        const boardToDelete = currentState.boards.find(board => board.id === boardId);
        if (!boardToDelete) {
            throw new Error('Board not found');
        }

        const columnsToDelete = currentState.columns.filter(column => column.boardId === boardId);

        columnsToDelete.forEach(column => {
            const cardsToDelete = currentState.cards.filter(card => card.columnId === column.id);
            cardsToDelete.forEach(card => {
                const cardIndex = currentState.cards.findIndex(c => c.id === card.id);
                if (cardIndex !== -1) {
                    currentState.cards.splice(cardIndex, 1);
                }
            });

            const columnIndex = currentState.columns.findIndex(col => col.id === column.id);
            if (columnIndex !== -1) {
                currentState.columns.splice(columnIndex, 1);
            }
        });


        const boardIndex = currentState.boards.findIndex(board => board.id === boardId);
        if (boardIndex !== -1) {
            currentState.boards.splice(boardIndex, 1);
        }

        router.db.set('boards', currentState.boards).write();
        router.db.set('columns', currentState.columns).write();
        router.db.set('cards', currentState.cards).write();

        res.sendStatus(200);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.use(router);

app.listen(5000, () => {
    console.log('JSON Server is running');
});
