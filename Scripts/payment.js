let addressBtn = document.getElementById("addressBtn");
addressBtn.addEventListener("click", showAddress);

let mainDiv = document.getElementById("mainDiv");

let paymentD = document.getElementById("paymentD");
let addressDiv = document.createElement("div");
let paymentDiv = document.createElement("div");
paymentD.append(addressDiv, paymentDiv);

let payValue = JSON.parse(localStorage.getItem("totalPrice"));
console.log(payValue);

let showAlert = document.getElementById("showAlert");

let popUp = document.getElementById("popUp");

count = JSON.parse(localStorage.getItem("count"));
let itemsInCart = document.getElementById("itemsInCart");
itemsInCart.textContent = count;

function showAddress(e) {
  e.preventDefault();

  let formData = document.getElementById("addressForm");

  let name = formData.name.value;
  let email = formData.email.value;
  let number = formData.number.value;
  let address = formData.address.value;
  let city = formData.city.value;
  let state = formData.state.value;
  let pin = formData.pin.value;

  // console.log(name, email, number, address, city, state, pin)

  if (name && email && number && address && city && state && pin) {
    addressDiv.innerHTML = `
        <h3>SHIPPING ADDRESS</h3>
        <p>${name}</p>
        <p>${email}</p>
        <p>${number}</p>
        <p>${address}</p>
        <p>${city}</p>
        <p>${state}</p>
        <p>${pin}</p>`;

    paymentDiv.innerHTML = `
        <div>
            <label for="pay">CASH ON DELIVERY</label>
            <input type="radio" name="pay" id="cashPay" onclick="cashOn()">
        </div>
        <div>
            <label for="pay">CREDIT & DEBIT CARD</label>
            <input type="radio" name="pay" id="cardPay" onclick="showInput()">
        </div>
        `;
    showAlert.style.visibility = "hidden";
  } else {
    showAlert.style.visibility = "visible";
    // showAlert.textContent = 'Please Enter Valid Credentials'
  }
  formData.reset();
}
addressDiv.innerHTML = "";

function cashOn() {
  let payCashBtn = document.createElement("button");
  paymentDiv.append(payCashBtn);
  payCashBtn.setAttribute("id", "rmBtn");
  payCashBtn.textContent = `PAY RS. ${payValue} ON CASH`;

  payCashBtn.onclick = function () {
    popUp.style.visibility = "visible";
    mainDiv.style.filter = "blur(4px)";

    emptyCart();
  };

  //! To remove form
  let removeForm = document.getElementById("payForm");
  if (removeForm != null) removeForm.remove();

  showAlert.style.visibility = "hidden";
}

function showInput() {
  let payForm = document.createElement("form");
  paymentDiv.append(payForm);

  payForm.setAttribute("id", "payForm");

  payForm.innerHTML = `
    <label for="card">CARD NUMBER</label>
    <input type="number" name="card" id="card" placeholder="Enter your card number">
    <label for="cvv">CVV</label>
    <input type="number" name="cvv" id="cvv" placeholder="CVV">
    <label for="cardName">NAME ON CARD</label>
    <input type="text" name="cardName" id="hName" placeholder="Card holder name">
    <button onclick="paymentDone(event)">PAY RS. ${payValue}</button>
    `;

  //! To remove button
  let removeBtn = document.getElementById("rmBtn");
  if (removeBtn != null) removeBtn.remove();
}

function paymentDone(e) {
  e.preventDefault();

  let abc = document.getElementById("payForm");
  let cardNo = abc.card.value;
  let cvv = abc.cvv.value;
  let hName = abc.hName.value;

  // console.log(cardNo, cvv, hName)

  if (cardNo && cvv && hName) {
    popUp.style.visibility = "visible";
    showAlert.style.visibility = "hidden";
    mainDiv.style.filter = "blur(4px)";
  } else {
    showAlert.style.visibility = "visible";
    // showAlert.textContent = 'Please Enter Valid Credentials'
  }

  emptyCart();
  abc.reset();
}

function emptyCart() {
  localStorage.setItem("count", JSON.stringify(0));
  localStorage.removeItem("cartProduct");
  count = JSON.parse(localStorage.getItem("count"));
  itemsInCart.textContent = count;
}
