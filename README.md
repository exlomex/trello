## Trello clone

![trello-demo](https://github.com/exlomex/trello/assets/41301635/a229033e-3801-40eb-8cf0-d084a05bf755)

### Запуск проекта

```
npm install - установка зависимостей
dev:withJsonServer - jsonServer + frontend (dev mode)
```

## Основной стек

- TypeScript (v5)
- Next.js (v14) 
- RTK - Redux Toolkit (v2)

### Другие библиотеки

- Jest (v29)
- React Testing Library
- Storybook (v8)
- React-dnd (v13)
- Beautiful-dnd (v16)
- Headless-ui (v2)
- Eslint (v8)
- Stylelint (v16)
- Prettier (v3)

---

### Скрипты

- `npm run start-dev-server` - запуск jsonServer,
- `npm run start:dev:server--new` - запуск jsonServer (with custom routes),
- `npm run dev` - запуск frontend (dev),
- `npm run dev:withJsonServer` - jsonServer + frontend (dev mode),
- `npm run build` - сборка в production,
- `npm run start` - frontend (prod mode),
- `npm run prod:withJsonServer` - jsonServer + frontend (prod mode),
- `npm run lint:ts` - проверка ts файлов линтером,
- `npm run lint:ts:fix` - исправление ts файлов линтером,
- `npm run lint:scss` - проверка scss файлов style линтером,
- `npm run lint:scss:fix` - исправление scss файлов style линтером,
- `npm run unit` - запуск unit тестов,

[//]: # (- "storybook": "storybook dev -p 6006",)
[//]: # (- "build-storybook": "storybook build",)

---

[//]: # (## Архитектура проекта)

[//]: # ()
[//]: # (Проект написан в соответствии с методологией Feature sliced design)

[//]: # ()
[//]: # (Ссылка на документацию - [feature sliced design]&#40;https://feature-sliced.design/docs/get-started/tutorial&#41;)

[//]: # ()
[//]: # (----)

[//]: # (## Тесты)

[//]: # ()
[//]: # (В проекте используются 4 вида тестов:)

[//]: # (1&#41; Обычные unit тесты на jest - `npm run test:unit`)

[//]: # (2&#41; Тесты на компоненты с React testing library -`npm run test:unit`)

[//]: # (3&#41; Скриншотное тестирование с loki `npm run test:ui`)

[//]: # (4&#41; e2e тестирование с Cypress `npm run test:e2e`)

[//]: # ()
[//]: # (Подробнее о тестах - [документация тестирование]&#40;/docs/tests.md&#41;)

[//]: # ()
[//]: # (----)

### Линтинг

В проекте используется eslint для проверки typescript и stylelint для проверки файлов со стилями.

##### Запуск линтеров
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером


[//]: # (### CI pipeline и pre commit хуки)

[//]: # ()
[//]: # (Конфигурация github actions находится в /.github/workflows.)

[//]: # (В ci прогоняются все виды тестов, сборка проекта и сторибука, линтинг.)

[//]: # ()
[//]: # (В прекоммит хуках проверяем проект линтерами, конфиг в /.husky)

[//]: # ()
[//]: # (----)
