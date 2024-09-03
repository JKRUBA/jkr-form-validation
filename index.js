const nameInput = document.querySelector("#name");
const age = document.querySelector("#age");
const email = document.querySelector("#email");
const contact = document.querySelector("#contact");
const password = document.querySelector("#password");
const errorNodes = document.querySelectorAll(".error");
const success = document.querySelector("#success");

function validateForm()
{
    clearMessage();
    let errorFlag=false;

    if(nameInput.value=="")
    {
        errorNodes[0].innerText="*Please Enter your Fullname";
        errorFlag=true;
        setError(nameInput)
    }
    else
    {
        setSuccess(nameInput)
    }
    
    if(email.value=="")
    {
      errorNodes[2].innerText= "*Please Enter your Email address";
      errorFlag = true;
      setError(email);
    }

    else if(!emailValid(email.value))
    {
        errorNodes[2].innerText="*invalid email";
        errorFlag=true;
        setError(email)
    }
    else
    {
        setSuccess(email)
    }

    if (password.value=="")
    {
        errorNodes[4].innerText="*Please Enter Valid password";
        errorFlag = true;
        setError(password)
    }
    else if(password.value.length<8)
    {
        errorNodes[4].innerText = "*Please Enter atleast 8 characters";
        errorFlag =true;
        setError(password);
    }
    else
    {
        setSuccess(password)
    }

    if(contact.value=="")
    {
        errorNodes[3].innerText= "*Please enter 10 digit contact number";
        errorFlag = true;
        setError(contact)
    }

    else if (contact.value.length!=10)
    {
      errorNodes[3].innerText = "*Please Enter valid contact number";
      errorFlag = true;
      setError(contact);
    }
    else
    {
        setSuccess(contact)
    }

    if(age.value == "")
        {
            errorNodes[1].innerText = "Age is invalid";
            errorFlag=true;
        }
     

 if(errorFlag == false)
 {
    success.innerText="Form Validation is successfull"
    nameInput.value=" ";
    age.value=" ";
    email.value=" ";
    contact.value=" ";
    password.value=" ";
 }



}
function clearMessage()
{
    for(let i=0;i<errorNodes.length;i++)
    {
        errorNodes[i].innerText="";
    }
}

function emailValid(k1)
{
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(k1);
}

function setError(element)
{
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector(".error");
    //errorElement.innerHTML = message;
    inputGroup.classList.add("fail");
    inputGroup.classList.remove("pass");
}

function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");
  //errorElement.innerHTML = "";
  inputGroup.classList.add("pass");
  inputGroup.classList.remove("fail");
}