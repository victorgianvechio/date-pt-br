# *date-pt-br*

[![npm](https://img.shields.io/npm/dt/date-pt-br.svg)](https://www.npmjs.com/package/date-pt-br)
![monthly npm downloads for date-pt-br](https://img.shields.io/npm/dm/date-pt-br.svg)
[![license](https://img.shields.io/npm/l/date-pt-br.svg)](https://github.com/victorgianvechio/date-pt-br/blob/master/LICENSE)
[![NPM Version](https://badge.fury.io/js/date-pt-br.svg?style=flat)](https://npmjs.org/package/date-pt-br)
[![Build Status](https://travis-ci.org/victorgianvechio/date-pt-br.svg?branch=master)](https://travis-ci.org/victorgianvechio/date-pt-br)
[![Dependency Status](https://david-dm.org/victorgianvechio/date-pt-br.svg)](https://david-dm.org/victorgianvechio/date-pt-br)


Get current date in pt-BR or format other dates to pt-BR.

**Table of content**

-   [Installation](#installation)
    -   [Scripts](#scripts)
    -   [Usage](#usage)
-   [Changelog](#changelog)
-   [Config Functions](#config-functions)
    -   [config(object)](#configobject)
    -   [setDefaultConfig()](#setdefaultconfig)
-   [Date Functions](#date-functions)
    -   [getDay(date)](#getdaydate)
    -   [getMonthNumber(date)](#getmonthnumberdate)
    -   [getMonth(date)](#getmonthdate)
    -   [getShortMonth(date)](#getshortmonthdate)
    -   [getYear(date)](#getyeardate)
    -   [getShortYear(date)](#getshortyeardate)
    -   [getWeekdayNumber(date)](#getweekdaynumberdate)
    -   [getWeekday(date)](#getweekdaydate)
    -   [getDate(date)](#getdatedate)
    -   [getExtendedDate(date)](#getextendeddatedate)
    -   [getExtendedWeekdayDate(date)](#getextendedweekdaydatedate)
    -   [getMonthNumberYear(date)](#getmonthnumberyeardate)
    -   [getMonthYear(date)](#getmonthyeardate)
    -   [getShortMonthYear(date)](#getshortmonthyeardate)
    -   [getShortMonthShortYear(date)](#getshortmonthshortyeardate)
    -   [getHour(date)](#gethourdate)
    -   [getExtendedHour(date)](#getextendedhourdate)
    -   [getMinute(date)](#getminutedate)
    -   [getExtendedMinute(date)](#getextendedminutedate)
    -   [getSecond(date)](#getseconddate)
    -   [getExtendedSecond(date)](#getextendedseconddate)
    -   [getTime(date)](#gettimedate)
    -   [getExtendedTime(date)](#getextendedtimedate)
    -   [getHourMinute(date)](#gethourminutedate)
    -   [getExtendedHourMinute(date)](#getextendedhourminutedate)
    -   [getDateTime(date)](#getdatetimedate)
    -   [getExtendedDateTime(date)](#getextendeddatetimedate)
    -   [getExtendedCityDate(date)](#getextendedcitydatedate)
    -   [getExtendedRegionDate(date)](#getextendedregiondatedate)
    -   [getExtendedShortRegionDate(date)](#getextendedshortregiondatedate)
    -   [getExtendedCountryDate(date)](#getextendedcountrydatedate)
    -   [getExtendedShortCountryDate(date)](#getextendedshortcountrydatedate)
-   [Current Locale Functions](#current-locale-functions)
    -   [getCity()](#getcity)
    -   [getRegion()](#getregion)
    -   [getShortRegion()](#getshortregion)
    -   [getCountry()](#getcountry)
    -   [getShortCountry()](#getshortcountry)
    -   [getTimezone()](#gettimezone)
    -   [getZipcode()](#getzipcode)
-   [License](#license)

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

delimiters and sep are used by the functions.

-   {string} **delimiterDate** - used to separate day, month and year

    -   default: **' / '**
    -   e.g.: 02 **/** 11 **/** 2019

-   {string} **delimiterTime** - used to separate hours, minutes and seconds

    -   default: **' : '**
    -   e.g.: 08 **:** 53 **:** 20

-   {string} **sepDateTime** - used to separate date and time

    -   default: **' , '**
    -   e.g.: 02/01/2019 **,** 08:53:20

-   {string} **sepDate** - used to separate date

    -   default: **' de '**
    -   e.g.: 02 **de** Janeiro **de** 2019

-   {string} **sepTime** - used to separate time

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

### getExtendedHour(date)

```javascript
let val = date.getExtendedHour() // => 08 horas
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
let val = date.getExtendedDateTime() // => 27 de Junho de 2019, 08 horas e 53 minutos e 32 segundos
```

### getExtendedCityDate(date)

_asynchronous function_

```javascript
let val = await date.getExtendedCityDate() // =>  Marília, 22 de Julho de 2019
```

### getExtendedRegionDate(date)

_asynchronous function_

```javascript
let val = await date.getExtendedRegionDate() // =>  São Paulo, 22 de Julho de 2019
```

### getExtendedShortRegionDate(date)

_asynchronous function_

```javascript
let val = await date.getExtendedShortRegionDate() // =>  SP, 22 de Julho de 2019
```

### getExtendedCountryDate(date)

_asynchronous function_

```javascript
let val = await date.getExtendedCountryDate() // =>  Brazil, 22 de Julho de 2019
```

### getExtendedShortCountryDate(date)

_asynchronous function_

```javascript
let val = await date.getExtendedShortCountryDate() // =>  BR, 22 de Julho de 2019
```

## Current Locale Functions

All functions bellow are _asynchronous_ and returns current locale informations.

### getCity()

_asynchronous function_

```javascript
let val = await date.getCity() // => Marília
```

### getRegion()

_asynchronous function_

```javascript
let val = await date.getRegion() // => São Paulo
```

### getShortRegion()

_asynchronous function_

```javascript
let val = await date.getShortRegion() // => SP
```

### getCountry()

_asynchronous function_

```javascript
let val = await date.getCountry() // => Brazil
```

### getShortCountry()

_asynchronous function_

```javascript
let val = await date.getShortCountry() // => BR
```

### getTimezone()

_asynchronous function_

```javascript
let val = await date.getTimezone() // => America/Sao_Paulo
```

### getZipcode()

_asynchronous function_

```javascript
let val = await date.getZipcode() // => 17350-000
```

## License

MIT License

Copyright ® 2019 Victor Gianvechio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.