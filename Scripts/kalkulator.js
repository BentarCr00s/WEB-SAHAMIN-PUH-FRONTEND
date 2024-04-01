// ================ RESPONSIVE NAVBAR ================ //
const menuButton = document.querySelector(".nav-list-button");
const menuList = document.querySelector(".menu-area");

menuButton.addEventListener("click", () => {
  menuList.classList.toggle("active");
});
// ================ RESPONSIVE NAVBAR ================ //

$(document).ready(function () {
  $("#result").click(function () {
    var buy = parseFloat($("#buy").val());
    var buyCommission = parseFloat($("#buyCommission").val());
    var sell = parseFloat($("#sell").val());
    var lot = parseFloat($("#lot").val());
    var sellCommission = parseFloat($("#sellCommission").val());
    var totBuy = buy * lot + buy * lot * (buyCommission / 100);
    var totSell = sell * lot - sell * lot * (sellCommission / 100);
    var profitLoss = totSell - totBuy;
    var profitLossPercent = (profitLoss / totBuy) * 100;
    $("#totBuy").text(totBuy.toFixed(2));
    $("#totSell").text(totSell.toFixed(2));
    $("#profitLoss").text(profitLoss.toFixed(2));
    $("#profitLossPercent").text(profitLossPercent.toFixed(2) + "%");
  });
});
