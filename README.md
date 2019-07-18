# *date-pt-br*
====

[![npm](https://img.shields.io/npm/dt/date-pt-br.svg)](https://www.npmjs.com/package/date-pt-br)
[![license](https://img.shields.io/npm/l/date-pt-br.svg)](https://github.com/victorgianvechio/date-pt-br/blob/master/LICENSE)
[![version](https://img.shields.io/npm/v/date-pt-br.svg)](https://github.com/victorgianvechio/date-pt-br/blob/master/CHANGELOG.md)


[![Build Status](https://travis-ci.org/dwyl/date-pt-br.svg?branch=master)](https://travis-ci.org/dwyl/date-pt-br)
[![Test Coverage](https://codeclimate.com/github/dwyl/date-pt-br/badges/coverage.svg)](https://codeclimate.com/github/dwyl/date-pt-br)
[![Code Climate](https://codeclimate.com/github/dwyl/date-pt-br/badges/gpa.svg)](https://codeclimate.com/github/dwyl/date-pt-br)
[![Dependency Status](https://david-dm.org/dwyl/date-pt-br.svg)](https://david-dm.org/dwyl/date-pt-br)
[![Node version](https://img.shields.io/node/v/date-pt-br.svg?style=flat)](http://nodejs.org/download/)
[![NPM Version](https://badge.fury.io/js/date-pt-br.svg?style=flat)](https://npmjs.org/package/date-pt-br)

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
    -   [getShortYear(date)](#getShortYearDate)
    -   [getWeekdayNumber(date)](#getWeekdayNumberDate)
    -   [getWeekday(date)](#getWeekdayDate)
    -   [getDate(date)](#getDateDate)
    -   [getExtendedDate(date)](#getExtendedDateDate)
    -   [getExtendedWeekdayDate(date)](#getExtendedWeekdayDateDate)
    -   [getMonthNumberYear(date)](#getMonthNumberYearDate)
    -   [getMonthYear(date)](#getMonthYearDate)
    -   [getShortMonthYear(date)](#getShortMonthYearDate)
    -   [getShortMonthShortYear(date)](#getShortMonthShortYearDate)
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

    -   default: **' / '**
    -   e.g.: 02 **/** 11 **/** 2019

-   {string} **delimiterTime** - used to separate hours, minutes and seconds.

    -   default: **' : '**
    -   e.g.: 08 **:** 53 **:** 20

-   {string} **sepDateTime** - used to separate date and time.

    -   default: **' , '**
    -   e.g.: 02/01/2019 **,** 08:53:20

-   {string} **sepDate** - used to separate date. 

    -   default: **' de '**
    -   e.g.: 02 **de** Janeiro **de** 2019

-   {string} **sepDate** - used to separate time. 

    -   default: **' e '**
    -   e.g.: 08 horas **e** 53 minutos **e** 20 segundos

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

```javascript
date.setDefaultConfig()

// delimiterDate: '/',
// delimiterTime: ':',
// sepDateTime: ', ',
// sepDate: ' de ',
// sepTime: ' e '
```

## Date Functions

All functions below receive an **optional** date as a parameter. If no date is passed the function uses the **current** date.

-   {string} **date** - accepts various formats _(optional)_

**e.g.**:

```javascript
date.getDateTime('2012-01-26T13:51:50.417-07:00') // => 26/01/2012, 18:51:50

date.getTime('05/07/2019 08:54:32') // => 08:54:32

date.getDate('October 15, 1996 05: 35: 32') // => 15/10/1996

date.getExtendedWeekdayDate('2017-09-08T15:25:53Z') // => Sexta-Feira, 08 de Setembro de 2017

date.getMonthNumber('05 October 2011 14:48 UTC') // => 10

date.getDateTime('07/24/2015') // => 24/07/2018, 00:00:00

date.getWeekday('05 October 2011 14:48 UTC') // => Quarta-Feira

date.getExtendedTime('Wed Oct 05 2011 16:48:00 GMT+0200 (CEST)' // => 11 horas e 48 minutos e 00 segundos

date.getShortMonthYear('2011-10-05T14:48:00.000Z') // => Out/2011

date.getDay('24HJERH87LK4') // => Invalid Date
```

If the date passed is invalid the functions will return **'Invalid Date'**.

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
let val = date.getShortMonth() // => Jun
```

| number | month |
| :----- | :-----|
| 01     | Jan   |
| 02     | Fev   |
| 03     | Mar   |
| 04     | Abr   |
| 05     | Mai   |
| 06     | Jun   |
| 07     | Jul   |
| 08     | Ago   |
| 09     | Set   |
| 10     | Out   |
| 11     | Nov   |
| 12     | Dez   |

### getYear(date)

```javascript
let val = date.getYear() // => 2019
```

### getShortYear(date)

```javascript
let val = date.getShortYear('07/18/2019') // => 19
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
let val = date.getDate() // => 27/06/2019
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
let val = date.getShortMonthYear() // => Jun/2019
```

### getShortMonthShortYear(date)

```javascript
let val = date.getShortMonthYear() // => Jun/19
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
let val = date.getTime() // => 08:53:32
```

### getExtendedTime(date)

```javascript
let val = date.getExtendedTime() // => 08 horas e 53 minutos e 32 segundos
```

### getHourMinute(date)

```javascript
let val = date.getHourMinute() // => 08:53
```

### getExtendedHourMinute(date)

```javascript
let val = date.getExtendedHourMinute() // => 08 horas e 53 minutos
```

### getDateTime(date)

```javascript
let val = date.getDateTime() // => 27/06/2019 08:53:32
```

### getExtendedDateTime(date)

```javascript
let val = date.getDateTime() // => 27 de Junho de 2019, 08 horas e 53 minutos e 32 segundos
```

Copyright ® 2019 Victor Gianvechio
