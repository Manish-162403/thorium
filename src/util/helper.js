let theDay  = new Date().toLocaleDateString()
const d = new Date();
let month = d.getMonth();
function getBatchInfo(message){
    console.log(message);
}

module.exports.dateInfo= theDay;
module.exports.month = month;
module.exports.batchInfo= getBatchInfo;
