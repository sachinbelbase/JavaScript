const accid = 1234;
let accname = "Sachin";
let accpass = "1234#";
city = "KTM";
let accemail = "Sachinadada@google.com";

accname = "Ram";
accpass = "22323";
city = "DANG";
// accid =2   // Not Allowed

console.log(accid);
console.log(accname);
console.log(accpass);
console.table([city, accname, accpass, accid, accemail]);

/* 
Don't use var because it make confuse in blog scope and functional scope because change all value not scope so in latest version we use Let
*/

/* if we use declare let and don't give value then and print
that variable it gives undefined but var can show undefine 
if we print first and defined later but at that situation let show error 
*/
