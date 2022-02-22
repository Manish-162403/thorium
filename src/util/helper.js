function dateInfo(){
    let a = newDate()
    const newDate = a.getDate();
    console.log(dateInfo)
}


function month(){
    const currentMonth = a.getMonth()
    console.log("" + currentMonth) 
}

function batchInfo(){
    let batchName = "Thorium"
    let week = "w3"
    let day = "D1"
    let infoBatch = " " + batchName + " #" + week + day + "the topic for today is Nodejs module system"
    console.log(infoBatch)
}

module.exports.dateInfo=dateInfo;
module.exports.month = month;
module.exports.batchInfo= batchInfo;