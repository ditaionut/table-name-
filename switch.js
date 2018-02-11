function errorContent(errid, messageErr){
    document.getElementById(errid).innerHTML = messageErr;
    
}

function displayProperty(id, properyText, objectProperty){
    document.getElementById(id).innerHTML = properyText + objectProperty;  
}

function registerForm() {
    var txt;
    

   
    var phone = document.getElementById("phone").value;
    var adress = document.getElementById("adress").value;
    var person = { 
        firstName: null,
        lastName: null,
        phone: null,
        adress: null   
    };
    
        //Gender  
    var gender = document.getElementById("masc").value;
    var gender = document.getElementById("fem").value;
    
    var gen;
    var err;
    if(document.getElementById("masc").checked){
        var gen = "M";
    }
    else if (document.getElementById("fem").checked){
        var gen = "F";
    }
    
    else {
       errorContent("errTxt",  "Please enter your Gender!");
        return false;
    }
    
    //Name & Last name
    var firstName = document.getElementById("name").value;
    var lastName = document.getElementById("lastName").value;
    
    if(firstName == ""){
   errorContent("errTxt", "Please enter your First Name!");
        return false;
    } else if (lastName == ""){
    errorContent("errTxt", "Please enter your Last Name!"); 
        return false;
    }
    
    
    //Phone number 
    
    if(isNaN(phone)){
       var num = "invalid";
    } else if (phone == "") {
      errorContent("errTxt", "Please enter your Phone number!");
        return false;
    } else {
        var num = phone;
    }
    
    //Adress 
    var txt;
    if(adress == ""){
       errorContent("errTxt", "Please enter your Adress!");
        return false;
    }
    else{
        txt = adress;
    }
    
    person.gender = gen;
    person.firstName = firstName;
    person.lastName = lastName;
    person.phone = num;
    person.adress = txt;
    
    console.log(person);
    
    displayProperty("personFirstName", "Name: ", person.firstName);
    displayProperty("personLastName", "Last Name: ", person.lastName);
    displayProperty("personPhone", "Phone no.: ", person.phone);
    displayProperty("personAdress", "Adress: ", person.adress);
    displayProperty("personGender", "Gender: ", person.gender);
    
    
  
}
