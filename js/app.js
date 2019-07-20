if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("../sw.js").then(() => {
      console.log("Service Worker Registered");
    });
  });
}

const getFormData = () => {
  let orderItem = document.getElementById("orderItem").value;
  let orderLocale = document.getElementById("locale").value;
  // let orderBtn = `sms://08097463636?body=I want to Order: ${orderItem} Location: ${orderLocale}`;
  document.getElementById(
    "txr"
  ).href = `sms://08097463636?body=I want to Order: ${orderItem} Location: ${orderLocale}`;
  document.getElementById("orderItem").value = "";
  document.getElementById("locale").value = "";
  console.log(orderItem, orderLocale);
};

const addData = () => {
  getFormData();
};
const item1 = () => {
  let title = document.getElementById("item1").textContent;
  document.getElementById("title").innerHTML = title;
};

const item2 = () => {
  let title = document.getElementById("item2").textContent;
  document.getElementById("title").innerHTML = title;
  getFormData();
};
// test();
$(document).ready(function() {
  $("div a").click(function() {
    $("div a").removeClass("active");
    $(this).addClass("active");
  });
});
