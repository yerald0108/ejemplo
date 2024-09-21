const navbarMenu = document.querySelector(".navbar .links");
const menuBtn = document.querySelector(".menu-btn");
const hidenMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");


menuBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

hidenMenuBtn.addEventListener("click", () => menuBtn.click());

//OPEN-LOGIN
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

//CLOSE-LOGIN
hidePopupBtn.addEventListener("click" , () =>  showPopupBtn.click());

const showHiddenPass = (loginPass, loginEye) => {
    const input = document.getElementById(loginPass),
          iconEye = document.getElementById(loginEye) 
          
    iconEye.addEventListener('click', () => {
        if(input.type === 'password') {
            input.type = 'text'

            iconEye.classList.add('ri-eye-line')
            iconEye.classList.remove('ri-eye-off-line')
        } else {
            input.type = 'password'

            iconEye.classList.remove('ri-eye-line')
            iconEye.classList.add('ri-eye-off-line')
        }
    })
}

showHiddenPass('login-pass','login-eye')