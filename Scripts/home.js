const sliderArr = [
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1645538804_Home_Bannersfdgs.jpg",
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1641829832_Homebvbbbb.jpg",
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1643645501_Home_Banner741.jpg",
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1645540335_Web_Home_title_banner.jpg",
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1645538804_Home_Bannersfdgs.jpg",
];

let imgSlider = document.getElementById("mainSlider");

let imgSlide = document.createElement("img");
imgSlider.append(imgSlide);

imgSlide.src = sliderArr[0];
console.log(imgSlide);

let i = 0;
setInterval(function () {
  if (i == sliderArr.length) {
    i = 0;
  }
  imgSlide.src = sliderArr[i++];
}, 2500);
