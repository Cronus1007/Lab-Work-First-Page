const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});
var phoneNumber = document.getElementById("#phone");

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && ((charCode < 48 || charCode > 57) && charCode != 43 && charCode != 45 && charCode != 40 && charCode != 41 && charCode != 32))
        return false;
    return true;
}

function checkRadio() {
    var grabRadio = document.querySelectorAll("#checkbox-radio input");
    var checkStudentInput = document.querySelector(".studentinput");
    var checkProfessionalInput = document.querySelector(".professionalinput");
    var submit = document.querySelector(".submit");
    /* var block = "block";
    var none = "none";*/
    if (grabRadio[0].checked) {
        checkStudentInput.style.display = "block";
        checkProfessionalInput.style.display = "none";
        submit.style.display = "block"

    } else if (grabRadio[1].checked) {
        checkStudentInput.style.display = "none"
        checkProfessionalInput.style.display = "block"
        submit.style.display = "block"
    }
}

function formValidation() {
    var studentname = document.getElementById("clg");
    var checkCollegeInput = document.querySelector(".studentinput input");
    if (studentname.value.trim() == "") {
        checkCollegeInput.style.border = "2px inset red"
    } else {
        checkCollegeInput.style.border = "2px inset blue"
    }
    var courseName = document.getElementById("course")
    var checkCourseInput = document.querySelectorAll(".studentinput input");
    if (courseName.value.trim() == "") {
        checkCourseInput[1].style.border = "2px inset red"
    } else {
        checkCourseInput[1].style.border = "2px inset blue"
    }
    var companyName = document.getElementById("compName");
    var checkCompanyInput = document.querySelectorAll(".professionalinput input");
    if (companyName.value.trim() == "") {
        checkCompanyInput[0].style.border = "2px inset red"
    } else {
        checkCompanyInput[0].style.border = "2px inset blue"
    }
    var titleName = document.getElementById("title");
    var checkCompanyInput = document.querySelectorAll(".professionalinput input");
    if (titleName.value.trim() == "") {
        checkCompanyInput[1].style.border = "2px inset red"
    } else {
        checkCompanyInput[1].style.border = "2px inset blue"
    }
    var name = document.getElementById("name");
    var checkNameInput = document.querySelectorAll(".overlay-left input")
    if (name.value.trim() == "") {
        checkNameInput[0].style.border = "2px inset red"
    } else {
        checkNameInput[0].style.border = "2px inset white"
    }
    var email = document.getElementById("email");
    if (email.value.trim() == "") {
        checkNameInput[1].style.border = "2px inset red"
    } else {
        checkNameInput[1].style.border = "2px inset white"
    }
    var phone = document.getElementById("phone");
    if (phone.value.trim() == "") {
        checkNameInput[2].style.border = "2px inset red"
    } else {
        checkNameInput[2].style.border = "2px inset white"
    }
    var gender = document.getElementById("gender");
    var checkSelect = document.querySelectorAll(".overlay-left select")
    console.log(checkSelect)
    if (gender.value == "Gender") {
        checkSelect[0].style.border = "2px inset red"
        console.log(checkSelect)
    } else {
        checkSelect[0].style.border = "2px inset white"
    }
    submitForm()
}

function submitForm() {
    var studentname = document.getElementById("clg");
    var checkCollegeInput = document.querySelector(".studentinput input");
    var courseName = document.getElementById("course")
    var checkCourseInput = document.querySelectorAll(".studentinput input");
    var companyName = document.getElementById("compName");
    var checkCompanyInput = document.querySelectorAll(".professionalinput input");
    var titleName = document.getElementById("title");
    var checkCompanyInput = document.querySelectorAll(".professionalinput input");
    var name = document.getElementById("name");
    var checkNameInput = document.querySelectorAll(".overlay-left input")
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var gender = document.getElementById("gender");
    var checkSelect = document.querySelectorAll(".overlay-left select")
    var emailId = email.value;
    var atpos = emailId.indexOf("@")
    if (atpos != -1) {
        var dotpos = emailId.lastIndexOf(".");
        if (dotpos != -1) {
            console.log(dotpos - atpos)
            console.log(emailId.length - dotpos)
            if (emailId.length - dotpos == 1) {
                alert("Incorrect Email ID!")
                return false;
            }
        }
    }
    if (studentname.value != "" && courseName != "" && name.value != "" && email.value != "" && phone.value != "" && gender.value != "Gender") {
        alert("Form Submitted for Student Profile!")
    } else if (companyName.value != "" && titleName != "" && name.value != "" && email.value != "" && phone.value != "" && gender.value != "Gender") {
        alert("Form Submitted for Professional Profile!")
    } else {
        alert("Vacant Spaces Avlaible while Registering!")
    }
}

function isCharacterKey(evt) {
    var name = document.getElementById("name");
    var charAscii = (evt.which) ? evt.which : evt.keyCode;
    if (charAscii > 31 && (charAscii == 32 || (charAscii >= 65 && charAscii <= 90) || (charAscii > 97 && charAscii < 122))) {
        if (name.value.trim().length > 52) {
            alert("Username Too Long!")
        }
        return true;
    } else {
        return false;
    }

}

function isEmailCharacterKey() {
    var email = document.getElementById("email");
    var emailId = email.value;
    var atpos = emailId.indexOf("@")
    if (atpos != -1) {
        var dotpos = emailId.lastIndexOf(".");
        if (dotpos != -1) {
            console.log(dotpos - atpos)
            console.log(emailId.length - dotpos)
            if (atpos < 1 || (dotpos - atpos == 1)) {
                alert("Incorrect Email ID!")
                return false;
            } else {
                return true
            }
        }
    }

}