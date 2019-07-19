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
// let btnContainer = document.getElementById("navbar-nav");

// // Get all buttons with class="btn" inside the container
// var btns = btnContainer.getElementsByClassName("nav-item");

// // Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
$(document).ready(function() {
  $("div a").click(function() {
    $("div a").removeClass("active");
    $(this).addClass("active");
  });
});
