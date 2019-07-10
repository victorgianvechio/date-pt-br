# date-pt-br

[![npm](https://img.shields.io/npm/dt/date-pt-br.svg)](https://www.npmjs.com/package/date-pt-br)
[![license](https://img.shields.io/npm/l/date-pt-br.svg)](https://github.com/victorgianvechio/date-pt-br/blob/master/LICENSE)
[![version](https://img.shields.io/npm/v/date-pt-br.svg)](https://github.com/victorgianvechio/date-pt-br/blob/master/CHANGELOG.md)

Get current date in pt-BR or format other dates to pt-BR.

**Table of content**

-   [Installation](#Installation)
    -   [Scripts](#Scripts)
    -   [Usage](#Usage)
-   [Changelog](#Changelog)
-   [Current Date Functions](#CurrentDateFunctions)
    -   [getDay()](#GetDay)
    -   [getMonthNumber()](#getMonthNumber)
    -   [getMonth()](#getMonth)
    -   [getYear()](#getYear)
    -   [getWeekdayNumber()](#getWeekdayNumber)
    -   [getWeekday()](#getWeekday)
    -   [getDate(delimiter)](#getDateDelimiter)
    -   [getExtendedDate()](#getExtendedDate)
    -   [getExtendedWeekdayDate()](#getExtendedWeekdayDate)
    -   [getExtendedCityDate(city)](#getExtendedCityDateCity)
    -   [getMonthNumberYear()](#getMonthNumberYear)
    -   [getMonthYear()](#getMonthYear)
    -   [getHour()](#getHour)
    -   [geExtendedtHour()](#geExtendedtHour)
    -   [getMinute()](#GetMinute)
    -   [getExtendedMinute()](#getExtendedMinute)
    -   [getSecond()](#getSecond)
    -   [getExtendedSecond()](#getExtendedSecond)
    -   [getTime(delimiter)](#getTimeDelimiter)
    -   [getExtendedTime(delimiter)](#getExtendedTimeDelimiter)
    -   [getHourMinute(delimiter)](#getHourMinuteDelimiter)
    -   [getExtendedHourMinute(delimiter)](#getExtendedHourMinuteDelimiter)
    -   [getDateTime(delimiter1,delimiter2,delimiter3)](#getDateTimeDelimiter1-Sep-Delimiter2)
-   [Format Date Functions](#FormatDateFunctions)
    -   [toPtBr(date, delimiter)](#toPtBrDateDelimiter)

---

## Installation

via npm:

```sh
npm i -S date-pt-br
```

### Scripts

list all functions:

```sh
npm run list-functions
```

### Usage

```javascript
const date = require('date-pt-br')
```

## Changelog

see the update notes at [CHANGELOG](https://github.com/victorgianvechio/date-pt-br/blob/master/CHANGELOG.md).

## Current Date Functions

All functions below get the current date in pt-BR format.

### getDay()

-   returns day **(01 a 31)**

```javascript
let val = date.getDay() // => 27
```

### getMonthNumber()

-   returns month number **(01 a 12)**

```javascript
let val = date.getMonthNumber() // => 06
```

### getMonth()

```javascript
let val = date.getMonth() // => Junho
```

| number | month     |
| :----- | :-------- |
| 01     | Janeiro   |
| 02     | Fevereiro |
| 03     | Março     |
| 04     | Abril     |
| 05     | Maio      |
| 06     | Junho     |
| 07     | Julho     |
| 08     | Agosto    |
| 09     | Setembro  |
| 10     | Outubro   |
| 11     | Novembro  |
| 12     | Dezembro  |

### getYear()

```javascript
let val = date.getYear() // => 2019
```

### getWeekdayNumber()

-   returns the number of the week **(1 a 7)**

```javascript
let val = date.getWeekdayNumber() // => 5
```

### getWeekday()

```javascript
let val = date.getWeekday() // => Quinta-Feira
```

| number | weekday       |
| :----- | :------------ |
| 1      | Domingo       |
| 2      | Segunda-Feira |
| 3      | Terça-Feira   |
| 4      | Quarta-Feira  |
| 5      | Quinta-Feira  |
| 6      | Sexta-Feira   |
| 7      | Sábado        |

### getDate(delimiter)

-   {string} **delimiter** - used to separate day, month and year _(optional)_

```javascript
let val = date.getDate() // default => 27/06/2019
let val = date.getDate('-') // => 27-06-2019
```

### getExtendedDate()

```javascript
let val = date.getExtendedDate() // => 27 de Junho de 2019
```

### getExtendedWeekdayDate()

```javascript
let val = date.getExtendedWeekdayDate() // => Quinta-Feira, 27 de Junho de 2019
```

### getExtendedCityDate(city)

```javascript
let val = date.getExtendedCityDate('São Paulo') // => São Paulo, 27 de Junho de 2019
```

### getMonthNumberYear()

```javascript
let val = date.getMonthNumberYear() // => 06/2019
```

### getMonthYear()

```javascript
let val = date.getMonthYear() // => Junho/2019
```

### getHour()

-   return hours **(01 a 23)**

```javascript
let val = date.getHour() // => 08
```

### geExtendedHour()

```javascript
let val = date.geExtendedHour() // => 08 horas
```

### getMinute()

-   return minutes **(01 a 59)**

```javascript
let val = date.getMinute() // => 53
```

### getExtendedMinute()

```javascript
let val = date.getExtendedMinute() // => 53 minutos
```

### getSecond()

-   returns seconds **(01 a 59)**

```javascript
let val = date.getSecond() // => 32
```

### getExtendedSecond()

```javascript
let val = date.getExtendedSecond() // => 32 segundos
```

### getTime(delimiter)

-   {string} **delimiter** - used to separate hours, minutes and seconds _(optional)_

```javascript
let val = date.getTime() // default => 08:53:32
let val = date.getTime('-') // => 08-53-32
```

### getExtendedTime(delimiter)

-   {string} **delimiter** - used to separate hours, minutes and seconds _(optional)_

```javascript
let val = date.getExtendedTime() // default => 08 horas e 53 minutos e 32 segundos
let val = date.getExtendedTime(', ') // => 08 horas, 53 minutos, 32 segundos
```

### getHourMinute(delimiter)

-   {string} **delimiter** - used to separate hours and minutes _(optional)_

```javascript
let val = date.getHourMinute() // default => 08:53
let val = date.getHourMinute('-') // => 08-53
```

### getExtendedHourMinute(delimiter)

-   {string} **delimiter** - used to separate hours and minutes _(optional)_

```javascript
let val = date.getExtendedHourMinute() // default => 08 horas e 53 minutos
let val = date.getExtendedHourMinute(', ') // => 08 horas, 53 minutos
```

### getDateTime(delimiter1, sep, delimiter2)

-   {string} **delimiter1** - used to separate day, month and year _(optional)_
-   {string} **sep** - used to separate date from time _(optional)_
-   {string} **delimiter2** - used to separate hours, minutes and seconds _(optional)_

```javascript
let val = date.getDateTime() // default => 27/06/2019 08:53:32
let val = date.getDateTime('-', ' | ', ':') // => 27-06-2019 | 08:53:32
```

## Format Date Functions

All functions below convert dates to pr-BR.

### toPtBr(date, delimiter)

-   {string} **date** - date to convert _(optional)_
-   {string} **delimiter** - used to separate day, month and year _(optional)_

```javascript
let val = date.toPtBr() // default => 10/07/2019
let val = date.toPtBr('2015-12-19T10:30:00', '-') // => 19-12-2015
```

Copyright ® 2019 Victor Gianvechio
