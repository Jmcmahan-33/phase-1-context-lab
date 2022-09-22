/* Your Code Here */
let createEmployeeRecord = function(info) {
    return {
        firstName: info[0],
        familyName: info[1],
        title:info[2],
        payPerHour: info[3],
        timeInEvents: [],
        timeOutEvents: [],
        }   

}

function createEmployeeRecords(employeeInfo) {
    // console.log(employeeInfo)
    return employeeInfo.map(function(info) {
        console.log(info)
        return createEmployeeRecord(info)
    
    })
   
}

// function createTimeInEvent(obj,stamp) {
//     // console.log(parseInt(stamp.split(" ")[1]))
//     const punchIn = {
//         type: "TimeIn",
//         hour: parseInt(stamp.split(" ")[1]),
//         date: stamp.split(" ")[0],

//     }
//     obj.timeInEvents.push(punchIn)
//     // console.log(obj)
//     return obj
// }

function createTimeInEvent(stamp) {
    // console.log(parseInt(stamp.split(" ")[1]))
    let [date, hour] = stamp.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour,10),
        date,

    })
    // console.log(obj)
    return this
}


function createTimeOutEvent(stamp) {
    // console.log(parseInt(stamp.split(" ")[1]))
    let [date, hour] = stamp.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,

    })
    // console.log("hi check me" )
    return this
}

function hoursWorkedOnDate(givenDate) {
    let InEvent = this.timeInEvents.find(function(e) {
        return e.date === givenDate
    })

    let outEvent = this.timeOutEvents.find(function (e) {
        return e.date === givenDate
    })
    return (outEvent.hour - InEvent.hour) / 100
}

function wagesEarnedOnDate(dateGiven) {
    let pay = hoursWorkedOnDate.call(this, dateGiven)
    * this.payPerHour
    return parseFloat(pay.toString())
}



const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(srcArray, firstName){
    console.log("check me", srcArray)
    return srcArray.find(function(record){
        return record.firstName === firstName
    })
}

function calculatePayroll(array) {
console.log("check this Array", array)
return array.reduce(function(note, records){
    return note + allWagesFor.call(records)
},0)

}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// const allWagesFor = function () {
//     const eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     const payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }

