// CHAPTERS 31 - 34-------------------------------------------------------------

// QUESTION 1:
var a = new Date();
document.write(a);

// QUESTION 2:
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var b = new Date();
var c = month[b.getMonth()];
document.write("Current Month: " +c);

// QUESTION 3:
var d = new Date();
d = d.toString();
var e = d.slice(0, 3);
document.write("Today is: " +e);

// QUESTION 4:
var f = new Date();
f = f.toString();
var g = f.slice(0,3);
if (g === "Sat" || g === "Sun"){
    document.write("It's Fun Day")
}else {
    document.write("Its not a very fun day.");
}

// QUESTION 5:
var h = new Date();
var i = h.getDate();
if(i < 16){
    document.write("First fifteen days of the month");
} else {
    document.write("Last days of the month")
}

// QUESTION 6:
var j = new Date();
var k = j.getTime();
var minutes = (k/60000);
document.write("Current Date: "+j+ "<br />");
document.write("Elapsed miliseconds since January 1, 1970: "+k+ "<br />");
document.write("Elapsed minutes since January 1, 1970: "+minutes);

// QUESTION 7:
var l = new Date();
var m = l.getHours();
if (m < 12){
    document.write("It's AM")
} else {
    document.write("It's PM")
}

// QUESTION 8:
var laterDate = new Date(2020, 11, 31, 00, 00, 00, 00);
document.write(laterDate);

// QUESTION 9: 
var date1 = new Date("06/18/2015");
var date2 = new Date("01/19/2021");
var Difference_In_Time = date2.getTime() - date1.getTime();
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
document.write(Difference_In_Days+ " days have passed since 1st Ramadan, 2015"); 

// QUESTION 10:
var date1 = new Date("05/15/2015");
var date2 = new Date("01/01/2015");
var Difference_In_Time = date1.getTime() - date2.getTime();
var Difference_In_seconds = Difference_In_Time / (1000 * 60);
document.write(Difference_In_seconds+ " seconds had passed since beginning of 2015");

// QUESTION 11:


// QUESTION 12:


// QUESTION 13:
var dob = new Date(prompt("Enter your date of birth", "Jan 1, 1970"));
var n = dob.getTime();
var today = new Date();
var o = today.getTime();
var p = o - n;
var age = Math.floor(p / (1000 * 60 * 60 * 24 * 30 * 12))
document.write(age);

// QUESTION 14:
var customerName = "M. Sohaib Farooq"
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var q = new Date();
var crrntMonth = month[q.getMonth()];
var units = 410;
var charges = 16;
var surCharge = 350;
var dueDate = units * charges;
var gross = dueDate + surCharge;
document.write("Customer Name: <b>" +customerName+ "</b>");
document.write("<br>Month: <b>" +crrntMonth+ "</b>");
document.write("<br>Number of Units: <b>" +units+ "</b>");
document.write("<br>Charges per Unit: <b>" +charges+ "</b>");
document.write("<br><br>Net Amount Payable (within due date): <b>" +dueDate+ "</b>");
document.write("<br>Late payment surcharge: <b>" +surCharge+ "</b>");
document.write("<br>Gross Amount Payable (after due date): <b>" +gross+ "</b>");



// CHAPTER 35 - 38---------------------------------------------------------------------

// QUESTION 1:
function date(){
    var r = new Date();
    document.write(r);
}
date();

// QUESTION 2:
function greeting(){
    var fname = prompt("Enter First Name: ");
    var lname = prompt("Enter Last Name: ");
    alert("Welcome! " +fname+ " " +lname)
}
greeting();

// QUESTION 3:
function add(){
    var num1 = parseInt(prompt("Enter first number: "));
    var num2 = parseInt(prompt("Enter second number: "));
    var sum = num1 + num2
    alert("Sum of two numbers: " +sum);
}
add();

// QUESTION 4:
function calculator(num1,opr,num2){
    if(opr === "+"){
        return num1 + num2
    }else if(opr === "-"){
        return num1 - num2
    }else if(opr === "*"){
        return num1 * num2
    }else if(opr === "/"){
        return num1 / num2
    }else{
        return "Incorrect operator"
    }
}
var result = calculator(6,"*",5);
alert(result);

// QUESTION 5:
function square(a){
    alert(a * a);
}
square(4)

// QUESTION 6:
function factorial(b) {
    if (b === 0) {
        return 1;
    }
    return b * factorial(b - 1);
}
alert(factorial(6));

// QUESTION 7:
function counting(){
    var num1 = parseInt(prompt("Enter Start Number: "));
    var num2 = parseInt(prompt("Enter End Number: "));
    for(i = num1; i<= num2; i++){
        document.write(i+ "<br />");
    }
}
counting();

// QUESTION 8:
function hypotenuse() {
    function square() {
        var base = parseInt(prompt("Enter Base: "))
        var perp = parseInt(prompt("Enter Perpendicular: "))
        var result = Math.pow(base, 2) + Math.pow(perp, 2);
    }
    square();
    var ans = Math.sqrt(result);
    return ans;
}
alert(hypotenuse());

// QUESTION 9:
function triangle(widht, height){
    var area = widht * height;
    return area;
}
alert("Area of triangle is: " +triangle(6, 8));

// QUESTION 10:
function palindrome(str) {
    var newStr = reverse.palindrome();
    if (str == newStr) {
        alert("it's a Palindrome.");
    }else {
        alert("not a Palindrome");
    }
}
palindrome(civic);

// QUESTION 11:
function uppercase(str) {
    var array1 = str.split(' ');
    var newarray1 = [];

    for (var x = 0; x < array1.length; x++) {
        newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
    return newarray1.join(' ');
}
alert(uppercase("the quick brown fox"));

// QUESTION 12:
function longest(str){
    var array1 = str.match(/\w[a-z]{0,}/gi);
    var result = array1[0];

    for(var x = 1 ; x < array1.length ; x++)
    {
      if(result.length < array1[x].length)
      {
      result = array1[x];
      } 
    }
    return result;
}
alert(longest('Web Development Tutorial'))

// QUESTION 13:
function find(str, letter) {
    var count = 0;
    for (var j = 0; j < str.length; j++) {
        if (str.charAt(j) == letter) {
            count += 1;
        }
    }
    return count;
}
alert(find('Muhammad Sohaib Farooq', 'a'));

// QUESTION 14:
function calcCircumfrence(radius) {
    var y = (Math.PI * radius) * 2;
    alert("The circumfrence is " + y);
}
function calcArea(radius) {
    var x = (Math.PI * radius) * radius;
    alert("The area is " + x);
}
calcCircumfrence(20);
calcArea(10);



// CHAPTER 38 - 42---------------------------------------------------------------

// QUESTION 1:
function power(a, b){
    alert(Math.pow(a, b))
}
power(4, 2);

// QUESTION 2:
function leap() {
    var year = parseInt(prompt("Enter Year: "))
    if (year % 4 == 0 || year % 400 == 0 && year % 100 != 0) {
        alert(year+ " is a leap year!")
    } else{
        alert(year+ " is not a leap year!")
    }
}
leap()

// QUESTION 3:
function triangle(a, b, c) {
    function second() {
        var s = (a + b + c) / 2
        return s;
    }
    second();
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
    return area
}
var area1 = triangle(4, 2, 6);
alert(area1)

// QUESTION 4:
function main() {
    var mark1 = parseInt(prompt("Enter Marks for first subject: "))
    var mark2 = parseInt(prompt("Enter Marks for second subject: "))
    var mark3 = parseInt(prompt("Enter Marks for third subject: "))
    function average() {
        var avg = (mark1 + mark2 + mark3) / 3;
        alert("Average of the subjects is: " + avg);
    }
    average();
    function percentage() {
        var percent = ((mark1 + mark2 + mark3) / 300) * 100;
        alert("Percentage of the student is: " + percent);
    }
    percentage();
}
main();

// QUESTION 5:
function myFunction() {
    var str = "Hello world, welcome to the universe.";
    var n = str.indexOf("welcome");
    alert(n)
}
myFunction();

// QUESTION 6:
function character() {
    var string = "heelloo world";
    var vowel = ["a", "e", "i", "o", "u"];
    var i;
    for (i = 0; i < vowel.length; i++) {
        var secondLoop = string.length;
        for (j = 0; j < secondLoop; j++) {
            if (vowel[i] == string.charAt(j)) {
                string = string.slice(0, j).concat(string.slice(j + 1, secondLoop));
                j--;
                secondLoop--;
            }
        }
    }
    alert(string)
}
character();

// QUESTION 7:
function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;
    let haveSeenVowel = false;
    for (const letter of str.toLowerCase()) {
        switch (letter) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                {
                    if (haveSeenVowel) {
                        count++;
                        haveSeenVowel = false;
                    } else {
                        haveSeenVowel = true;
                    }
                    break;
                }
            default:
                haveSeenVowel = false
        }
    }
    return count
}
alert(findOccurrences());

// QUESTION 8:
var km = prompt("Enter the distance between two cities in kilometers: ");
function meters() {
    var meter = km * 1000;
    alert("The distance between two cities in meters is: " + meter);
}
function feets() {
    var feet = km * 3280.84;
    alert("The distance between two cities in feets is: " + feet);
}
function inches() {
    var inch = km * 39370.08;
    alert("The distance between two cities in inches is: " + inch);
}
function centimeters() {
    var centimeter = km * 1000 * 100;
    alert("The distance between two cities in centimeters is: " + centimeter);
}
meters()
feets()
inches()
centimeters()

// QUESTION 9:


// QUESTION 10:
function withdraw(){
    var amount = prompt("Please Enter Amount for Withdraw :");
    var hundreds = amount / 100;
    var fiftys = (amount % 100) / 50;
    var tens = (((amount % 100) % 50) / 10)
    var remaining = (((amount % 100) % 50) % 10)
    alert("Required notes of 100 is : "+hundreds)
    alert("Required notes of 50 is : "+fiftys)
    alert("Required notes of 10 is : "+tens)
    alert("Amount still remaining is : "+remaining)
}
withdraw()