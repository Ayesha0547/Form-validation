function validateForm(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let pass = document.getElementById("password").value
    let age = document.getElementById("age").value

    let nameInput = document.getElementById("name")
    let emailInput = document.getElementById("email")
    let passInput = document.getElementById("password")
    let ageInput = document.getElementById("age")


    if(name == ""){
        nameInput.style.borderColor = "red"
        alert("Fill this please")
    }else{
        nameInput.style.borderColor = "green"
    }


    if(email.indexOf("@")==-1 || email.length<5){
        emailInput.style.borderColor = "red"
        alert("Sorry email is wrong")
    }else{
        emailInput.style.borderColor = "green"
    }


    if(pass.length<6){
        passInput.style.borderColor = "red"
        alert("Atleast 6 digits please!")
    }else{
        passInput.style.borderColor = "green"
    }


    if(age == ""){
        ageInput.style.borderColor = "red"
        alert("Write your age please")
    }else if(age < 18){
        ageInput.style.borderColor = "red"
        alert("Sorry age less then 18 is not alloweded")
    }else{
        ageInput.style.borderColor = "green"
    }


    if(name != "" && email.includes("@") && pass.length>=6 && age>17){
        alert("Congratulations your form has been submitted successfuly")
    }
}
