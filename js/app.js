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

const show = () => {
  document.getElementById("selectQty").style.display = "block";
};
// console.log(vendorNum[0]);
const getFormData = () => {
  const orderLocale = document.getElementById("locale").value;
  select = document.getElementById("menuItemList");
  const selectedItem = select.options[select.selectedIndex].text;
  console.log(selectedItem);
  console.log(vendorNum);
  const isInvalid = "";

  selectedSwal = document.querySelector("input[name='swal']:checked");
  if (selectedSwal) {
    console.log(selectedSwal.value, "first");
  }

  if (orderLocale === isInvalid) {
    alert("check input fields");
  } else if (selectedSwal) {
    qty = document.getElementById("qty");
    output = document.getElementById("sliderShow");
    output.innerHTML = qty.value;
    qty.oninput = function() {
      output.innerHTML = this.value;
    };
    document.getElementById(
      "txr"
    ).href = `sms://${vendorNum}?body=Order: ${selectedItem} and ${selectedSwal.value}, Qty:${qty.value} Location: ${orderLocale}`;
    console.log(selectedItem, orderLocale);

    document.getElementById("locale").value = "";
  } else {
    document.getElementById(
      "txr"
    ).href = `sms://${vendorNum}?body=Order: ${selectedItem} Location: ${orderLocale}`;
    console.log(selectedItem, orderLocale);

    document.getElementById("locale").value = "";
  }
};

const createMenuItems = ul => {
  select = document.getElementById("menuItemList");

  let menuItems = ul.getElementsByTagName("li");

  for (let i = 0; i < menuItems.length; i++) {
    // Create the list item:
    let item = document.createElement("option");

    // Set its contents:
    item.appendChild(document.createTextNode(menuItems[i].textContent));

    // Add it to the list:
    select.appendChild(item);
  }
};

// checks for and removes item created to prevent other menu items from adding up
const removeMenuItems = () => {
  select = document.getElementById("menuItemList");
  if (select.hasChildNodes()) {
    select.innerHTML = "";
  }
};

const item1 = () => {
  let title = document.getElementById("item1").textContent;
  document.getElementById("title").innerHTML = title;
  vendorNum = Number(numObj.nikki);
  let ul = document.getElementById("menu1");
  removeMenuItems();
  createMenuItems(ul);
  return vendorNum;
};

const item2 = () => {
  let title = document.getElementById("item2").textContent; // collects card title
  document.getElementById("title").innerHTML = title; //modal title
  vendorNum = Number(numObj.adex);
  let ul = document.getElementById("menu2");
  removeMenuItems();
  createMenuItems(ul);
  return vendorNum;
};

const item3 = () => {
  let title = document.getElementById("item3").textContent; // collects card title
  document.getElementById("title").innerHTML = title; //modal title
  vendorNum = Number(numObj.bukola);
  let ul = document.getElementById("menu3");
  removeMenuItems();
  createMenuItems(ul);
  return vendorNum;
};

const item4 = () => {
  let title = document.getElementById("item4").textContent; // collects card title
  document.getElementById("title").innerHTML = title; //modal title
  vendorNum = Number(numObj.sam);
  let ul = document.getElementById("menu4");
  removeMenuItems();
  createMenuItems(ul);
  return vendorNum;
};

const item5 = () => {
  let title = document.getElementById("item5").textContent; // collects card title
  document.getElementById("title").innerHTML = title; //modal title
  vendorNum = Number(numObj.ewaNaB);
  let ul = document.getElementById("menu5");
  removeMenuItems();
  createMenuItems(ul);

  return vendorNum;
};

const item6 = () => {
  let title = document.getElementById("item6").textContent; // collects card title
  document.getElementById("title").innerHTML = title; //modal title
  vendorNum = Number(numObj.ff);
  let ul = document.getElementById("menu6");
  removeMenuItems();
  createMenuItems(ul);

  return vendorNum;
};

// let invalidInput = alertWarn => {
//   alertWarn = document.getElementById("is-invalid");
//   alertWarn.innerHTML = `<div class='alert alert-warning alert-dismissible fade show'
//   role="alert">
//     Pls check input fields!
//   <button type='button' class='close' data-dismiss='alert' arial-label='Close'>
//     <span aria-hidden='true'>&times;</span>
//   </button>
//   </div>`;
// };
