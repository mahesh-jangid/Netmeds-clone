const upperObj = [
  {
    id: `${1}`,
    disc: `${0}`,
    image: `https://www.netmeds.com/images/product-v1/150x150/828833/vlcc_3d_youth_boost_spf_40_sunscreen_gel_creme_100_gm_0.jpg`,
    name: `VLCC 3D Youth Boost SPF 40 Sunscreen Gel Creme 100 gm`,
    mfr: ` VLCC Personal Care Ltd`,
    price1: ``,
    price2: 395.0,
  },
  {
    id: `${2}`,
    disc: `${10}`,
    image: `https://www.netmeds.com/images/product-v1/150x150/909312/vegetal_bio_spf_30_sunscreen_lotion_100_ml_0_0.jpg`,
    name: `Vegetal BIO SPF-30 Sunscreen Lotion 100 ml`,
    mfr: ` AMA HERBAL LABORATORATORIES`,
    price1: `Rs. ${485}`,
    price2: 436.5,
  },
  {
    id: `${3}`,
    disc: `${0}`,
    image: `https://www.netmeds.com/images/product-v1/150x150/819281/vlcc_radiance_pro_spf_30_pa_sunscreen_gel_50_gm_0_1.jpg`,
    name: `VLCC Radiance Pro SPF 30 Pa+++ Sunscreen Gel 50 gm`,
    mfr: `VLCC Personal Care Ltd`,
    price1: ``,
    price2: 265.0,
  },
  {
    id: `${4}`,
    disc: `${10}`,
    image: `https://www.netmeds.com/images/product-v1/150x150/824272/sri_sri_tattva_protecting_sunscreen_60_ml_0.jpg`,
    name: `Sri Sri Tattva Protecting Sunscreen 60 ml`,
    mfr: `Sriveda Sattva Pvt Ltd`,
    price1: `Rs. ${80.0}`,
    price2: 72.0,
  },
  {
    id: `${5}`,
    disc: `${12}`,
    image: `https://www.netmeds.com/images/product-v1/150x150/829467/ayur_herbal_spf_15_sunshield_cream_100_ml_0.jpg`,
    name: `Ayur Herbal SPF 15 Sunscreen Lotion 100 ml`,
    mfr: `Ayur Herbals`,
    price1: `Rs. ${100.0}`,
    price2: 88.0,
  },
  {
    id: `${6}`,
    disc: `${18}`,
    image: `https://www.netmeds.com/images/product-v1/150x150/407053/biotique_bio_aloe_vera_30_spf_uva_uvb_sunscreen_ultra_soothing_face_cream_for_normal_to_oily_skin_50_gm_0.jpg`,
    name: `Biotique Bio Aloe Vera 30+ SPF UVA/UVB Sunscreen Ultra Soothing Face Cream for Normal to Oily Skin 50 gm`,
    mfr: `Mfr: Bio Veda Action Research Company`,
    price1: `Rs. ${220.0}`,
    price2: 180.4,
  },
  // {
  //     id: `${7}`,
  //     disc: `${6}`,
  //     image: `https://www.netmeds.com/images/product-v1/150x150/408895/himalaya_herbals_spf_15_protective_sunscreen_lotion_50_ml_0.jpg`,
  //     name: `Himalaya Herbals SPF 15 Protective Sunscreen Lotion 50 ml`,
  //     mfr: `The Himalaya Drug Company`,
  //     price1: `Rs. ${120.00}`,
  //     price2: 112.8,
  // },
  // {
  //     id: `${8}`,
  //     disc: `${6}`,
  //     image: `https://www.netmeds.com/images/product-v1/150x150/408895/himalaya_herbals_spf_15_protective_sunscreen_lotion_50_ml_0.jpg`,
  //     name: `Himalaya Herbals SPF 15 Protective Sunscreen Lotion 100 ml`,
  //     mfr: `The Himalaya Drug Company`,
  //     price1: `Rs. ${220.00}`,
  //     price2: 206.80,
  // },
];

const lowerObj = [
  {
    id: `${9}`,
    disc: `${50}`,
    image: `https://www.netmeds.com/images/product-v1/150x150/915643/zebronics_fingertip_pulse_oximeter_zeb_fpo500_0_0.jpg`,
    name: `Zebronics Fingertip Pulse Oximeter (ZEB-FPO500)`,
    mfr: `Zebronics India Private Limited`,
    price1: `Rs. ${2999.0}`,
    price2: 1499.0,
  },
  {
    id: `${10}`,
    disc: `${42}`,
    image: `https://www.netmeds.com/images/product-v1/150x150/902221/sahyog_wellness_multi_function_non_contact_body_object_infrared_thermometer_0_1.jpg`,
    name: `Sahyog Wellness Multi Function Non-Contact Body & Object Infrared Thermometer`,
    mfr: `Sahyog Wellness`,
    price1: `Rs. ${2499.0}`,
    price2: 1499.42,
  },
  {
    id: `${11}`,
    disc: `${8}`,
    image: `https://www.netmeds.com/images/product-v1/150x150/910225/face_shield_with_elastic_band_0_0.jpg`,
    name: `Face Shield with Elastic Band`,
    mfr: ` R K Traders`,
    price1: ``,
    price2: 1000.0,
  },
  {
    id: `${12}`,
    disc: `${62.5}`,
    image: `https://www.netmeds.com/images/product-v1/150x150/915379/covid_19_immunity_booster_pack_vitamin_c_strips_vitamin_d_strips_120s_0_1.jpg`,
    name: `Covid-19 Immunity Booster Pack (Vitamin C Strips + Vitamin D Strips) 120's`,
    mfr: ` Bonayu Lifesciences Pvt Ltd`,
    price1: `Rs. ${1150.0}`,
    price2: 1058.0,
  },
  {
    id: `${13}`,
    disc: `${32}`,
    image: `https://www.netmeds.com/images/product-v1/150x150/915649/accusure_pulse_oximeter_0_0.jpg`,
    name: `AccuSure Pulse Oximeter`,
    mfr: `Microgene Diagnostic Systems Pvt Ltd`,
    price1: `Rs. ${3999.0}`,
    price2: 1499.63,
  },
  {
    id: `${14}`,
    disc: `${20}`,
    image: `https://www.netmeds.com/images/product-v1/150x150/902222/sahyog_wellness_multi_function_non_contact_forehead_ear_infrared_thermometer_0_1.jpg`,
    name: `Sahyog Wellness Multi Function Non-Contact Forehead & Ear Infrared Thermometer`,
    mfr: `Sahyog Wellness`,
    price1: `Rs. ${2499.0}`,
    price2: 1699.3,
  },
];
// ! Upper Object
if (localStorage.getItem("upperItems") == null) {
  localStorage.setItem("upperItems", JSON.stringify(upperObj));
}
let upperData = JSON.parse(localStorage.getItem("upperItems"));

// ! Lower Object
if (localStorage.getItem("lowerItems") == null) {
  localStorage.setItem("lowerItems", JSON.stringify(lowerObj));
}
let lowerData = JSON.parse(localStorage.getItem("lowerItems"));

//! Upper Products Function
function showProductUp(data) {
  let flexProductUp = document.getElementById("flexProductUp");

  for (item in data) {
    let el = data[item];
    console.log(el);

    let divPro = document.createElement("div");

    let p_disc = document.createElement("p");
    p_disc.innerHTML = `${el.disc}% OFF`;

    let imgPro = document.createElement("img");
    imgPro.src = `${el.image}`;

    let h5Pro = document.createElement("h5");
    h5Pro.textContent = `${el.name}`;

    let p_mfr = document.createElement("p");
    p_mfr.textContent = `Mfr: ${el.mfr}`;

    let p_price = document.createElement("p");
    p_price.innerHTML = ` <p><span><strike>${el.price1} </strike></span><strong> Rs.${el.price2}</strong></p>`;

    let btnPro = document.createElement("button");
    btnPro.textContent = `ADD TO CART`;
    flexProductUp.append(divPro);
    divPro.append(p_disc, imgPro, h5Pro, p_mfr, p_price, btnPro);

    btnPro.onclick = function () {
      console.log("Add to cart");
      addToCart(el);
    };
  }
}
showProductUp(upperData);

//! Lower Products Function
function showProductDown(data) {
  let flexProductUp = document.getElementById("flexProductDown");

  for (item in data) {
    let el = data[item];
    console.log(el);

    let divPro = document.createElement("div");

    let p_disc = document.createElement("p");
    p_disc.innerHTML = `${el.disc}% OFF`;

    let imgPro = document.createElement("img");
    imgPro.src = `${el.image}`;

    let h5Pro = document.createElement("h5");
    h5Pro.textContent = `${el.name}`;

    let p_mfr = document.createElement("p");
    p_mfr.textContent = `Mfr: ${el.mfr}`;

    let p_price = document.createElement("p");
    p_price.innerHTML = ` <p><span><strike>${el.price1} </strike></span><strong> Rs.${el.price2}</strong></p>`;

    let btnPro = document.createElement("button");
    btnPro.textContent = `ADD TO CART`;
    flexProductUp.append(divPro);
    divPro.append(p_disc, imgPro, h5Pro, p_mfr, p_price, btnPro);

    btnPro.onclick = function () {
      // console.log("Add to cart")
      addToCart(el);
    };
  }
}
showProductDown(lowerData);

//! count item in cart
let count;
count = JSON.parse(localStorage.getItem("count"));
if (count == null) {
  localStorage.setItem("count", JSON.stringify(0));
}
// console.log(count);

function addToCart(el) {
  console.log(`btnProduct`, el);

  let cartArray = localStorage.getItem("cartProduct");
  console.log(cartArray);
  if (cartArray == null) cartArray = [];
  else cartArray = JSON.parse(cartArray);

  cartArray.push(el);
  localStorage.setItem("cartProduct", JSON.stringify(cartArray));

  localStorage.setItem("count", JSON.stringify(++count));

  //! Items In Cart
  let itemsInCart = document.getElementById("itemsInCart");
  itemsInCart.textContent = count;
}
