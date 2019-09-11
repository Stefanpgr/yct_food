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
qty = document.getElementById("qty");
output = document.getElementById("sliderShow");
output.innerHTML = qty.value;
qty.oninput = function() {
  output.innerHTML = this.value;
};
const show = () => {
  document.getElementById("selectQty").style.display = "block";
};

const getFormData = () => {
  const orderLocale = document.getElementById("locale");
  console.log(document.querySelector("[location]"), "hehehe");
  select = document.getElementById("menuItemList");
  const selectedItem = select.options[select.selectedIndex].text;
  console.log(selectedItem);
  console.log(vendorNum);
  const isInvalid = "";
  linkTexter = document.getElementById("txr");

  selectedSwal = document.querySelector("input[name='swal']:checked");
  console.log(orderLocale.value, "bool");
  if (orderLocale.value === isInvalid) {
    document.querySelector("[location]").classList.add("has-danger");
    return setTimeout(() => {
      document.querySelector("[location]").classList.remove("has-danger");
    }, 1000);
  } else if (selectedSwal) {
    qty = document.getElementById("qty");

    linkTexter.href = `sms://${vendorNum}?body=Order: ${selectedItem} and ${selectedSwal.value}, Qty:${qty.value} Location: ${orderLocale.value}`;
    console.log(selectedItem, orderLocale.value);

    clearLink();
    return (orderLocale.value = "");
  } else {
    linkTexter.href = `sms://${vendorNum}?body=Order: ${selectedItem} Location: ${orderLocale.value}`;
    console.log(selectedItem, orderLocale);

    clearLink();
    return (orderLocale.value = "");
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
  checkKeywords();
  return vendorNum;
};

const item2 = () => {
  let title = document.getElementById("item2").textContent; // collects card title
  document.getElementById("title").innerHTML = title; //modal title
  vendorNum = Number(numObj.adex);
  let ul = document.getElementById("menu2");
  removeMenuItems();
  createMenuItems(ul);
  checkKeywords();
  return vendorNum;
};

const item3 = () => {
  let title = document.getElementById("item3").textContent; // collects card title
  document.getElementById("title").innerHTML = title; //modal title
  vendorNum = Number(numObj.bukola);
  let ul = document.getElementById("menu3");
  removeMenuItems();
  createMenuItems(ul);
  checkKeywords();
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

// This function checks if a select element contains the soup word so as to disable or enable related elements
const checkKeywords = () => {
  selectedOption = select.options[select.selectedIndex].text;

  let arr = selectedOption.split(' ');
 
  // if (selectedOption.match(regExptest)) {
  //   console.log(true);
  // } else {
  //   console.log(false);
  // }
  // result = RegExp(/Soup/g).test(selectedOption);
  document.getElementById("menuItemList").addEventListener(
    "change", ()=> console.log(selectedOption),
    false
  );
  // function testRegExp() {
  //   if (result) {
  //     document.querySelector("[radio1]").classList.remove("disabled");
  //     document.querySelector("[radio2]").classList.remove("disabled");
  //     document.querySelector("[radio3]").classList.remove("disabled");
  //     document.querySelector("[radio4]").classList.remove("disabled");
  //   } else {
  //     document.querySelector("[radio1]").classList.add("disabled");
  //     document.querySelector("[radio2]").classList.add("disabled");
  //     document.querySelector("[radio3]").classList.add("disabled");
  //     document.querySelector("[radio4]").classList.add("disabled");
  //   }
  // }
};

const clearLink = () => {
  linkTexter = document.getElementById("txr");
  setTimeout(() => {
    if (linkTexter.href !== "#") {
      linkTexter.href = "#";
    }
  }, 200);
};
