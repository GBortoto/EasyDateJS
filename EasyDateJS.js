class EasyDate
{
    // IMPORTANT: This class handles the epoch in SECONDS, not MILLISECONDS
    constructor(day, month, year)
    {
        this.day = day;
        this.year = year;
        this.month = month;
    }

    // Returns a native Date object based on the values stored in the instance
    getDateObject()
    {
        // IMPORTANT: JS counts months from 0 to 11, so december is represented as 0
        //              For this reason, the local variable month has to be processed
        var month = this.month == 12 ? 0 : this.month;
        return new Date(this.year, month, this.day);
    }

    // Returns how many seconds there were between the first of january of 1970 and the current date
    getEpoch()
    {
        return Date.parse(this.getDateObject()) / 1000;
    }

    // Returns a string in the format "dd/mm/yyyy"
    toString()
    {
        return this.day + "/" + this.month + "/" + this.year;
    }

    // Static method - Returns the length of N days in seconds
    static convertDaysToEpoch(numberOfDays)
    {
        return numberOfDays * 24 * 60 * 60;
    }

    // Static method - Given two dates, compare the two and tell which one comes first
    // Possible outputs:
    //  1   --> firstDate > secondDate
    //  0   --> firstDate = secondDate
    //  -1  --> firstDate < secondDate
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