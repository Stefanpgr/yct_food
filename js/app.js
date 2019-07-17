if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("../sw.js").then(() => {
      console.log("Service Worker Registered");
    });
  });
}

// function order() {
//   let num = 0705463667;
//   let inj = `<a href="sms://${num}?body=I want to order..."class="btn btn-primary">Go somewhere</a>`;
//   const myFunction = () => {
//     document.getElementById("add_message").innerHTML = inj;
//   };
//   myFunction();
// }
