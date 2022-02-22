let url = 'https://www.google.com'
function myFunction(message){
    console.log(message)
}

function welcome(){
    console.log("Welcome to my application. I am Manish and a part of FunctionUp Thorium cohort.")
}

module.exports.url = url;
module.exports.printMessage = myFunction;
module.exports.welcome = welcome;