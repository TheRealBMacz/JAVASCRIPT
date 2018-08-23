// If Else condition Example
var coursecompleted=true;
var praticecompleted=false;
if(coursecompleted&&praticecompleted){
    console.log('you will get ajob soon');
}
else if(coursecompleted&& !praticecompleted){
    console.log('start practicing');
}
else{
    console.log('please join any course');
}
// For loop Example to display from 1 - 10 values

var output='';
for(var i=1 ; i<=10; i++){
    if(i<=9) {
        output += i + ",";
    }
    else{
        output+=i;
    }
}
console.log(output);
document.querySelector('#display').textContent=output;

// While loop Example to display from 1 - 10 values
output='';
i=1;
while (i<=10){
    if(i<=9){
        output+=i+"-";
    }
    else{
        output+=i;
    }
    i++;
}
console.log(output);
document.querySelector('#display').textContent=output;


// Do while loop Example to display from 1 - 10 values

output='';
i=1;
while (i<=10){
    if(i<=9){
        output+=i+"*";
    }
    else{
        output+=i;
    }
    i++;
}
console.log(output);
document.querySelector('#display').textContent=output;

// Switch Statement Example to display full Day
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





