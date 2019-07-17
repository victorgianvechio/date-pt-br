# Change Log

## date-pt-br v1.2.0 (17 Jul 2019)

### Huge Updates

-   All codes were refactored;

-   Now date-en-br is a **class** and needs to be **instantiated**;

-   Now all functions have only one **optional** parameter **(date)**. If no date is passed the function will use the current date;

-   Delimiters and sep must be configured after instance;

Ex:

```javascript
const DatePtBR = require('date-pt-br')
const date = new DatePtBR()

myDate.config({
    delimiterDate: '/',
    delimiterTime: ':',
    sepDateTime: ', ',
    sepDate: ' de ',
    sepTime: ' e '
})

date.getDay() // => 17
date.getDay('07/23/2019') // 23
```

#### Removed Functions

-   _getExtendedCityDate(city)_;
-   _toPtBr(date, delimiter)_

it does not make sense since all the functions already do the conversion after this update;

#### New functions

-   _getShortMonth(date)_;
-   _getShortMonthYear(date)_;
-   _getExtendedDateTime(date)_;
-   _config(object)_;
-   _setDefaultConfig()_;

see more about this update at [README](https://github.com/victorgianvechio/date-pt-br/blob/master/README.md).

## date-pt-br v1.1.0 (10 Jul 2019)

-   New function _toPtBr(date, delimiter)_ that convert date to pt-BR;

## date-pt-br v1.0.9 (02 Jul 2019)

-   New function _getDateTime(delimiter1, sep, delimiter2)_ that returns date and time;

## date-pt-br v1.0.8 (01 Jul 2019)

-   Fixed _getDay()_ function that returns '1' instead of '01';
-   Fixed some rules in _.eslint_;

## date-pt-br v1.0.7 (27 Jun 2019)

-   Adjusted README to make it easier to use;

-   Refactored code;

-   Added the _optional_ parameter _delimiter_ in functions:
    -   getTime(_delimiter_)
    -   getExtendedTime(_delimiter_)
    -   getHourMinute(_delimiter_)
    -   getExtendedHourMinute(_delimiter_)

## date-pt-br v1.0.6 (26 Jun 2019)

-   README and code style;

## date-pt-br v1.0.5 (26 Jun 2019)

-   Added script:

```sh
npm run list-functions
```
