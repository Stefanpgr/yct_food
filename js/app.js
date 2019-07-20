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
  let orderBtn = `<a href="sms://08097463636?body=I want to Order: ${orderItem} Location: ${orderLocale}"><button onclick="getFormData()"  type="button" class="btn btn-success btn-sm">
              Text Now!
            </button></a>`;
  document.getElementById("order").innerHTML = orderBtn;
  document.getElementById("orderItem").value = "2";
  document.getElementById("locale").value = "1";
  console.log(orderItem, orderLocale);
};

const item1 = () => {
  let title = document.getElementById("item1").textContent;
  document.getElementById("title").innerHTML = title;
  getFormData();
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
