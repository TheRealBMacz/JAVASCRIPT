//Get the Element

var numberField = document.querySelector('#number');
var textMsgField = document.querySelector('#text-number');

numberField.addEventListener('keyup',strNumber);

function strNumber(str) {
    var str = numberField.value;
    var array = ['ZERO ', 'ONE ', 'TWO ', 'THREE ', 'F0UR ' , 'FIVE ' , 'SIX ' , 'SEVEN ' , 'EIGHT ' , 'NINE ' , 'TEN ']
    var output = ' ';
    for(var i=0; i<str.length; i++){
        output +=array[str.charAt(i)] + ' ';
    }
    textMsgField.textContent = output;
}
