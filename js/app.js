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
  select = document.getElementById("menuItemList");
  const soup = select.options[select.selectedIndex].text;
  console.log(soup);
  console.log(vendorNum);
  const isInvalid = "";
  console.log(typeof orderItem);
  // let orderBtn = `sms://08097463636?body=I want to Order: ${orderItem} Location: ${orderLocale}`;
  if ((orderItem && orderLocale) === isInvalid) {
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

const createMenuItems = (ul) =>{
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
}

// checks for and removes item created to prevent other menu items from adding up
const removeMenuItems = () =>{
 
  select = document.getElementById("menuItemList");
  if (select.hasChildNodes()) {
    select.innerHTML= "";
  }
}


const item1 = () => {
  let title = document.getElementById("item1").textContent;
  document.getElementById("title").innerHTML = title;
  vendorNum = Number(numObj.nikki);
  let ul = document.getElementById("menu1");
  removeMenuItems()
  createMenuItems(ul);
  return vendorNum;
};


const item2 = () => {
  let title = document.getElementById("item2").textContent; // collects card title
  document.getElementById("title").innerHTML = title; //modal title
  vendorNum = Number(numObj.adex);
  let ul = document.getElementById("menu2");
  removeMenuItems()
  createMenuItems(ul);
  return vendorNum;
};

const item3 = () => {
  let title = document.getElementById("item3").textContent; // collects card title
  document.getElementById("title").innerHTML = title; //modal title
  vendorNum = Number(numObj.bukola);
  let ul = document.getElementById("menu3");
  removeMenuItems()
  createMenuItems(ul);
  return vendorNum;
};

const item4 = () => {
  let title = document.getElementById("item4").textContent; // collects card title
  document.getElementById("title").innerHTML = title; //modal title
  vendorNum = Number(numObj.sam);
  let ul = document.getElementById("menu4");
  removeMenuItems()
  createMenuItems(ul);
  return vendorNum;
};

const item5 = () => {
  let title = document.getElementById("item5").textContent; // collects card title
  document.getElementById("title").innerHTML = title; //modal title
  vendorNum = Number(numObj.ewaNaB);
  let ul = document.getElementById("menu5");
  createMenuItems(ul);
  removeMenuItems()
  return vendorNum;
};

const item6 = () => {
  let title = document.getElementById("item6").textContent; // collects card title
  document.getElementById("title").innerHTML = title; //modal title
  vendorNum = Number(numObj.ff);
  let ul = document.getElementById("menu6");
  createMenuItems(ul);
  removeMenuItems()
  return vendorNum;
};

// test();
// $(document).ready(function() {
//   $("nav div > div > a").click(function() {
//     $("nav div > div > a").removeClass("active");
//     $(this).addClass("active");
//   });
// });
