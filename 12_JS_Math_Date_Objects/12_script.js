/*Math Object Examples */

// Math PI and Sqrt
var piValue = Math.PI;
console.log('PI Value : ' + piValue);

//sqrt
var sqrt = Math.sqrt(144);
console.log('sqrt of 144 : ' + sqrt);

// find the min of 4 numbers
var min = Math.min(45,78,87,894,654);
console.log('Min : ' + min);

// find the Max of 4 numbers
var max = Math.max(45,78,87,894,654);
console.log('Min : ' + max);

// find the 'x' to the power of 'y' value, ex: 2^4
var pow = Math.pow(2.4);
console.log('2 ^ 4 : ' + pow);


// generate the random numbers from 0 to 100
var random = Math.round(Math.random() * 1000000);
document.querySelector('#display').textContent = random.toString();

/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/


//String Methods

var str = "Good Morning";
var length = str.length;
console.log('Str length : ' + length);

var lowerCase = str.toLowerCase();
console.log('Lower Case : ' + lowerCase);

var upperCase = str.toUpperCase();
console.log('Upper Case : ' + upperCase);

var partialStr = str.substring(0,4);
console.log('partialStr : ' + partialStr);

var remStr = str.substring(5);
console.log('remString : ' + remStr);//Morning

str = "Good Morning";

function countChar(str) {
    var count = 0;
    for (var i = 0; i<str.length; i++) {
        if (str.charAt(i) === 'o') {
            count ++;
        }
    }
    return count;
}
console.log('count : ' + countChar(str));

function reverseString(str) {
    var revStr = ' ';
    for (var i=str.length; i>=0; i--) {
        revStr += str.charAt(i);
    }
    return revStr;
}
console.log('Reverse : ' + reverseString(str));

var myStr = "1234";
function strNumber(str) {
    var array = ['Zero' , 'one' , 'two' , 'three' , 'four' , 'five' , 'six' , 'seven' , 'eight' , 'nine' , 'ten']
    var output = ' ';
    for(var i=0; i<str.length; i++){
        output += array [str.charAt(i)] + ' ';
    }
    return output;
}
console.log('StrNumber : ' + strNumber(myStr));

/*
    Date Object Examples

 */

// get today's date
var today=new Date();
console.log(today);

//get date of the month 0 - 31 getDate()
var date=today.get()+"/"+(today.getMonth()+1)+"/"+today.getFullYear();
console.log(date);

// get full day of the week using switch statement
output='';
var today=new Date().getDate();
today=3;
switch (today){

    case 0:
        output+='sunday';
        break;
    case 1:
        output+='monday';
        break;

    case 2:
        output+='tuesday';
        break;
    case 3:
        output+='wednesday';
        break;
    case 4:
        output+='thursday';
        break;
    case 5:
        output+='friday';
        break;
    case 6:
        output+='saturday';
        break;

}
console.log(output);
document.querySelector('#display').textContent=output;


// Display a Digital Clock on the web page

function digital_clock() {
    var today=new Date();
    var option={timeZone:'Asia/kolkata'};
    var time=today.toLocaleTimeString('en-US',options);
    document.querySelector('#clock').textContent=time;
}

 setInterval(digitalclock,1000);


/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/