// let button = document.getElementById("mybutton");
// button.addEventListener("click", function () {
//     console.log("Button clicked");
// });

let form = document.getElementById("myform");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted");
})
