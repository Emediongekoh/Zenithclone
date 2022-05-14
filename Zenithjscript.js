var value,pass,val;
document.getElementById("selectBlock").onclick=toggle;
/* this is to hide and show options in the select tag*/
function toggle(){
document.getElementById("Toggle").style.display="block";
document.getElementById("selectBlock").onclick=toggleDown;
}

function toggleDown(){
document.getElementById("Toggle").style.display="none";
document.getElementById("selectBlock").onclick=toggle;
}


function changerone(){
document.getElementById("opt1").innerHTML="PIN and Token";
document.getElementById("password").placeholder="PIN and Token";
}
function changertwo(){
document.getElementById("opt1").innerHTML="Password";
document.getElementById("password").placeholder="Password";
}

document.getElementById("type1").onclick=changerone; 
document.getElementById("type2").onclick=changertwo;

/* This is to get events(actions) when key is pressed to 
maintain good user interface */

function userStartTypingone(){
document.getElementsByClassName("errormsg")[0].innerHTML="Enter a valid Account number";
document.getElementsByClassName("profile")[0].style.borderColor="maroon";
document.getElementsByClassName("profile")[0].style.color="maroon";
document.getElementById("ACnum").style.borderColor="maroon";
value=document.getElementById("ACnum").value; 
if(value.length==0){
document.getElementsByClassName("errormsg")[0].innerHTML="Account number required";

}
else if(value.length==10){
document.getElementsByClassName("errormsg")[0].innerHTML="";
document.getElementsByClassName("profile")[0].style.borderColor="green";
document.getElementsByClassName("profile")[0].style.color="green";
document.getElementById("ACnum").style.borderColor="green";

}
 
}

function userStartTypingtwo(){
if(document.getElementById("password").placeholder=="PIN and Token"){
document.getElementsByClassName("errormsg")[1].innerHTML="PIN & Token must be 10 digits";
document.getElementsByClassName("profile")[1].style.borderColor="maroon";
document.getElementsByClassName("profile")[1].style.color="maroon";
document.getElementById("password").style.borderColor="maroon";
document.getElementsByClassName("secure")[0].style.borderColor="maroon";
document.getElementsByClassName("secure")[0].style.color="maroon";
 pass=document.getElementById("password").value; 
if(pass.length==0){
document.getElementsByClassName("errormsg")[1].innerHTML="PIN & Token is required";

}
else if(pass.length==10){
document.getElementsByClassName("errormsg")[1].innerHTML="";
document.getElementsByClassName("profile")[1].style.borderColor="green";
document.getElementsByClassName("profile")[1].style.color="green";
document.getElementsByClassName("secure")[0].style.borderColor="green";
document.getElementsByClassName("secure")[0].style.color="green";
document.getElementById("password").style.borderColor="green";
  }
}
else{
document.getElementsByClassName("errormsg")[1].innerHTML="Password required ";
document.getElementsByClassName("profile")[1].style.borderColor="maroon";
document.getElementsByClassName("profile")[1].style.color="maroon";
document.getElementById("password").style.borderColor="maroon";
document.getElementsByClassName("secure")[0].style.color="maroon";
document.getElementsByClassName("secure")[0].style.borderColor="maroon";
val=document.getElementById("password").value; 
if(val.length==0){
document.getElementsByClassName("errormsg")[1].innerHTML="The password is required";

}
else if(val.length>0){
document.getElementsByClassName("errormsg")[1].innerHTML="";
document.getElementsByClassName("profile")[1].style.borderColor="green";
document.getElementsByClassName("profile")[1].style.color="green";
document.getElementById("password").style.borderColor="green";
document.getElementsByClassName("secure")[0].style.color="green";
document.getElementsByClassName("secure")[0].style.borderColor="green";
}

}

}
/* This is to validate the form*/
function validate(){
if(value.length==10&&pass.length==10||value.length==10&&val.length>0){
return true; 
}
else{
return false; 
}
}

document.getElementById("ACnum").onkeyup=userStartTypingone;
document.getElementById("password").onkeyup=userStartTypingtwo;
/* End of the javascript */
/*disclaimer:anyone who uses this case is solely responsible for whatever the outcome is */
