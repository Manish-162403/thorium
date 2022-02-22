function trim1(a){
    //let a = "   functionUp   "
    const b = a.trim()
    console.log(b)
}
    function chotu(a){
        let ab = a.toLowerCase()
        console.log(ab)
    }

    function bda(a){
        let bs = a.toUpperCase()
        console.log(bs)
    }
    
    
    


module.exports.myTrim = trim1;
module.exports.smallLetter = chotu;
module.exports.captialLetter = bda;