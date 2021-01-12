// CHAPTER 1------------------------------------------------------------------------------------

// QUESTION 1: 
alert ("Welcome to Playtech.pk")

// QUESTION 2:
alert ("Error! Please enter a valid password.")

// QUESTION 3:
alert ("Welcome to JS Land... \n Happy Coding!")

// QUESTION 4:
alert ("Welcome to JS Land...")
alert ("Happy Coding!")

// QUESTION 5:
console.log ("Hello... I can run JS through my web browser's console.")

// QUESTION 6 & 7:
// Practiced on existing project.


// CHAPTER 2------------------------------------------------------------------------------------

// QUESTION 1:
var username;

// QUESTION 2:
var myName = "Muhammad Sohaib Farooq";

// QUESTION 3:
var message;
message = "Hello World";
alert (message);

// QUESTION 4:
var sname = "M.Sohaib farooq";
var sage = "21 years old";
var scourse = "Certified Mobile Application Development";
alert (sname);
alert (sage);
alert (scourse);

// QUESTION 5:
var item = " PIZZA \n PIZZ \n PIZ \n PI \n P";
alert (item);

// QUESTION 6:
var email = "sohaibfarooq51@gmail.com";
alert ("My email address is " +email);

// QUESTION 7:
var book = "A smarter way to learn javaScript.";
alert ("I am trying to learn from the Book " +book);

// QUESTION 8:
document.write ("Yah! i can write HTML content through JavaScript");

// QUESTION 9:
var sign = "---------ஜ۩۞۩ஜ---------";
alert (sign);


// CHAPTER 3-------------------------------------------------------------------------

// QUESTION 1:
var age = 21;
alert ("I am " +age+ " years old");

// QUESTION 2:
var visit = 11;
alert ("You have visited this site " +visit+ " times.");

// QUESTION 3:
var birthYear = 1999;
document.write ("My birth year is " +birthYear); 
document.write (" <br /> Data type of my declared variable is number.");

// QUESTION 4:
var vName = "John Doe";
var product = "T-shirt";
var quantity = 5;
document.write (vName+ " ordered " +quantity+ " " +product+ "(s) on XYZ Clothing Store");


// CHAPTER 4-------------------------------------------------------------------------

// QUESTION 1:  
var day = "Monday", month = "January", year = 2021;

// QUESTION 2:
// LEGAL VARIABLES
var flower;
var flower2;
var $flower;
var flower_rose;
var $sunFlower;

// ILLEGAL VARIABLES
var 123;
var flower rose;
var 'flower';
var alert;
var 2flower;

// QUESTION 3:
document.write("<h2>Rules for naming JS variables</h2>");
document.write("<br /><br /><br />Variable names can only contain numbers, $ and _. For example : $my_1stVariable");
document.write("<br />Variables must begin with a letter, $ or _. For example : $name, _name or name ");
document.write("<br />Variable names are case sensitive ");
document.write("<br /> Variable names should not be JS Keywords");


// CHAPTER 5-------------------------------------------------------------------------

// QUESTION 1:
var a = 3;
var b = 5;
var c = a+b;
document.write("Sum of " +a+ " and " +b+ " is " +c);

// QUESTION 2:
var d = 3;
var e = 5;
var f = d-e;
document.write("Subtraction of " +d+ " and " +e+ " is " +f);

var g = 3;
var h = 5;
var i = g*h;
document.write("Multiplication of " +g+ " and " +h+ " is " +i);

var j = 3;
var k = 5;
var l = j/k;
document.write("division of " +j+ " and " +k+ " is " +l);

// QUESTION 3:
var num;
document.write("Value after variable declaration is: " +num);
num = 8;
document.write("<br /> Initial value: " +num);
++num;
document.write("<br /> Value after increment is: " +num);
num = num + 7;
document.write("<br /> Value after adding is: " +num);
--num;
document.write("<br /> Value after decrement is: " +num);
num = num % 3;
document.write("<br /> The remainder is : " +num);

// QUESTION 4:
var price = 600;
var cost = price * 5;
document.write("Total cost to buy 5 tickets to a movie is " +cost+ "PKR");

// QUESTION 5:
var table = 5;
document.write("Table of " +table);
table = table * 1;
document.write("<br /> 5 x 1 = " +table);
table = table * 2;
document.write("<br /> 5 x 2 = " +table);
table = 5 * 3;
document.write("<br /> 5 x 3 = " +table);
table = 5 * 4;
document.write("<br /> 5 x 4 = " +table);
table = 5 * 5;
document.write("<br /> 5 x 5 = " +table);
table = 5 * 6;
document.write("<br /> 5 x 6 = " +table);
table = 5 * 7;
document.write("<br /> 5 x 7 = " +table);
table = 5 * 8;
document.write("<br /> 5 x 8 = " +table);
table = 5 * 9;
document.write("<br /> 5 x 9 = " +table);
table = 5 * 10;
document.write("<br /> 5 x 10 = " +table);

// QUESTION 6:
var celsius = 11;
var fahrenheit = (celsius * 9 / 5) + 32;
document.write(celsius+ "°C is " +fahrenheit+ "°F <br />");
var F = 48;
var C = (F - 32) * 5 / 9;
document.write(F+ "°F is " +C+ "°C");

// QUESTION 7:
var p1 = 500;
var p2 = 150;
var q1 = 2;
var q2 = 8;
var charges = 100;
var Total = (p1 * q1) + (p2 * q2) + charges;
document.write("<h2>Shopping Cart</h2>");
document.write("<br /><br /> Price of item 1 is " +p1);
document.write("<br /> Quantity of item 1 is " +q1);
document.write("<br /> Price of item 2 is " +p2);
document.write("<br /> Quantity of item 2 is " +q2);
document.write("<br /> Shipping Charges " +charges);
document.write("<br /><br /> Total cost of your order is " +Total);

// QUESTION 8:
var marks1 = 500;
var marks2 = 423;
var percent = (marks2 / marks1) * 100;
document.write("<h2>Marks Sheet</h2>");
document.write("<br /><br /> Total Marks: " +marks1);
document.write("<br /> Marks Obtained: " +marks2);
document.write("<br /> Percentage: " +percent);

// QUESTION 9:
var $ = 10;
var _riyal = 25;
var rps = ($ * 104.80) + (_riyal * 28);
document.write("<h2>Currency in PKR</h2>");
document.write("<br /><br /> US Dollars we have: " +$);
document.write("<br /> Saudi Riyal we have: " +_riyal);
document.write("<br /> Total currency in PKR: " +rps);

// QUESTION 10:
var n = 8;
var m = (n + 5) * 10 / 2;
document.write("Result: " +m);

// QUESTION 11:
var year1 = 2021;
var year2 = 1999;
var Age = year1 - year2;
document.write("<h2>Age Calculator</h2>");
document.write("<br /><br /> Current Year: " +year1);
document.write("<br /> Birth Year: " +year2);
document.write("<br /> Your Age is: " +Age);

// QUESTION 12:
var radius = 18;
var cf = 2 * 3.14 * radius;
var area = 3.142 * radius * radius;
document.write("<h2>The Geometrizer</h2>");
document.write("<br /><br /> Radius of a Circle: " + radius);
document.write("<br /> The circumference is: " + cf);
document.write("<br /> The area is: " + area);

// QUESTION 13:
var snack = "Potato Chips";
var age2 = 21;
var age3 = 65;
var snack2 = 15;
var amnt = (age3 - age2) * snack2;
document.write("<h2>The Lifetime Supply Calculator</h2>");
document.write("<br /><br /> Favorite Snack: " + snack);
document.write("<br /> Current Age: " + age2);
document.write("<br /> Estimated Maximum Age: " + age3);
document.write("<br /> Amount of snacks per day: " + snack2);
document.write("<br /> You will need " +amnt+ " " +snack+ " to last you until the ripe old age of" +age3);



// CHAPTER 6-9-------------------------------------------------------------------------------

// QUESTION 1:
var z = 8;
document.write("Result:");
document.write("<br />The value of z is: " +z);
document.write("<br /> .........................................");
++z;
document.write("<br />The value of ++z is: " +z);
document.write("<br />Now The value of z is: " +z);
document.write("<br /><br />The value of z++ is: " +z);
++z;
document.write("<br />Now The value of z is: " +z);
--z;
document.write("<br /><br />The value of --z is: " +z);
document.write("<br />Now The value of z is: " +z);
document.write("<br /><br />The value of z-- is: " +z);
--z;
document.write("<br />Now The value of z is: " +z);

// QUESTION 2:
var a1 = 2, b1 = 1; 
var result = --a1 - --b1 + ++b1 + b1--;
document.write("a is: " +a1); 
document.write("<br />b is: " +b1); 
document.write("<br />result is: " +result); 

// QUESTION 3:
var x = prompt("Enter Your Name: ");
alert("welcome! " +x);
document.write("Welcome! " +x);

// QUESTION 4:
var num = parseInt(prompt("Enter a Number :"));
var num2 = 5;
if(num !== 5){
        document.write(num + " x " + "1" + " = " + num*1);
        document.write("<br>");
        document.write(num + " x " + "2" + " = " + num*2);
        document.write("<br>");
        document.write(num + " x " + "3" + " = " + num*3);
        document.write("<br>");
        document.write(num + " x " + "4" + " = " + num*4);
        document.write("<br>");
        document.write(num + " x " + "5" + " = " + num*5);
        document.write("<br>");
        document.write(num + " x " + "6" + " = " + num*6);
        document.write("<br>");
        document.write(num + " x " + "7" + " = " + num*7);
        document.write("<br>");
        document.write(num + " x " + "8" + " = " + num*8);
        document.write("<br>");
        document.write(num + " x " + "9" + " = " + num*9);
        document.write("<br>");
        document.write(num + " x " + "10" + " = " + num*10);
}
else{
    document.write(num2 + " x " + "1" + " = " + num2*1);
    document.write("<br>");
    document.write(num2 + " x " + "2" + " = " + num2*2);
    document.write("<br>");
    document.write(num2 + " x " + "3" + " = " + num2*3);
    document.write("<br>");
    document.write(num2 + " x " + "4" + " = " + num2*4);
    document.write("<br>");
    document.write(num2 + " x " + "5" + " = " + num2*5);
    document.write("<br>");
    document.write(num2 + " x " + "6" + " = " + num2*6);
    document.write("<br>");
    document.write(num2 + " x " + "7" + " = " + num2*7);
    document.write("<br>");
    document.write(num2 + " x " + "8" + " = " + num2*8);
    document.write("<br>");
    document.write(num2 + " x " + "9" + " = " + num2*9);
    document.write("<br>");
    document.write(num2 + " x " + "10" + " = " + num2*10);
}

// QUESTION 5:
var subject1 = prompt("Enter First Subject Name: ");
var subject2 = prompt("Enter Second Subject Name: ");
var subject3 = prompt("Enter Third Subject Name: ");
var totalMarks = 100;
var obtain1 = parseInt(prompt("Enter Obtained Marks of first subject: "));
var obtain2 = parseInt(prompt("Enter Obtained Marks of second subject: "));
var obtain3 = parseInt(prompt("Enter Obtained Marks of third subject: "));
var totalMarks2 = totalMarks + totalMarks + totalMarks;
var obtain4 = obtain1 + obtain2 + obtain3;
var percent1 = (obtain1 / totalMarks) * 100;
var percent2 = (obtain2 / totalMarks) * 100;
var percent3 = (obtain3 / totalMarks) * 100;
var percent4 = (obtain4 / totalMarks2) * 100;

// QUESTION 6:
document.write('<table cellspacing="0">');
document.write("<tr><th> Subject </th>");
document.write("<th> Total Marks </th>");
document.write("<th> Obtained Marks </th>");
document.write("<th> Percentage </th> </tr>");

document.write("<tr><td>" + subject1 + "</td>");
document.write("<td>" + totalMarks + "</td>");
document.write("<td>" + obtain1 + "</td>");
document.write("<td>" + percent1 + "% </td> </tr>");

document.write("<tr><td>" + subject2 + "</td>");
document.write("<td>" + totalMarks + "</td>");
document.write("<td>" + obtain2 + "</td>");
document.write("<td>" + percent2 + "% </td> </tr>");

document.write("<tr><td>" + subject3 + "</td>");
document.write("<td>" + totalMarks + "</td>");
document.write("<td>" + obtain3 + "</td>");
document.write("<td>" + percent3 + "% </td> </tr>");

document.write("<tr><td>  </td>");
document.write("<td> <b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + totalMarks2 + " </b> </td>");
document.write("<td> <b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + obtain4 + " </b> </td>");
document.write("<td> <b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + percent4 + "% </b> </td> </tr>");
document.write("</table>");


// CHAPTER 9-11---------------------------------------------------------------


// QUESTION 1:

var city = prompt("Please Enter Your City")
if("karachi".toLocaleUpperCase){
alert("Welcome to City of lights");
}


// QUESTION 2:

var gender = prompt("Please Enter you gender sir ?")
if(gender.toUpperCase()=="male".toUpperCase()){
    alert("Good Morning Sir");
}
else if(gender.toUpperCase()=="female".toUpperCase())
{
    alert(" Good Morning Ma’am");
}


// QUESTION 3:

var color = prompt("Signal Color?")
if(color.toUpperCase()=="Red".toUpperCase()){
    alert("Must Stop");
}
else if(color.toUpperCase()=="Yellow".toUpperCase()){
    alert("Ready to move");
}
else if(color.toUpperCase()=="Green".toUpperCase()){
    alert("Move now");
}



// QUESTION 4:

var fuel = prompt("Remaining fuel in car")
if(fuel<=0.25){
    alert("Please refill the fuel in your car")
}

// QUESTION 5:

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}

if("car" < "cat"){
    alert("car is smaller than cat");
    }

// ( Yes The alert meaasage is displayed of the given script )

// Alert 1 : given condition for variable a is true
// Alert 2 : condition 2 is true
// Alert 3 : condition 4 is true
// Alert 4 : The cost equals
// Alert 5 : True 
// Alert 6 : car is smaller than cat

// QUESTION 6:

var totMarks = 300;
var markObtained = prompt("Enter your Obtained marks :");
var per = markObtained/totMarks *100;
var grade;
if(markObtained >= 80){
    document.write("<h1>Marks Sheet</h1>" + " <br/> Total marks : 300" + " </br> Marks obtained : " + " </br> Percentage : " + " </br> Grade : A-one " + " REMARKS: " + "Excellent")
}
else if(markObtained >= 70){
    document.write("<h1>Marks Sheet</h1>" + " <br/> Total marks : 300" + " </br> Marks obtained : " + " </br> Percentage : " + " </br> Grade : A " + " REMARKS: " + "Good")
}
else if(markObtained >= 60){
    document.write("<h1>Marks Sheet</h1>" + " <br/> Total marks : 300" + " </br> Marks obtained : " + " </br> Percentage : " + " </br> Grade : B " + " REMARKS: " + "You need to improve")
}
else if(markObtained < 60){
    document.write("<h1>Marks Sheet</h1>" + " <br/> Total marks : 300" + " </br> Marks obtained : " + " </br> Percentage : " + " </br> Grade : Fail " + " REMARKS: " + "Sorry")
};

var n = Math.floor((Math.random() * 1000) + 1);
if (n) {
  var output = "";
  if (n % 3 == 0)
    output += "yes";
  prompt(output || n);
}


// QUESTION 7:

var secNumber = prompt("Please Enter you number ?")

if(secNumber=="3"){
    alert("Bingo! Correct answer");
}
if(secNumber=="2"){
    alert("Close enough to the correct answer");
}

// QUESTION 8:

var number = prompt("Please Enter your number");
var i =number;
if (i % 3 == 0) {
 alert("divisible by 3");
} 
else {
    alert("divisible not by 3");
} 

// QUESTION 9:

var num = prompt("Please Enter your number");
if(num % 2 == 0) {
    alert("The given Number is even");
}
else {
    alert("The given number is not even");
}


// QUESTION 10


var temp = prompt("Enter your temprature")
if(temp > 40){
    alert("It is too hot outside.")
}
else if(temp > 30){
    alert("The Weather today is Normal.")
}
else if(temp > 20){
    alert("Today’s Weather is cool.")
}
else if(temp > 10){
    alert("OMG! Today’s weather is so Cool.")
}

// QUESTION 11:

const operator = prompt('Enter operator ( either +, -, * or / ): ');
const num1 = parseFloat(prompt('Enter first number: '));
const num2 = parseFloat(prompt('Enter second number: '));

let result;

if (operator == '+') {
    alert(result = num1 + num2);
}
else if (operator == '-') {
    alert(result = num1 - num2);
}
else if (operator == '*') {
    alert(result = num1 * num2);
}
else {
    alert(result = num1 / num2);
}



// CHAPTER 12 - 13-------------------------------------------------------------------------------

// QUESTION 1:

var input = prompt("Enter a Character :") || parseInt(prompt("Enter a Character : "));
if(input>='A' && input<='Z'){
    alert(input+ " is an UpperCase letter.");
} else if(input>='a' && input<='z'){
    alert(input+ " is an LowerCase letter.");
} else if(input>='0' && input<='9'){
    alert(input+ " is an Number.");
};

// QUESTION 2:

var n1 = parseInt(prompt("Enter first Number: "));
var n2 = parseInt(prompt("Enter second Number: "));
if (n1 == n2){
    alert(n1+ " is equals to " +n2);
} else if(n1 > n2){
    alert(n1+ " is the greater value.")
} else if(n2 > n1){
    alert(n2+ " is the greater value.")
}

// QUESTION 3:

var n3 = parseInt(prompt("Enter a Number : "));
if (n3 > 0) {
    alert(n3 + (" is a POSITIVE number."))
} else if (0 > n3) {
    alert(n3 + (" is a NEGATIVE number."))
} else {
    alert(n3 + " is ZERO");
};

// QUESTION 4:

var chr = prompt("Enter a Character : ");
if(chr == 'A' || chr == 'E' || chr == 'I' || chr == 'O' || chr == 'U'){
    alert(Boolean(true));
} else if(chr == 'a' || chr == 'e' || chr == 'i' || chr == 'o' || chr == 'u'){
    alert(Boolean(true));
} else{
    alert(Boolean(false));
}


// QUESTION 5:

var correctPassword = "qwerty12";
var userPassword = prompt("Enter Password : ");
if(userPassword == 0){
    alert("Please Enter Password!");
} else if(userPassword === correctPassword){
    alert("Correct! The password you entered matches the original password");
} else if(userPassword != correctPassword){
    alert("Incorrect password")
}


// QUESTION 6:

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    alert(greeting)
} else {
    greeting = "Good evening";
    alert(greeting)
}

// QUESTION 7:

var time = parseInt(prompt("Enter Time in 24 hourse Format : "));
if (time >= 0000 && time < 1200) {
    alert("Good Morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon!");
} else if (time >= 1700 && time < 2100) {
    alert("Good Evening!");
} else if (time >= 2100 && time <= 2359) {
    alert("Good Night!");
} else {
    alert("Please! Enter Time.")
}


// CHAPTER 14 - 16--------------------------------------------------------------------------------

// QUESTION 1:
var arrayA = []

// QUESTION 2:
var arrayB = new Array()

// QUESTION 3:
var array1 = ["Sohaib","farooq"];

// QUESTION 4:
var array2 = [1,2,3,4];

// QUESTION 5:
var array3 = [true,false];

// QUESTION 6:
var array4 = ["Sohaib", 21, true];

// QUESTION 7:
var qual = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
document.write("Qualifications: <br /> <br />");
document.write("1) " + qual[0] + "<br />" + "2) " + qual[1] + "<br />" + "3) " + qual[2] + "<br />"
    + "4) " + qual[3] + "<br />" + "5) " + qual[4] + "<br />" + "6) " + qual[5] + "<br />"
    + "7) " + qual[6] + "<br />" + "8) " + qual[7] + "<br />");

// QUESTION 8:
var sName = ["Sohaib","Muzammil","Farooq"];
var score = [320, 230, 480];
var percentage = [score[0]/500*100, score[1]/500*100, score[2]/500*100];
document.write("Score of " +sName[0]+ " is " +score[0]+ ". Percentage: " +percentage[0]+ "%");
document.write("<br />Score of " +sName[1]+ " is " +score[1]+ ". Percentage: " +percentage[1]+ "%");
document.write("<br />  Score of " +sName[2]+ " is " +score[2]+ ". Percentage: " +percentage[2]+ "%");

// QUESTION 9:
var cName = ["Red", " Green", " Blue"];
document.write(cName);
var bgng = prompt("What color you want to add in the beginning: ","Enter color: ");
cName.unshift(bgng);
document.write("<br />");
document.write(cName);
var end = prompt("What color you want to add in the end: ","Enter color: ");
cName.push(end);
document.write("<br />");
document.write(cName);
cName.unshift("Cyan", " White");
document.write("<br />");
document.write(cName)
cName.shift();
document.write("<br />");
document.write(cName);
cName.pop();
document.write("<br />");
document.write(cName);
var index = parseInt(prompt("Which index you want to insert a color: "));
var mid = prompt("Enter color you want to add at that index: ");
cName[index] = mid;
document.write("<br />");
document.write(cName);
var index2 = parseInt(prompt("Which index you want to delete a color: "));
var del = parseInt(prompt("How Many colors you want to delete: "));
cName.splice(index2, del);
document.write("<br />");
document.write(cName);

// QUESTION 10:
var score = [320, 230, 480, 120];
document.write("Score of Students: " +score);
document.write("<br />Ordered Score of Students: " +score.sort());

// QUESTION 11:
var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
document.write("Cities List: <br />");
document.write(cities);
document.write("<br /> <br />");
var selectedCities = cities.slice(2,4);
document.write("Selected Cities List: <br />");
document.write(selectedCities);

// QUESTION 12:
var arr = ["My", "Name", "is", "Sohaib"];
var cmbine = arr.join(" ");
document.write("Array: <br />");
document.write(arr);
document.write("<br /><br /> String: <br />");
document.write(cmbine);

// QUESTION 13:
var arr2 = [];
arr2.push("Apple"," orange"," Banana"," Mango");
document.write("Fruits: <br />");
document.write(arr2);
arr2=arr2.shift();
document.write("<br /><br />");
document.write("Out: <br />");
document.write(arr2);

// QUESTION 14:
var arr3 = [];
arr3.unshift("Apple"," orange"," Banana"," Mango");
document.write("Fruits: <br />");
document.write(arr3);
arr3=arr3.pop();
document.write("<br /><br />");
document.write("Out: <br />");
document.write(arr3);

// QUESTION 15:
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
document.write("<option> Manufacturers: </option>");
document.write("<option>" +manufacturers[0]+ "</option>");
document.write("<option>" +manufacturers[1]+ "</option>");
document.write("<option>" +manufacturers[2]+ "</option>");
document.write("<option>" +manufacturers[3]+ "</option>");
document.write("<option>" +manufacturers[4]+ "</option>");
document.write("<option>" +manufacturers[5]+ "</option>");
document.write("</select>");


// CHAPTER 17 - 20-------------------------------------------------------------------------------

// QUESTION 1:
var multi = [[], [], []];

// QUESTION 2:
var multi1 = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
for (var i = 0; i < multi1.length; i++) {
    document.write(multi1[i] + "<br />");
}

// QUESTION 3:
for (var i = 0; i <= 10; i++) {
    document.write(i + "<br />");
}

// QUESTION 4:
var table = parseInt(prompt("Enter Table Number: "));
var length = parseInt(prompt("Enter Table Lenght: "));
document.write("Multiplication table of: " + table);
document.write("<br />Length: " + length);
document.write("<br />");
for (j = 1; j <= length; j++) {
    document.write(table+ " x " +j+ " = " +table*j);
    document.write("<br />");
}

// QUESTION 5:
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br />");
}
document.write("<br />");
for (t = 0; t < fruits.length; t++) {
    document.write("Element at index "+t+ " is " +fruits[t] + "<br />");
}

// QUESTION 6:
document.write("<h4>Counting:</h4>")
for (var i = 0; i <= 15; i++) {
    document.write(i + ", ");
}
document.write("<h4>Reverse Counting:</h4>")
for (var i = 10; i >= 1; i--) {
    document.write(i + ", ");
}
document.write("<h4>Even:</h4>")
for (var i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        document.write(i + ", ");
    }
}
document.write("<h4>Odd:</h4>")
for (var i = 0; i <= 20; i++) {
    if (i % 2 == 1) {
        document.write(i + ", ");
    }
}
document.write("<h4>Series:</h4>")
for (var i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        document.write(i + "k, ");
    }
}

// QUESTION 7:
var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
var srch = prompt("Welcome to Disco Bakery. What do you want to order?");
for (var i = 0; i < bakery.length; i++) {
    if (bakery[i] === srch) {
        document.write(srch + " is available at index " + [i] + " in our bakery.");
        break;
    } else if (bakery[i] !== srch) {
        document.write("We are Sorry. " + srch + " is not available in our bakery.");
    }
}

// QUESTION 8:
var o = [24, 53, 78, 91, 12]; 
var largest= 0;
document.write("Array items: " +o);
for (i=0; i<=largest;i++){
    if (o[i]>largest) {
        var largest=o[i];
    }
}
document.write("<br />The largest number is: "+largest);

// QUESTION 9:
const p =  [24, 53, 78, 91, 12];
const min = Math.min(...p)
document.write("Array items: " +p);
document.write("<br />The Smallest number is: "+min);

// QUESTION 10:

for (var number = 5; number <= 100; number++) {
    if (number % 5 == 0) {
        document.write(number + " ");
    }
}
