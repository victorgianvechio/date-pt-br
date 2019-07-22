const http = require('http')

class DatePtBR {
    constructor() {
        // Date and Time variables
        this.day = ''
        this.monthNumber = ''
        this.month = ''
        this.year = ''
        this.weekdayNumber = ''
        this.weekday = ''
        this.hour = ''
        this.minute = ''
        this.second = ''
        this.descHour = ''
        this.descMinute = ''
        this.descSecond = ''
        this.date = ''

        // Locale variables
        this.city = ''
        this.region = ''
        this.shortRegion = ''
        this.country = ''
        this.shortCountry = ''
        this.timezone = ''
        this.zipcode = ''

        // Date validations variables
        this.isDateValid = true
        this.invalidDate = 'Invalid Date'

        // Config variables
        this.setDefaultConfig()
    }

    // Set default config variables
    setDefaultConfig() {
        this.delimiterDate = '/'
        this.delimiterTime = ':'
        this.sepDateTime = ', '
        this.sepDate = ' de '
        this.sepTime = ' e '
    }

    // Alter config variables
    config(newCfg) {
        this.delimiterDate = newCfg.delimiterDate || '/'
        this.delimiterTime = newCfg.delimiterTime || ':'
        this.sepDateTime = newCfg.sepDateTime || ', '
        this.sepDate = newCfg.sepDate || ' de '
        this.sepTime = newCfg.sepTime || ' e '
    }

    // Main function
    dateNow(date) {
        try {
            this.isDateValid = true
            this.date = new Date(date)

            if (this.date == 'Invalid Date') throw new Error(`${date} is not a valid date`)

            this.day = this.date.getDate()
            this.monthNumber = this.date.getMonth() + 1
            this.year = this.date.getFullYear()
            this.weekdayNumber = this.date.getDay() + 1
            this.hour = this.date.getHours()
            this.minute = this.date.getMinutes()
            this.second = this.date.getSeconds()

            if (this.day.toString().length === 1) this.day = '0' + this.day

            if (this.monthNumber.toString().length === 1) this.monthNumber = '0' + this.monthNumber

            if (this.hour.toString().length === 1) this.hour = '0' + this.hour

            if (this.minute.toString().length === 1) this.minute = '0' + this.minute

            if (this.second.toString().length === 1) this.second = '0' + this.second

            if (this.hour !== '01') this.descHour = 'horas'
            else this.descHour = 'hora'

            if (this.minute !== '01') this.descMinute = 'minutos'
            else this.descMinute = 'minuto'

            if (this.second !== '01') this.descSecond = 'segundos'
            else this.descSecond = 'segundo'

            switch (this.weekdayNumber) {
                case 1:
                    this.weekday = 'Domingo'
                    break
                case 2:
                    this.weekday = 'Segunda-Feira'
                    break
                case 3:
                    this.weekday = 'Terça-Feira'
                    break
                case 4:
                    this.weekday = 'Quarta-Feira'
                    break
                case 5:
                    this.weekday = 'Quinta-Feira'
                    break
                case 6:
                    this.weekday = 'Sexta-Feira'
                    break
                case 7:
                    this.weekday = 'Sábado'
                    break
            }

            switch (String(this.monthNumber)) {
                case '01':
                    this.month = 'Janeiro'
                    break
                case '02':
                    this.month = 'Fevereiro'
                    break
                case '03':
                    this.month = 'Março'
                    break
                case '04':
                    this.month = 'Abril'
                    break
                case '05':
                    this.month = 'Maio'
                    break
                case '06':
                    this.month = 'Junho'
                    break
                case '07':
                    this.month = 'Julho'
                    break
                case '08':
                    this.month = 'Agosto'
                    break
                case '09':
                    this.month = 'Setembro'
                    break
                case '10':
                    this.month = 'Outubro'
                    break
                case '11':
                    this.month = 'Novembro'
                    break
                case '12':
                    this.month = 'Dezembro'
                    break
            }
        } catch (err) {
            this.isDateValid = false
        }
    }

    // Date Functions
    getDay(date = new Date()) {
        this.dateNow(date)
        return this.isDateValid ? this.day : this.invalidDate
    }

    getMonthNumber(date = new Date()) {
        this.dateNow(date)
        return this.isDateValid ? this.monthNumber : this.invalidDate
    }

    getMonth(date = new Date()) {
        this.dateNow(date)
        return this.isDateValid ? this.month : this.invalidDate
    }

    getShortMonth(date = new Date()) {
        this.dateNow(date)
        return this.isDateValid ? String(this.month).substr(0, 3) : this.invalidDate
    }

    getYear(date = new Date()) {
        this.dateNow(date)
        return this.isDateValid ? this.year : this.invalidDate
    }

    getShortYear(date = new Date()) {
        this.dateNow(date)
        return this.isDateValid ? String(this.year).substr(2, 4) : this.invalidDate
    }

    getWeekdayNumber(date = new Date()) {
        this.dateNow(date)
        return this.isDateValid ? this.weekdayNumber : this.invalidDate
    }

    getWeekday(date = new Date()) {
        this.dateNow(date)
        return this.isDateValid ? this.weekday : this.invalidDate
    }

    getDate(date = new Date()) {
        this.dateNow(date)
        return this.isDateValid
            ? `${this.day}${this.delimiterDate}${this.monthNumber}${this.delimiterDate}${this.year}`
            : this.invalidDate
    }

    getExtendedDate(date = new Date()) {
        this.dateNow(date)
        return this.isDateValid
            ? `${this.day}${this.sepDate}${this.month}${this.sepDate}${this.year}`
            : this.invalidDate
    }

    getExtendedWeekdayDate(date = new Date()) {
        this.dateNow(date)
        return this.isDateValid
            ? `${this.weekday}, ${this.day}${this.sepDate}${this.month}${this.sepDate}${this.year}`
            : this.invalidDate
    }

    getMonthYear(date = new Date()) {
        this.dateNow(date)
        return this.isDateValid
            ? `${this.month}${this.delimiterDate}${this.year}`
            : this.invalidDate
    }

    getShortMonthYear(date = new Date()) {
        this.dateNow(date)
        return this.isDateValid
            ? `${String(this.month).substr(0, 3)}${this.delimiterDate}${this.year}`
            : this.invalidDate
    }

    getShortMonthShortYear(date = new Date()) {
        this.dateNow(date)
        return this.isDateValid
            ? `${String(this.month).substr(0, 3)}${this.delimiterDate}${String(this.year).substr(
                  2,
                  4
              )}`
            : this.invalidDate
    }

    getMonthNumberYear(date = new Date()) {
        this.dateNow(date)
        return this.isDateValid
            ? `${this.monthNumber}${this.delimiterDate}${this.year}`
            : this.invalidDate
    }

    getHour(date = new Date()) {
        this.dateNow(date)
        return this.isDateValid ? this.hour : this.invalidDate
    }

    getExtendedHour(date = new Date()) {
        this.dateNow(date)
        return this.isDateValid ? `${this.hour} ${this.descHour}` : this.invalidDate
    }

    getMinute(date = new Date()) {
        this.dateNow(date)
        return this.isDateValid ? this.minute : this.invalidDate
    }

    getExtendedMinute(date = new Date()) {
        this.dateNow(date)
        return this.isDateValid ? `${this.minute} ${this.descMinute}` : this.invalidDate
    }

    getSecond(date = new Date()) {
        this.dateNow(date)
        return this.isDateValid ? this.second : this.invalidDate
    }

    getExtendedSecond(date = new Date()) {
        this.dateNow(date)
        return this.isDateValid ? `${this.second} ${this.descSecond}` : this.invalidDate
    }

    getTime(date = new Date()) {
        this.dateNow(date)
        return this.isDateValid
            ? `${this.hour}${this.delimiterTime}${this.minute}${this.delimiterTime}${this.second}`
            : this.invalidDate
    }

    getHourMinute(date = new Date()) {
        this.dateNow(date)
        return this.isDateValid
            ? `${this.hour}${this.delimiterTime}${this.minute}`
            : this.invalidDate
    }

    getExtendedTime(date = new Date()) {
        this.dateNow(date)
        return this.isDateValid
            ? `${this.hour} ${this.descHour}${this.sepTime}${this.minute} ${this.descMinute}${
                  this.sepTime
              }${this.second} ${this.descSecond}`
            : this.invalidDate
    }

    getExtendedHourMinute(date = new Date()) {
        this.dateNow(date)
        return this.isDateValid
            ? `${this.hour} ${this.descHour}${this.sepTime}${this.minute} ${this.descMinute}`
            : this.invalidDate
    }

    getDateTime(date = new Date()) {
        this.dateNow(date)
        return this.isDateValid
            ? `${this.day}${this.delimiterDate}${this.monthNumber}${this.delimiterDate}${
                  this.year
              }${this.sepDateTime}${this.hour}${this.delimiterTime}${this.minute}${
                  this.delimiterTime
              }${this.second}`
            : this.invalidDate
    }

    getExtendedDateTime(date = new Date()) {
        this.dateNow(date)
        return this.isDateValid
            ? `${this.day}${this.sepDate}${this.month}${this.sepDate}${this.year}${
                  this.sepDateTime
              }${this.hour} ${this.descHour}${this.sepTime}${this.minute} ${this.descMinute}${
                  this.sepTime
              }${this.second} ${this.descSecond}`
            : this.invalidDate
    }

    async getExtendedCityDate(date = new Date()) {
        this.dateNow(date)
        await this.getCity()
        return this.isDateValid
            ? `${this.city}, ${this.day}${this.sepDate}${this.month}${this.sepDate}${this.year}`
            : this.invalidDate
    }

    async getExtendedRegionDate(date = new Date()) {
        this.dateNow(date)
        await this.getRegion()
        return this.isDateValid
            ? `${this.region}, ${this.day}${this.sepDate}${this.month}${this.sepDate}${this.year}`
            : this.invalidDate
    }

    async getExtendedShortRegionDate(date = new Date()) {
        this.dateNow(date)
        await this.getShortRegion()
        return this.isDateValid
            ? `${this.shortRegion}, ${this.day}${this.sepDate}${this.month}${this.sepDate}${
                  this.year
              }`
            : this.invalidDate
    }

    async getExtendedCountryDate(date = new Date()) {
        this.dateNow(date)
        await this.getCountry()
        return this.isDateValid
            ? `${this.country}, ${this.day}${this.sepDate}${this.month}${this.sepDate}${this.year}`
            : this.invalidDate
    }

    async getExtendedShortCountryDate(date = new Date()) {
        this.dateNow(date)
        await this.getShortCountry()
        return this.isDateValid
            ? `${this.shortCountry}, ${this.day}${this.sepDate}${this.month}${this.sepDate}${
                  this.year
              }`
            : this.invalidDate
    }

    async getCity() {
        if (this.city === '') await this.getLocaleInfo()
        return this.city
    }

    async getRegion() {
        if (this.region === '') await this.getLocaleInfo()
        return this.region
    }

    async getShortRegion() {
        if (this.shortRegion === '') await this.getLocaleInfo()
        return this.shortRegion
    }

    async getCountry() {
        if (this.country === '') await this.getLocaleInfo()
        return this.country
    }

    async getShortCountry() {
        if (this.shortCountry === '') await this.getLocaleInfo()
        return this.shortCountry
    }

    async getTimezone() {
        if (this.timezone === '') await this.getLocaleInfo()
        return this.timezone
    }

    async getZipcode() {
        if (this.zipcode === '') await this.getLocaleInfo()
        return this.zipcode
    }

    // Get locale informations
    async getLocaleInfo() {
        return new Promise(async (resolve, reject) => {
            let req = await http.get('http://ip-api.com/json', res => {
                let data = ''
                let jsonData = ''

                res.on('data', stream => {
                    data += stream
                })
                res.on('end', () => {
                    jsonData = JSON.parse(data)

                    this.city = jsonData.city
                    this.region = jsonData.regionName
                    this.shortRegion = jsonData.region
                    this.country = jsonData.country
                    this.shortCountry = jsonData.countryCode
                    this.timezone = jsonData.timezone
                    this.zipcode = jsonData.zip

                    resolve()
                })
            })

            req.on('error', e => {
                console.log(e.message)
                reject(e.message)
            })
        })
    }
}

module.exports = DatePtBR
