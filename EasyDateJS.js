class EasyDate
{
    constructor(day, month, year)
    {
        this.day = day;
        this.year = year;
        this.month = month;
    }

    setDate(day, month, year)
    {
        this.day = day;
        this.year = year;
        this.month = month;
    }

    getDateObject()
    {
        return new Date(this.year, this.month-1, this.day);
    }

    getEpoch()
    {
        return Date.parse(this.getDateObject()) / 1000;
    }

    toString()
    {
        return this.day + "/" + this.month + "/" + this.year;
    }

    static convertDaysToEpoch(days)
    {
        return days * 24 * 60 * 60;
    }

    static compareDates(firstDate, secondDate)
    {
        var firstDateEpoch = firstDate.getEpoch();
        var secondDateEpoch = secondDate.getEpoch();

        if(firstDateEpoch > secondDateEpoch)
        {
            return 1;
        }
        else if (firstDateEpoch == secondDateEpoch)
        {
            return 0;
        }
        else
        {
            return -1;
        }
    }
}