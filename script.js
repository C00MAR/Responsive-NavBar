var i = 1;
var anim = document.querySelectorAll('.blur');

$("#menu_button").click(function () {
    if(i == 1){
        $('#cancel_logo').css("display", "block");
        $('#menu_logo').css("display", "none");
        i = 0
    }else{
        $('#menu_logo').css("display", "block");
        $('#cancel_logo').css("display", "none");
        i = 1
    }
});

const hamburgerButton = document.querySelector("#menu_button")
const navigation = document.querySelector(".blur")

function toggleNav(){
    console.log('test')
    hamburgerButton.classList.toggle("active")
    navigation.classList.toggle("active")
    
}

hamburgerButton.addEventListener("click", toggleNav)