let getUsersdata = JSON.parse(localStorage.getItem("usersdata")) || [];
console.log(getUsersdata);

function Signup(){
let username = document.getElementById("naam").value;
console.log(username)

let mobile = document.getElementById("phone").value;
console.log(mobile)

let password = document.getElementById("pass").value;
console.log(password)

if(mobile.length==0)
{
 alert("Enter mobile number");
 }
else if(mobile.length !== 10)
{
   alert("mobile number should have 10 digits");
}
else{
    let userData = {
    username:username,
    mobile:mobile,
    password:password
   }
   
   let users = [...getUsersdata,userData];
   users.push(userData);

localStorage.setItem("usersdata",JSON.stringify(users));

alert("Signup Successful");
window.location.href = "signin.html"
}
}