# date-pt-br

Datas em formato pt-BR

+ [Instalação](#Instalação)
    + [Scripts](#Scripts)
	+ [Utilização](#Utilização)
+ [Changelog](#Change log)
+ [Funções](#Funções)
	+ [getDay()](#GetDay)
    + [getMonthNumber()](#getMonthNumber)
    + [getMonth()](#getMonth())
    + [getYear()](#getYear())
    + [getWeekdayNumber()](#getWeekdayNumber())
    + [getWeekday()](#getWeekday())
    + [getDate()](#getDate(delimiter)())
    + [getExtendedDate()](#getExtendedDate())
    + [getExtendedWeekdayDate()](#getExtendedWeekdayDate())
    + [getExtendedCityDate()](#getExtendedCityDate(city))
    + [getMonthNumberYear()](#getMonthNumberYear())
    + [getMonthYear()](#getMonthYear())
    + [getHour()](#getHour())
    + [geExtendedtHour()](#geExtendedtHour())
    + [getMinute()](#GetMinute())
    + [getExtendedMinute()](#getExtendedMinute())
    + [getSecond()](#getSecond())
    + [getExtendedSecond()](#getExtendedSecond())
    + [getTime()](#getTime())
    + [getExtendedTime()](#getExtendedTime())
    + [getHourMinute()](#getHourMinute())
    + [getExtendedHourMinute()](#getExtendedHourMinute())

## Instalação

`npm install -S date-pt-br`

### Scripts

Listar todas as funções e retornos

`npm run list-functions`

### Utilização

```javascript
const date = require('date-pt-br')
```

## Change log

Veja as notas de atualização em [CHANGELOG](https://github.com/victorgianvechio/date-pt-br/blob/master/CHANGELOG.md).

## Funções

### getDay()

Retorna o dia do mês **(01 a 31)**

### getMonthNumber()

Retorna o mês em número **(01 a 12)**

### getMonth()

Retorna o mês por extenso. Ex: **Abril**

### getYear()

Retorna o ano completo. Ex: **2019**

### getWeekdayNumber()

Retorna o dia da semana em número **(1 a 7)**

### getWeekday()

Retorna o dia da semana por extenso. Ex: **Segunda-Feira**

### getDate(delimiter)

Retorna a data separada pelo parâmetro delimitador.

**getDate("-")** = **01-04-2019**

Default **getDate()** = **01/04/2019**

### getExtendedDate()

Retorna a data por extenso. Ex: **01 de Abril de 2019**

### getExtendedWeekdayDate()

Retorna a data com dia da semana por extenso. Ex: **Segunda-Feira, 01 de Abril de 2019**

### getExtendedCityDate(city)

Retorna a data por extenso com a cidade passada por parâmetro. Ex: **São Paulo, 01 de Abril de 2019**

### getMonthNumberYear()

Retorna mês e ano. Ex: **04/2019**

### getMonthYear()

Retorna mês por extenso e ano. Ex: **Abril/2019**

### getHour()

Retorna hora **(01 a 23)**

### geExtendedtHour()

Retorna hora por extenso. Ex: **14 horas**

### getMinute()

Retorna minuto **(01 a 59)**

### getExtendedMinute()

Retorna minuto por extenso. Ex: **47 minutos**

### getSecond()

Retorna segundo **(01 a 59)**

### getExtendedSecond()

Retorna segundo por extenso. Ex: **32 segundos**

### getTime()

retorna a hora. Ex: **14:47:32**

### getExtendedTime()

retorna a hora por extenso. Ex: **14 horas e 47 minutos e 32 segundos**

### getHourMinute()

retorna a hora e minuto. Ex: **14:47**

### getExtendedHourMinute()

retorna a hora e minuto por extenso. Ex: **14 horas e 47 minutos**
