/* Your Code Here */




function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
      firstName,
      familyName,
      title,
      payPerHour,
      timeInEvents: [],
      timeOutEvents: [],
    };
  }
  
  function createEmployeeRecords(employeeData) {
    return employeeData.map(createEmployeeRecord);
  }

//   createTimeInEvent
//     2) creates the correct type
//     3) extracts the correct date
//     4) extracts the correct hour

//   function createTimeInEvent(employee, dateTime) {
//     const [date, hour] = dateTime.split(" ");
//     employee.timeInEvents.push({
//       type: "TimeIn",
//       date,
//       hour: parseInt(hour, 10),
//     });
//     return employee;
//   }

function createTimeInEvent(dateStamp){
     
    let dateArr = dateStamp.split(' ')
    this.timeInEvents.push({type : "TimeIn",
                            hour: parseInt(dateArr[1]),
                            date: dateArr[0]})
            
    return this                
}
  

//   createTimeOutEvent
//   ✓ creates the correct type
//   ✓ extracts the correct date
//   ✓ extracts the correct hour
function createTimeOutEvent(dateStamp){
     
    let dateArr = dateStamp.split(' ')
    this.timeOutEvents.push({type : "TimeOut",
                            hour: parseInt(dateArr[1]),
                            date: dateArr[0]})
            
    return this                
}
  
function hoursWorkedOnDate(date){
    let logIns, logOuts, logIn, logOut, hoursWorked

    logIns = this.timeInEvents.find((obj1)=> obj1.date === date)
    logOuts = this.timeOutEvents.find((obj1)=> obj1.date === date)

    logIn = parseInt(logIns.hour)
    logOut = parseInt(logOuts.hour)

    return hoursWorked = (logOut - logIn)/100
    
   }
    
function wagesEarnedOnDate(date){
   const hoursWorked = hoursWorkedOnDate.bind(this)

    let pay = (hoursWorked(date) * this.payPerHour)
    return pay
}

function allWagesFor(){
   let dates, pays

   dates = [] 
   pays = []
   const dateObj = this.timeInEvents
   for(let logIn of dateObj){
       dates.push(logIn.date) 
   }

   return dates.reduce((total,date)=> total + wagesEarnedOnDate.call(this,date),0)
}
function findEmployeeByFirstName(srcArray,firstName){
  return srcArray.find(obj => obj.firstName === firstName)
}

function calculatePayroll(array){
   let obj = {}
    let employeePay = array.map(arr => allWagesFor.call(arr))
    return employeePay.reduce((total,value)=> total += value)
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


//  const allWagesFor = function () {
//     const eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     const payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }