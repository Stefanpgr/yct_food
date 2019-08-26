if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("../sw.js").then(() => {
      console.log("Service Worker Registered");
    });
  });
}

const numObj = {
  nikki: "08072773053",
  adex: " 08037863809",
  sam: "08135053968",
  ff: "08130845097",
  bukola: "08035062445",
  ewaNaB: "08165018330"
};

// console.log(vendorNum[0]);
const getFormData = () => {
  // console.log(vendorNum, "check");
  const orderItem = document.getElementById("orderItem").value;
  const orderLocale = document.getElementById("locale").value;

  const isInvalid = "";
  console.log(typeof orderItem);
  // let orderBtn = `sms://08097463636?body=I want to Order: ${orderItem} Location: ${orderLocale}`;
  if (orderItem === isInvalid) {
    alert("invalid input, Pls check input fields");
  } else {
    document.getElementById(
      "txr"
    ).href = `sms://${vendorNum}?body=I want to Order: ${orderItem} Location: ${orderLocale}`;
    console.log(orderItem, orderLocale);
    document.getElementById("orderItem").value = "";
    document.getElementById("locale").value = "";
  }
};

const valid = () => {};

const addData = () => {
  getFormData();
};
const item1 = () => {
  let title = document.getElementById("item1").textContent;
  document.getElementById("title").innerHTML = title;
  vendorNum = Number(numObj.nikki);
  // getFormData(vendorNum);

  return vendorNum;
};

const item2 = () => {
  let title = document.getElementById("item2").textContent; // collects card title
  document.getElementById("title").innerHTML = title; //modal title
  vendorNum = Number(numObj.adex);
  getFormData(vendorNum);

  return vendorNum;
};
// console.log(num);
// const item2 = () => {
//   let title = document.getElementById("item2").textContent; // collects card title
//   document.getElementById("title").innerHTML = title; //modal title
//   const vendorNum = numObj.adex;
//   getFormData(vendorNum);

//   return vendorNum;
// };
// console.log(vendorNum, "item2", item2());
const item3 = () => {
  let title = document.getElementById("item3").textContent; // collects card title
  document.getElementById("title").innerHTML = title; //modal title
  vendorNum = Number(numObj.bukola);
  getFormData(vendorNum);

  return vendorNum;
};

const item4 = () => {
  let title = document.getElementById("item4").textContent; // collects card title
  document.getElementById("title").innerHTML = title; //modal title
  vendorNum = Number(numObj.sam);
  getFormData(vendorNum);

  return vendorNum;
};

const item5 = () => {
  let title = document.getElementById("item5").textContent; // collects card title
  document.getElementById("title").innerHTML = title; //modal title
  getFormData();
  vendorNum = Number(numObj.ewaNaB);
  getFormData(vendorNum);

  return vendorNum;
};
const item6 = () => {
  let title = document.getElementById("item6").textContent; // collects card title
  document.getElementById("title").innerHTML = title; //modal title
  getFormData();
  vendorNum = Number(numObj.ff);
  getFormData(vendorNum);

  return vendorNum;
};
// if (item1) {
//   vendorNum = numObj.nikki;
// } else if (item2) {
//   vendorNum = numObj.adex;
// }
// console.log(vendorNum, "he");

// test();
// $(document).ready(function() {
//   $("nav div > div > a").click(function() {
//     $("nav div > div > a").removeClass("active");
//     $(this).addClass("active");
//   });
// });
