const DatePtBR = require('../lib/date-pt-br.js')
const date = require('../lib/date-pt-br-old')

console.log(`\ngetDay() =>`, date.getDay())
console.log(`\ngetMonthNumber() =>`, date.getMonthNumber())
console.log(`\ngetMonth() =>`, date.getMonth())
console.log(`\ngetYear() =>`, date.getYear())
console.log(`\ngetWeekdayNumber() =>`, date.getWeekdayNumber())
console.log(`\ngetWeekday() =>`, date.getWeekday())
console.log(`\ngetDate() =>`, date.getDate())
console.log(`\ngetDate('-') =>`, date.getDate('-'))
console.log(`\ngetExtendedDate() =>`, date.getExtendedDate())
console.log(`\ngetExtendedWeekdayDate() =>`, date.getExtendedWeekdayDate())
console.log(`\ngetExtendedCityDate() =>`, date.getExtendedCityDate('São Paulo'))
console.log(`\ngetMonthYear() =>`, date.getMonthYear())
console.log(`\ngetMonthNumberYear() =>`, date.getMonthNumberYear())
console.log(`\ngetHour() =>`, date.getHour())
console.log(`\ngetMinute() =>`, date.getMinute())
console.log(`\ngetSecond() =>`, date.getSecond())
console.log(`\ngetTime() =>`, date.getTime())
console.log(`\ngetTime('-') =>`, date.getTime('-'))
console.log(`\ngetHourMinute() =>`, date.getHourMinute())
console.log(`\ngetHourMinute('-') =>`, date.getHourMinute('-'))
console.log(`\ngetExtendedHour() =>`, date.getExtendedHour())
console.log(`\ngetExtendedMinute() =>`, date.getExtendedMinute())
console.log(`\ngetExtendedSecond() =>`, date.getExtendedSecond())
console.log(`\ngetExtendedTime() =>`, date.getExtendedTime())
console.log(`\ngetExtendedTime(', ') =>`, date.getExtendedTime(', '))
console.log(`\ngetExtendedHourMinute() =>`, date.getExtendedHourMinute())
console.log(`\ngetExtendedHourMinute(', ') =>`, date.getExtendedHourMinute(', '))
console.log(`\ngetDateTime() =>`, date.getDateTime())
console.log(`\ngetDateTime('-', ' | ', ':') =>`, date.getDateTime('-', ' | ', ':'))
console.log(`\ntoPtBr('2015-12-19T10:30:00') =>`, date.toPtBR('2015-12-19T10:30:00'))
console.log(`\ntoPtBr('2015-12-19T10:30:00', '-') =>`, date.toPtBR('2015-12-19T10:30:00', '-'))
