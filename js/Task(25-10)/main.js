function sesstionStorge_1() {
  var Name = document.getElementById("Name_010").value;
  var PhoneNumber = document.getElementById("phoneNumber_2").value;
  var Email = document.getElementById("Email_2").value;
  var Password = document.getElementById("Password_1").value;

  sessionStorage.setItem("Name", Name);
  sessionStorage.setItem("PhoneNumber", PhoneNumber);
  sessionStorage.setItem("Email", Email);
  sessionStorage.setItem("Password", Password);
}

function LocalStorage_1() {
  var Name = document.getElementById("Name_010").value;
  var PhoneNumber = document.getElementById("phoneNumber_2").value;
  var Email = document.getElementById("Email_2").value;
  var Password = document.getElementById("Password_1").value;

  localStorage.setItem("Name", Name);
  localStorage.setItem("PhoneNumber", PhoneNumber);
  localStorage.setItem("Email", Email);
  localStorage.setItem("Password", Password);
}

function RemoveSessionStorage() {
  sessionStorage.clear();
}

function RemoveLocalStorage() {
  localStorage.clear();
}

$("#Btn_1").click(function () {
  var phoneNumber = document.getElementById("phoneNumber_2").value;
  var email = document.getElementById("Email_2").value;
  if (!phoneNumber.match(/^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/)) {
    document.getElementById("Error_1").innerHTML =
      "Enter VALID number. Ex: 000-000-0000";
  }

  if (
    !email.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    document.getElementById("Error_2").innerHTML =
      "Enter VALID Email. Ex: name@email.com";
  }
});
