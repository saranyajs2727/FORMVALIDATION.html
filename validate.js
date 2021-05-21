function validate(){
    let username=document.getElementById("us").value;
    let email=document.getElementById("em").value;
    let password=document.getElementById("pa").value;
    let retype=document.getElementById("re").value;
    
    if(username==" " || username.length<3)
    {
        alert("letters should be greater than 3");
        
    }
    else if(password==" ")
    {
        alert("please enter a password");
    }
    else if((!email.includes("@gmail.com")) && (!email.includes("@yahoo.com")))
    {
        alert("not a valid mail id");
    } 
    else if(password.length < 8)
    {
        alert("password must be greater than 8");
    }
    else if(password.length != retype.length)
    {
        alert("password does not match");

    }
    
    else if(!password.match(/[a-z]/g))
    {
        alert("password must contain lowercase letter");
    }
    else if(!password.match(/[A-Z]/g))
    {
        alert("password must contain uppecase letter");
    }
    else if(!password.match( /[0-9]/g))
    {
        alert("password must contain number");
    }
    else if(!password.match(/[^a-zA-Z\d]/g))
    {
        alert("password must contain a special character");
    }

   
    else  {
        alert("Successfully signup");
    }
    
}