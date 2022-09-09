const nav_btn = document.querySelector(".nav-btn")
const nav_close_btn = document.querySelector(".nav-close-btn")
const nav_container = document.querySelector(".nav-container")

nav_btn.addEventListener("click", () => {
    nav_container.classList.add("active")
})

nav_close_btn.addEventListener("click", () => {
    nav_container.classList.remove("active")
})


$(document).ready(function () {
  $("li").click(function () {
    $("#privacyNav li.active-privacy").removeClass("active-privacy");
    $(this).addClass("active-privacy");
  });
});

$(document).ready(function () {
  $(".nav-privacy-btn").click(function () {
    $("#privacy-policy").show();
    $("#tos").hide();
  });
  $(".nav-tos-btn").click(function () {
    $("#tos").show();
    $("#privacy-policy").hide();
  });
});













// const searchBtn = document.querySelector(".search-btn")
// const searchContainer = document.querySelector(".search-container")


// document.addEventListener("click", e => {
//     const isSearchBtnClick = searchContainer.contains(e.target)

//     if (searchContainer.classList.contains("show") && !isSearchBtnClick) {
//         const isSearchBtnClick2 = searchBtn.contains(e.target)
//         if (!isSearchBtnClick2) {
//             searchContainer.classList.remove("show")
//         }
//     }
// })


// searchBtn.addEventListener("click", function (e) {
//     setTimeout(() => {

//         if (searchContainer.classList.contains("show")) {
//             searchContainer.classList.remove("show")
//         } else {
//             searchContainer.classList.add("show")
//         }
//     }, 100)
// })

