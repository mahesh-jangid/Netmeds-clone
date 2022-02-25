let medData = JSON.parse(localStorage.getItem("medData")) || [];

let form = document.getElementById("booknow");
console.log(form);
form.addEventListener("click", FormData);

function FormData(e) {
  e.preventDefault();
  let checkbox = document.getElementById("checkbox").checked;
  console.log(checkbox);
  let obj = {
    name: document.getElementById("name").value,
    mobile: document.getElementById("mobile").value,
    pin: document.getElementById("pin").value,
    package: document.getElementById("mySelect").value,
  };
  document.getElementById("name").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("pin").value = "";

  console.log(obj);
  if (
    obj.name == "" ||
    obj.mobile == "" ||
    obj.pin == "" ||
    obj.package == "Select"
  ) {
    alert("Please Fill all the detail");
  } else if (checkbox == false) {
    alert("Please Check on terms and conditions");
  } else {
    medData.push(obj);
    localStorage.setItem("medData", JSON.stringify(medData));
    setTimeout(() => {
      alert("Your Appointment is Booked");
    }, 0);
  }
}
