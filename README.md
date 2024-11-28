# TablePage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Description

Для таблицы из 4 строк и 5 колонок.
Данные предоставлены в tableData.ts

- По нажатию кнопки перемешать порядок изменяется произвольно
- В каждой ячейке может быть либо элемент <input type=text>, либо <select></select>, либо просто цифровое или строчное значение.
- По таблице между ячейками можно перемещаться стрелками на клавиатуре.
- При нажатии на Enter переходим в элемент внутри ячейки и можем изменить значение либо выбрать значение из выпадающего списка.
- При повторном нажатии на Enter или Esc возвращаемся на ячейки таблицы для перемещения стрелками по таблице.
