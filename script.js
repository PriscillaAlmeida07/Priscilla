const form = document.getElementById('#formulario');
const email  = document.getElementById('email' );
const password = document.getElementById('pwd' );
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

function emailValidate(email){
  if(emailRegex.test(email)){
    return true;
  }
  return false
};

function passwordValidate(password, minDigits){
    if(password.length >= minDigits){
        return true;
    }
    return false
};

addEventListener("submit",(event)=>{
    event.preventDefault();

  
      if(email.value === "" || !emailValidate(email.value) && password.value === "" || !passwordValidate(password.value,6)){
          alert("Email invalido ou senha com menos de 6 caracteres")
          return;
          }
          else{
            alert("email e senha validos");
          }
        
    form.submit();
})
