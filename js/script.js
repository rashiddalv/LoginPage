var passLabel = document.getElementById("pass-eye"),
  passForm = document.getElementById("password"),
  nameForm = document.getElementById("username");
  form = document.getElementById("form");


var name_error = document.getElementById("error-user");
var pass_error = document.getElementById("error-pass");
var userIcon = document.getElementById("userIcon")
var keyIcon = document.getElementById("keyIcon")

passLabel.onclick = function () {
  if (passForm.getAttribute("type") === "password") {
    passForm.setAttribute("type", "text");
    passLabel.classList.remove("fa-eye");
    passLabel.classList.add("fa-eye-slash");
  } else {
    passForm.setAttribute("type", "password");
    passLabel.classList.remove("fa-eye-slash");
    passLabel.classList.add("fa-eye");
  }
};


nameForm.addEventListener('textInput', name_Verify);
passForm.addEventListener('textInput', pass_Verify);
// ==================================================
// ==================================================

function validated() {
  if (nameForm.value.length < 9) {
    nameForm.style.border = "1px solid #a81b1b";
    name_error.style.display = "block";
    nameForm.focus();
    userIcon.style.color = "#a81b1b"
    return false;
  } else {
    name_error.style.display = "none";
    nameForm.style.border = "1px solid green";
    userIcon.style.color = "green"


  }

  if (passForm.value.length < 9) {
    passForm.style.border = "1px solid #a81b1b";
    pass_error.style.display = "block";
    passForm.focus();
    keyIcon.style.color = "#a81b1b"
    return false;
  } else {
    pass_error.style.display = "none";
    passForm.style.border = "1px solid green";
    keyIcon.style.color = "green";
  }
}


// =============================================
// ==================VERIFY=====================
// =============================================

//doesn`t work

function name_Verify() { 
  if (nameForm.value.lenght >= 8) {
    nameForm.style.border = "1px solid green";
    name_error.style.display = "none";
    return true;
  }
}
function pass_Verify() {
  if (passForm.value.lenght >= 4) {
    passForm.style.border = "none";
    pass_error.style.display = "none";
    return true;
  }
}

// =============================================
// =============================================
// =============================================

function myText() {
  var button = document.getElementById("login-submit");
  button.style.border = "1px solid #1f2029"
  button.style.background = "#1f2029"
  button.innerHTML =  `<i class="fa-solid fa-check"></i>`
  
}




