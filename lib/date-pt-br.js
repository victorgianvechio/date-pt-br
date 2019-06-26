let day = ''
let monthNumber = ''
let month = ''
let year = ''
let weekdayNumber = ''
let weekday = ''
let hour = ''
let minute = ''
let second = ''

function dateNow () {
    let date = new Date()
    day = date.getDate()
    monthNumber = date.getMonth() + 1
    year = date.getFullYear()
    weekdayNumber = date.getDay() + 1
    hour = date.getHours()
    minute = date.getMinutes()
    second = date.getSeconds()

    if (monthNumber.toString().length == 1) monthNumber = '0' + monthNumber

    if (hour.toString().length == 1) hour = '0' + hour

    if (minute.toString().length == 1) minute = '0' + minute

    if (second.toString().length == 1) second = '0' + second

    switch (weekdayNumber) {
    case 1:
        weekday = 'Domingo'
        break
    case 2:
        weekday = 'Segunda-Feira'
        break
    case 3:
        weekday = 'Terça-Feira'
        break
    case 4:
        weekday = 'Quarta-Feira'
        break
    case 5:
        weekday = 'Quinta-Feira'
        break
    case 6:
        weekday = 'Sexta-Feira'
        break
    case 7:
        weekday = 'Sábado'
        break
    }

    switch (monthNumber) {
    case '01':
        month = 'Janeiro'
        break
    case '02':
        month = 'Fevereiro'
        break
    case '03':
        month = 'Março'
        break
    case '04':
        month = 'Abril'
        break
    case '05':
        month = 'Maio'
        break
    case '06':
        month = 'Junho'
        break
    case '07':
        month = 'Julho'
        break
    case '08':
        month = 'Agosto'
        break
    case '09':
        month = 'Setembro'
        break
    case '10':
        month = 'Outubro'
        break
    case '11':
        month = 'Novembro'
        break
    case '12':
        month = 'Dezembro'
        break
    }
}

const getDay = () => {
    dateNow()
    return day
}

const getMonthNumber = () => {
    dateNow()
    return monthNumber
}

const getMonth = () => {
    dateNow()
    return month
}

const getYear = () => {
    dateNow()
    return year
}

const getWeekdayNumber = () => {
    dateNow()
    return weekdayNumber
}

const getWeekday = () => {
    dateNow()
    return weekday
}

const getDate = delimiter => {
    dateNow()

    if (delimiter === undefined) delimiter = '/'

    return `${day}${delimiter}${monthNumber}${delimiter}${year}`
}

const getExtendedDate = () => {
    dateNow()
    return `${day} de ${month} de ${year}`
}

const getExtendedWeekdayDate = () => {
    dateNow()
    return `${weekday}, ${day} de ${month} de ${year}`
}

const getExtendedCityDate = city => {
    dateNow()
    return `${city ? city : 'inputCity'}, ${day} de ${month} de ${year}`
}

const getMonthYear = () => {
    dateNow()
    return `${month}/${year}`
}

const getMonthNumberYear = () => {
    dateNow()
    return `${monthNumber}/${year}`
}

const getHour = () => {
    dateNow()
    return hour
}

const getExtendedHour = () => {
    dateNow()
    return `${hour} ${hour !== '01' ? 'horas' : 'hora'}`
}

const getMinute = () => {
    dateNow()
    return minute
}

const getExtendedMinute = () => {
    dateNow()
    return `${minute} ${minute !== '01' ? 'minutos' : 'minuto'}`
}

const getSecond = () => {
    dateNow()
    return second
}

const getExtendedSecond = () => {
    dateNow()
    return `${second} ${second !== '01' ? 'segundos' : 'segundo'}`
}

const getTime = () => {
    dateNow()
    return `${hour}:${minute}:${second}`
}

const getHourMinute = () => {
    dateNow()
    return `${hour}:${minute}`
}

const getExtendedTime = () => {
    dateNow()
    return `${hour} ${hour !== '01' ? 'horas' : 'hora'} e ${minute} ${
        minute !== '01' ? 'minutos' : 'minuto'
    } e ${second} ${second !== '01' ? 'segundos' : 'segundo'}`
}

const getExtendedHourMinute = () => {
    dateNow()
    return `${hour} ${hour !== '01' ? 'horas' : 'hora'} e ${minute} ${
        minute !== '01' ? 'minutos' : 'minuto'
    }`
}

module.exports = {
    getDay,
    getMonthNumber,
    getMonth,
    getYear,
    getWeekdayNumber,
    getWeekday,
    getDate,
    getExtendedDate,
    getExtendedWeekdayDate,
    getExtendedCityDate,
    getMonthYear,
    getMonthNumberYear,
    getHour,
    getMinute,
    getSecond,
    getTime,
    getHourMinute,
    getExtendedHour,
    getExtendedMinute,
    getExtendedSecond,
    getExtendedTime,
    getExtendedHourMinute
}
