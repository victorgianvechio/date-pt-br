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
-   [Config Functions](#Config-Functions)
    -   [config(object)](#configObject)
    -   [setDefaultConfig()](#setDefaultConfig)
-   [Date Functions](#Date-Functions)
    -   [getDay(date)](#GetDayDate)
    -   [getMonthNumber(date)](#getMonthNumberDate)
    -   [getMonth(date)](#getMonthDate)
    -   [getShortMonth(date)](#getShortMonthDate)
    -   [getYear(date)](#getYearDate)
    -   [getWeekdayNumber(date)](#getWeekdayNumberDate)
    -   [getWeekday(date)](#getWeekdayDate)
    -   [getDate(date)](#getDateDate)
    -   [getExtendedDate(date)](#getExtendedDateDate)
    -   [getExtendedWeekdayDate(date)](#getExtendedWeekdayDateDate)
    -   [getMonthNumberYear(date)](#getMonthNumberYearDate)
    -   [getMonthYear(date)](#getMonthYearDate)
    -   [getShortMonthYear(date)](#getShortMonthYearDate)
    -   [getHour(date)](#getHourDate)
    -   [geExtendedtHour(date)](#geExtendedtHourDate)
    -   [getMinute(date)](#GetMinuteDate)
    -   [getExtendedMinute(date)](#getExtendedMinuteDate)
    -   [getSecond(date)](#getSecondDate)
    -   [getExtendedSecond(date)](#getExtendedSecondDate)
    -   [getTime(date)](#getTimeDate)
    -   [getExtendedTime(date)](#getExtendedTimeDate)
    -   [getHourMinute(date)](#getHourMinuteDate)
    -   [getExtendedHourMinute(date)](#getExtendedHourMinuteDate)
    -   [getDateTime(date)](#getDateTimeDate)
    -   [getExtendedDateTime(date)](#getExtendedDateTimeDate)

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
const DatePtBR = require('date-pt-br')
const date = new DatePtBR()
```

## Changelog

see the update notes at [CHANGELOG](https://github.com/victorgianvechio/date-pt-br/blob/master/CHANGELOG.md).

## Config Functions

### config(object)

-   set delimiters and sep that are used by the functions.

-   {string} **delimiterDate** - used to separate day, month and year. 

    -   Default **/**
    -   Ex: 02 **/** 11 **/** 2019

-   {string} **delimiterTime** - used to separate hours, minutes and seconds.

    -   Default **:**
    -   Ex: 08 **:** 53 **:** 20

-   {string} **sepDateTime** - used to separate date and time.

    -   Default **', '**
    -   Ex: 02/01/2019 **,** 08:53:20

-   {string} **sepDate** - used to separate date. 

    -   Default **de**
    -   Ex: 02 **de** Janeiro **de** 2019

-   {string} **sepDate** - used to separate time. 

    -   Default **e**
    -   Ex: 08 horas **e** 53 minutos **e** 20 segundos

```javascript
const DatePtBR = require('date-pt-br')
const date = new DatePtBR()

date.config({
    delimiterDate: '/',
    delimiterTime: ':',
    sepDateTime: ', ',
    sepDate: ' de ',
    sepTime: ' e '
})
```

### setDefaultConfig()

-   set default config

```javascript
date.setDefaultConfig()

// delimiterDate: '/',
// delimiterTime: ':',
// sepDateTime: ', ',
// sepDate: ' de ',
// sepTime: ' e '
```

## Date Functions

All functions below are receive an optional date as a parameter. If no date is passed the function uses the current date.

If the date passed is invalid the functions will return **'Invalid Date'**.

-   {string} **date** - a date _(optional)_

### getDay(date)

-   returns day **(01 a 31)**

```javascript
let val = date.getDay() // => 27
```

### getMonthNumber(date)

-   returns month number **(01 a 12)**

```javascript
let val = date.getMonthNumber() // => 06
```

### getMonth(date)

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

### getShortMonth(date)

```javascript
let val = date.getShortMonth() // default => Jun
```

### getYear(date)

```javascript
let val = date.getYear() // => 2019
```

### getWeekdayNumber(date)

-   returns the number of the week **(1 a 7)**

```javascript
let val = date.getWeekdayNumber() // => 5
```

### getWeekday(date)

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

### getDate(date)

```javascript
let val = date.getDate() // default => 27/06/2019
```

### getExtendedDate(date)

```javascript
let val = date.getExtendedDate() // => 27 de Junho de 2019
```

### getExtendedWeekdayDate(date)

```javascript
let val = date.getExtendedWeekdayDate() // => Quinta-Feira, 27 de Junho de 2019
```

### getMonthNumberYear(date)

```javascript
let val = date.getMonthNumberYear() // => 06/2019
```

### getMonthYear(date)

```javascript
let val = date.getMonthYear() // => Junho/2019
```

### getShortMonthYear(date)

```javascript
let val = date.getShortMonthYear() // default => Jun/2019
```

### getHour(date)

-   return hours **(01 a 23)**

```javascript
let val = date.getHour() // => 08
```

### geExtendedHour(date)

```javascript
let val = date.geExtendedHour() // => 08 horas
```

### getMinute(date)

-   return minutes **(01 a 59)**

```javascript
let val = date.getMinute() // => 53
```

### getExtendedMinute(date)

```javascript
let val = date.getExtendedMinute() // => 53 minutos
```

### getSecond(date)

-   returns seconds **(01 a 59)**

```javascript
let val = date.getSecond() // => 32
```

### getExtendedSecond(date)

```javascript
let val = date.getExtendedSecond() // => 32 segundos
```

### getTime(date)

```javascript
let val = date.getTime() // default => 08:53:32
```

### getExtendedTime(date)

```javascript
let val = date.getExtendedTime() // default => 08 horas e 53 minutos e 32 segundos
```

### getHourMinute(date)

```javascript
let val = date.getHourMinute() // default => 08:53
```

### getExtendedHourMinute(date)

```javascript
let val = date.getExtendedHourMinute() // default => 08 horas e 53 minutos
```

### getDateTime(date)

```javascript
let val = date.getDateTime() // default => 27/06/2019 08:53:32
```

### getExtendedDateTime(date)

```javascript
let val = date.getDateTime() // default => 27 de Junho de 2019, 08 horas e 53 minutos e 32 minutos
```

Copyright ® 2019 Victor Gianvechio
