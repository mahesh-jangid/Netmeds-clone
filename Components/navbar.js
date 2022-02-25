function navbar() {
  return ` <header class="navBar">
      <div class="pageWrap logo">
        <a href="index.html"
          ><img
            src="https://www.netmeds.com/assets/gloryweb/images/home-logo-netmeds.svg"
            alt="Logo"
        /></a>
      </div>
      <div class="searchDiv">
        <div class="deliveryBox">
          <img src="Images/locationHome.png" alt="" />
          <div>
            <p>Delivering to</p>
            <div>
              <h4 id="editH4" min="1" max="6">110001</h4>
              <!--  <input type="number" value="110001" id="inpEdit" min="1" max="6"> -->
              <button id="penEdit"><img src="Images/pen.png" alt="" /></button>
            </div>
          </div>
        </div>
        <div class="searchBox">
          <input
            type="search"
            id="searchProduct"
            placeholder="Search for medicine & wellness product..."
          />
        </div>
        <div class="btnBox">
          <button><img src="Images/searchBtn.png" alt="" /></button>
        </div>
      </div>
      <div class="box">
            <div class="cartIconDiv invert">
        <a href="cart.html"
          ><img src="Images/cartIcon.png" alt="Cart Bag" />
          <p id="itemsInCart">0</p>
        </a>
      </div>
      <div class="userIconDiv invert">
        <a href="signup.html"
          ><img src="Images/userIcon.png" alt="User Login"
        /></a>
      </div>
      <div class="loginDiv">
        <a href="signup.html" id="userLoginName">Sign in / Sign up</a>
      </div>
      </div>

    </header>`;
}
export default navbar;
