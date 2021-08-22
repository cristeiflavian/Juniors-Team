window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navigation = document.getElementsByClassName("navigation")[0];
toggleButton.addEventListener("click", () =>{
    navigation.classList.toggle("active");
});