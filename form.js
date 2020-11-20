
let pno=document.getElementById("pno");
let phone= document.getElementById("phone");
function phoneno()
{
  let  reg=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  if(reg.test(pno.value))
  {
      phone.innerHTML="Valid Phone Number";
      phone.style.color="green";
      pno.style.border ="2px solid green";
      return true;  
  }
  else
  {
    phone.innerHTML="Invalid Phone Number";
    phone.style.color="red";
    pno.style.border ="2px solid red";
    alert('should contain 10 numbers only,xxx-xxx-xxxx,xxx.xxx.xxxx,xxx xxx xxxx are only allowed');
    return false;  
  }
}

 let email = document.getElementById("email");
 let error =  document.getElementById("error");
 
  function validate()
     {
     let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
     if(regexp.test(email.value))
     {
         error.innerHTML = "Valid email";
         error.style.color ="green";
         email.style.border ="2px solid green";
         return true;
     }
      
      else
    
    {
    error.innerHTML = "Invalid email";
         error.style.color ="red";
         email.style.border ="2px solid Red";
         return false;
 }
}

let pwd=document.getElementById("pwd");
let pword= document.getElementById("pword");
 function password()
{
    let  pass= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
    if(pass.test(pwd.value))
    {
      pword.innerHTML=" Valid Password ";
      pword.style.color="green";
      pwd.style.border ="2px solid green";
      return true;  
    }
    else
    {
        pword.innerHTML="Invalid Password,should contain 1 uppercase,1 lowercase, 1 number values";
        pword.style.color="red";
        pwd.style.border ="2px solid red";
        return false;
    }
}
console.log("work");
var pass=document.getElementById("pwd");

pass.addEventListener('keyup',function(){
  checkPassword(pass.value)
})
function checkPassword(password){
  var strengthBar = document.getElementById("strength")
  var strength =0;
  if(password.match(/[a-zA-Z0-9][a-zA-Z0-9]+/)){
    strength += 1
  }
  if(password.match(/[~<>?]+/)){
    strength+= 1
  }
  if(password.match(/[!@$%^&*()]+/)){
    strength +=1
  }
  if(password.length>5){
    strength += 1
  }
  
  switch(strength){
      case 0:
      strengthBar.value= 0;
      break;
      case 1:
      strengthBar.value= 25;
      break;
      case 2:
      strengthBar.value= 50;
      break;
      case 3:
      strengthBar.value= 75;
      break;
      case 4:
      strengthBar.value= 100;
      break;
      
  }}




var word=document.getElementById("word");
var pword1=document.getElementById("pword1");

function check(){
  if(document.getElementById("").value==document.getElementById("word").value)
  {
    pword1.innerHTML="Password Confirmed";
    pword1.style.color="green";
    word.style.border="2px solid green";
    alert("Account Created Successfully");
    return true;
  }
  else
  {
    pword1.innerHTML="Confirm  Password again";
    pword1.style.color="red";
    word.style.border="2px solid red";
    return false;
  }
}

      
  
  
  
     




    