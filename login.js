let mail = document.getElementById("mail");
 let err =  document.getElementById("err");
 
  function validate()
     {
     let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
     if(regexp.test(mail.value))
     {
         err.innerHTML = "Valid email";
         err.style.color ="green";
         mail.style.border ="2px solid green";
         return true;
     }
      
      else
    
    {
    err.innerHTML = "Invalid email";
         err.style.color ="red";
         mail.style.border ="2px solid Red";
         return false;
 }
}

let pawd=document.getElementById("pawd");
let pw= document.getElementById("pw");
function password()
{
    let pass= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
    if(pass.test(pawd.value))
    {
      pw.innerHTML=" Valid Password ";
      alert('WELCOME TO KERALA TOURISM & WISHING YOU A HAPPY JOURNEY');
      pw.style.color="green";
      pawd.style.border ="2px solid green";
      return true;  
    }
    else
    {
        pw.innerHTML="Invalid Password";
        pw.style.color="red";
        pawd.style.border ="2px solid red";
        return false;
    }
}



