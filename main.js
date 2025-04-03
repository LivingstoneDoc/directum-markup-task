const registrationBannerBtn = document.querySelector('.banner-registration-btn');
const registrationDialog = document.querySelector('#registrationDialog');
const closeDialogBtn = document.querySelector('.close-dialog-btn');
const body = document.querySelector('body');
const burgerBtn = document.querySelector('.burger-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const burgerMenu = document.querySelector('.burger-menu-container');

const openDialogWindow = () => {
    registrationDialog.showModal();
    body.classList.add('scrollLock');
};
registrationBannerBtn.addEventListener('click', openDialogWindow);

const closeDialogWindow = () => {
    registrationDialog.close();
    returnScroll();
};
closeDialogBtn.addEventListener('click', closeDialogWindow);

const returnScroll = () => {
    body.classList.remove('scrollLock');
}

const closeDialogOnBackDrop = (e) => {
    let dialogElement = e.currentTarget;
    if (e.target === e.currentTarget) {
        dialogElement.close();
        returnScroll();
    }
}

const openBurgerMenu = () => {
    burgerMenu.classList.add('active');
    body.classList.add('scrollLock');
}
burgerBtn.addEventListener('click', openBurgerMenu);

const closeBurgerMenu = () => {
    burgerMenu.classList.remove('active');
    returnScroll();
}
closeMenuBtn.addEventListener('click', closeBurgerMenu);