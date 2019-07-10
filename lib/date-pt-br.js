let day = ''
let monthNumber = ''
let month = ''
let year = ''
let weekdayNumber = ''
let weekday = ''
let hour = ''
let minute = ''
let second = ''
let date = ''

function dateNow(d = new Date()) {
    date = new Date(d)
    //let date = new Date()
    day = date.getDate()
    monthNumber = date.getMonth() + 1
    year = date.getFullYear()
    weekdayNumber = date.getDay() + 1
    hour = date.getHours()
    minute = date.getMinutes()
    second = date.getSeconds()

    if (day.toString().length === 1) day = '0' + day

    if (monthNumber.toString().length === 1) monthNumber = '0' + monthNumber

    if (hour.toString().length === 1) hour = '0' + hour

    if (minute.toString().length === 1) minute = '0' + minute

    if (second.toString().length === 1) second = '0' + second

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

const getDate = (delimiter = '/') => {
    dateNow()
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
    return `${city}, ${day} de ${month} de ${year}`
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

const getTime = (delimiter = ':') => {
    dateNow()
    return `${hour}${delimiter}${minute}${delimiter}${second}`
}

const getHourMinute = (delimiter = ':') => {
    dateNow()
    return `${hour}${delimiter}${minute}`
}

const getExtendedTime = (delimiter = ' e ') => {
    dateNow()
    return `${hour} ${hour !== '01' ? 'horas' : 'hora'}${delimiter}${minute} ${
        minute !== '01' ? 'minutos' : 'minuto'
    }${delimiter}${second} ${second !== '01' ? 'segundos' : 'segundo'}`
}

const getExtendedHourMinute = (delimiter = ' e ') => {
    dateNow()
    return `${hour} ${hour !== '01' ? 'horas' : 'hora'}${delimiter}${minute} ${
        minute !== '01' ? 'minutos' : 'minuto'
    }`
}

const getDateTime = (delimiter1 = '/', sep = ' - ', delimiter2 = ':') => {
    dateNow()
    return `${day}${delimiter1}${monthNumber}${delimiter1}${year}${sep}${hour}${delimiter2}${minute}${delimiter2}${second}`
}

const toPtBR = (d = new Date(), delimiter = '/') => {
    dateNow(d)
    try {
        if (date == 'Invalid Date') throw 'Invalid Date'

        if (day.toString().length === 1) day = '0' + day
        if (monthNumber.toString().length === 1) monthNumber = '0' + monthNumber

        return `${day}${delimiter}${monthNumber}${delimiter}${year}`
    } catch (err) {
        return err
    }
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
    getExtendedHourMinute,
    getDateTime,
    toPtBR
}
