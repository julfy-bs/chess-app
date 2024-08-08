# Проект: Шахматы

"Шахматы" - MVP приложение для игры вдохновленное приложением chess.com.

Реализованы модели Доски, Клетки, Цвета, Фигур, Игрока. 

Для связи оси координат используется двойное связывание модели Доски и Клетки.


## При разработке использовались технологии:
- [HTML5][html]
- [SASS][sass]
- [JavaScript][js]
- [Vue3][vue]
- [typescript][ts]
- [ESLint][es-lint]

## Идеи для доработки:
- Реализовать шахматные правила:
    + Мата
    + Шаха
    + Пата
- Добавить drag&drop,
- Избавиться от двойного связывания.
- Переписать игру на canvas.

## Как запустить проект локально?

```
git clone git@github.com:julfy-bs/chess-app.git
```
### Установить зависимости проекта

```
npm install
```

### Запустить проект локально

```
npm run serve
```

## Другие доступные команды

### Собрать сборку проекта для деплоя

```
npm run build
```

### Отформатировать код во всех файлах

```
npm run lint
```

&copy; Автор - [Сутужко Богдан][author-portfolio]

[//]: # 'Общие переменные автора'
[author-portfolio]: https://julfy-bs.github.io/portfolio/

[//]: # 'Переменные используемых технологий'
[html]: https://html5.org/
[sass]: https://sass-lang.com/
[js]: https://www.javascript.com/
[vue]: https://vuejs.org/
[ts]: https://www.typescriptlang.org/
[es-lint]: https://eslint.org/
