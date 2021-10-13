//named function
function named() {
    //code to run
}
const arrow = () => {
    //code to run
}

//document.getElementById('myId').addEventListener('click', () => {
    // what you want to happen when this element is clicked
    //method is a function that lives in something else. addEventListener is a method
    //document is an object 
    //.getElementByID is a function that lives inside of document
    //.addEventListener is a function as an argument
    //this is what callback functions are
    //CALLBACK function is a function that gets invoked within another function
    //HIGHER ORDER function is what invokes the Callback
//})

//define a CALLBACK function 
const callback= () => {
    console.log("callback is invoked!! 👾")
}

// define a HIGHER ORDER function
const higherOrder = (pizza) => {
    pizza()
}

// invoke HIGHER ORDER with CALLBACK as an argument 
higherOrder(callback)
higherOrder(() => {
    console.log('inline function callback!! 👽')
})

//callback calculator
const doCalculation = (num1, num2, callback) => {
    return callback(num1, num2)
}
let math = doCalculation(10, 5, (num1, num2) => {
    return num1+num2
})
console.log(math)

//TIMING FUNCTIONS  =============== setTimeout() setInterval()

//       setTimeout()  --- runs a function one time ,  set the amount of time to wait before running function 
// FIRST ARGUMENT -- callback
// SECOND ARGUMENT -- time in milliseconds     1000ms === 1 second 

setTimeout(() =>{
    console.log("I will only run once 🤖")
}, 5000)  // 5000 === 5 SECONDS
 


//         setInterval() ---- runs one function every SECONDARGUMENT 
// FIRST ARGUMENT -- callback
// SECOND ARGUMENT --- the amount of time between running the function -- will continue till clearInterval
function tick() {
    console.log(" tick ⏰")
}
//setInterval(tick, 5000);  //📞 function called here


// INLINE STRUCTURE FOR SETINTERVAL 
// setInterval(() => {
//     //CALLBACK or FIRST ARGUMENT here
//     console.log("tock 🕰 ")
// }, 8000 ); //SECOND ARGUMENT HERE



//====== TO STOP INTERVAL OR TIMEOUT ================
// set it to a variable 
// use clearInterval( ) to stop it 

let clock = setInterval(tick, 1000)

const stopClock = () => {
    //IN ORDER FOR CLEARINTERVAL TO RUN, YOU HAVE TO PASS IT THE VARIABLE WITH THE SETINTERVAL 
    console.log("stop the madness 🦞")
    clearInterval(clock)
}

setTimeout(stopClock, 15000)