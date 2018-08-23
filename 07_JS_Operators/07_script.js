// Assignment operator =

var a=10;
console.log("num1:"+num1);

// Arithmetic operators + - * /
var a=10;
var b=20;
var sum=a+b;
console.log("sum of a,b is:"+sum);


// Short hand math += , -= , *= , /=
var p=10;
var q=20;
var add=0;
add=add+(p+q);//0+10+20=30
add +=(p+q);//30+10+20=60
console.log(add);// 60

// Conditional operators < , > , <= , >= , !=

var age=25;
if(age<=18){
    console.log('you are minar');

}
else{
    console.log('you are major');
}



// Unary Operator ++ , -- (pre , post)
var z=10;
z=z+1;//11
z+=1;//12
z++;//13
console.log(z);//13


// Logical operators AND , OR
var inRelation=true;
var parentsAgread=false;
if(inRelation &&parentsAgread){
    console.log('get marre soon');
}
else{
    console.log('wait until the parents agreed');
}


// String Concatenation Operator(+)
var test=1+2+"2"+1+3+"2";
console.log(test);



// Ternary operator (? :)
age=25;
(age <18)? console.log('you are minor'): console.log('you are major');

// Type of operator

var abc=10;
console.log('value'+abc+"Data type:"+typeof abc);

// == operator
a=10;
b="10";
if(a==b){
    console.log("both are equal");
}
else {
    console.log("both are not equal")
}



// === operator

a=10;
b="10";
if(a===b){
    console.log("both are not equal");
}
else {
    console.log("both are not equal")
}







