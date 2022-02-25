let cartData = JSON.parse(localStorage.getItem("cartProduct"));
// console.log(`cartData`, cartData);

count = JSON.parse(localStorage.getItem("count"));


function showCart(data) {
  let cartCont = document.getElementById("cartCont");
  let leftCart = document.getElementById("leftCart");
  let rightCart = document.getElementById("rightCart");

  let cartH1 = document.createElement("h1");
  cartH1.textContent = `${count} Items in Cart`;
  cartCont.insertBefore(cartH1, leftCart);

  let cartSlider = document.createElement("div");
  cartSlider.setAttribute("class", "cartSlider");

  let cartImg = document.createElement("img");

  let mainCart = document.createElement("div");
  mainCart.setAttribute("class", "mainCart");

  let mainCartH5 = document.createElement("h5");
  mainCartH5.textContent = `ORDER SUMMARY`;
  mainCart.append(mainCartH5);

  cartSlider.append(cartImg);
  leftCart.append(cartSlider, mainCart);

  let cartImgArr = [
    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1623246675_Web_homevdas.jpg",
    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1619783794_Web_homertte.jpg",
    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1619784158_Home_bannerma25.jpg",
    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1622469732_free_webhomed.jpg",
  ];

  cartImg.src = cartImgArr[0];

  let i = 0;
  setInterval(function () {
    if (i == cartImgArr.length) {
      i = 0;
    }
    cartImg.src = cartImgArr[i++];
  }, 2500);

  let sum = 0;
  // sum.toFixed(2);
  for (item in data) {
    let el = data[item];

    sum += el.price2;

    let cartDivPro = document.createElement("div");
    cartDivPro.setAttribute("class", "cartDivPro");
    mainCart.append(cartDivPro);

    let cartIconDiv = document.createElement("div");
    let detailsDiv = document.createElement("div");
    cartDivPro.append(cartIconDiv, detailsDiv);

    let cartIconImg = document.createElement("img");
    cartIconImg.src = `${el.image}`;
    cartIconDiv.append(cartIconImg);

    let detailDivChild1 = document.createElement("div");
    let detailDivChild2 = document.createElement("div");
    let detailDivChild3 = document.createElement("div");

    detailsDiv.append(detailDivChild1, detailDivChild2, detailDivChild3);

    let p1Child1 = document.createElement("p");
    p1Child1.textContent = `${el.name}`;
    let p2Child1 = document.createElement("p");
    p2Child1.textContent = `Rs.${el.price2}`;
    detailDivChild1.append(p1Child1, p2Child1);

    let pChild2 = document.createElement("p");
    pChild2.textContent = `Mfr: ${el.mfr}`;
    let divChild2 = document.createElement("div");
    divChild2.textContent = `QTY:`;
    detailDivChild2.append(pChild2, divChild2);

    let select = document.createElement("select");
    divChild2.append(select);

    for (let i = 1; i <= 10; i++) {
      let option = document.createElement("option");
      option.value = i;
      option.textContent = i;
      select.append(option);
    }

    select.addEventListener("change", function () {
      let getValue = +select.value;
      // console.log(getValue, el.price2);

      let getP = p2Child1.textContent;
      let oldPrice = Number(getP.split("Rs.")[1]);

      let total = el.price2 * getValue;
      total = total.toFixed(2);
      p2Child1.textContent = `Rs.${total}`;

      sum += total - oldPrice;
      sum.toFixed(2);

      localStorage.setItem("totalPrice", JSON.stringify(sum));

      // console.log(`total`, total)
      p2PayChild1.textContent = `Rs. ${sum}`;
      p2PayChild2.innerHTML = `<p><strong>Rs. ${sum}</strong></p>`;
      h3Child3.textContent = `Rs. ${sum}`;
    });

    let pChild3 = document.createElement("p");
    pChild3.textContent = `Delivery between Feb 25th-27th`;
    let btnChild3 = document.createElement("button");
    btnChild3.textContent = `Remove`;
    detailDivChild3.append(pChild3, btnChild3);

    // let itemsInCart = document.getElementById('itemsInCart');
    // itemsInCart.textContent = count

    btnChild3.addEventListener("click", function (event) {
      event.target.parentNode.parentNode.parentNode.remove();
      removeData(el.id);

      let getP = p2Child1.textContent;
      let oldPrice = Number(getP.split("Rs.")[1]);

      sum -= oldPrice;
      // sum.toFixed(2);

      localStorage.setItem("totalPrice", JSON.stringify(sum));

      p2PayChild1.textContent = `Rs. ${sum}`;
      p2PayChild2.innerHTML = `<p><strong>Rs. ${sum}</strong></p>`;
      h3Child3.textContent = `Rs. ${sum}`;

      localStorage.setItem("count", JSON.stringify(--count));

      cartH1.textContent = `${count} Items in Cart`;

      itemsInCart.textContent = count;
    });
  }
  console.log(`PriceSum`, sum);
  localStorage.setItem("totalPrice", JSON.stringify(sum));

  //! Payment Division

  let paymentH5 = document.createElement("h5");
  paymentH5.textContent = `PAYMENT DETAILS`;

  let payDiv = document.createElement("div");
  let payChild1 = document.createElement("div");
  let payChild2 = document.createElement("div");
  let payChild3 = document.createElement("div");

  rightCart.append(paymentH5, payDiv);
  payDiv.append(payChild1, payChild2, payChild3);

  let p1PayChild1 = document.createElement("p");
  p1PayChild1.textContent = `MRP Total`;
  let p2PayChild1 = document.createElement("p");
  p2PayChild1.textContent = `Rs. ${sum}`;
  payChild1.append(p1PayChild1, p2PayChild1);

  let p1PayChild2 = document.createElement("p");
  p1PayChild2.innerHTML = `<p><strong>Total Amount<sup>*</sup></strong></p>`;
  let p2PayChild2 = document.createElement("p");
  p2PayChild2.innerHTML = `<p><strong>Rs. ${sum}</strong></p>`;
  payChild2.append(p1PayChild2, p2PayChild2);

  let h3Child3 = document.createElement("h3");
  h3Child3.textContent = `Rs. ${sum}`;
  let btnPayChild3 = document.createElement("button");
  btnPayChild3.textContent = `PROCEED`;
  payChild3.append(h3Child3, btnPayChild3);

  btnPayChild3.onclick = function () {
    if (count == 0) alert("Please add item in cart!");
    else window.location.href = `payment.html`;
  };

  let pSmallPay = document.createElement("p");
  pSmallPay.textContent = `Netmeds is a technology platform to facilitate transaction of business. The products and services are offered for sale by the sellers. The user authorizes the delivery personnel to be his agent for delivery of the goods. For details read Terms & Conditions`;
  rightCart.append(pSmallPay);
}
showCart(cartData);

function removeData(el) {
  var inputId = el;
  console.log(inputId);
  for (var i = 0; i < cartData.length; i++) {
    if (cartData[i].id == inputId) {
      cartData.splice(i, 1);
      localStorage.setItem("cartProduct", JSON.stringify(cartData));
      console.log(cartData);
    }
  }
}

