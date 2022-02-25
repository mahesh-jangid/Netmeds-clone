let itemsInCart = document.getElementById("itemsInCart");

let getCount = JSON.parse(localStorage.getItem("count"));
console.log(getCount);
itemsInCart.textContent = getCount;

// ----------------Logged User ----------------//
let user = JSON.parse(localStorage.getItem("user_data"));

let userLoginName = document.getElementById("userLoginName");
userLoginName.textContent = ` ${user.username}`;
