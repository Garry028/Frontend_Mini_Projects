document.querySelector("#show-login").addEventListener("click", ()=>{
document.querySelector(".popup").classList.add("active");
console.log("clicked");
});
// when we clck on login button, we want to show the login popup
// we want to add the class active to the popup


document.querySelector(".popup .close-btn").addEventListener("click", ()=>{
document.querySelector(".popup").classList.remove("active");
});
// when we click on the close button, we want to remove the class active from the popup