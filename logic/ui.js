function toggleMobileMenu() {
    let menu = document.getElementById("mobileMenu");
    if(menu.classList.contains('d-none')) {
        document.getElementById("mobileMenuIcon").setAttribute('icon', 'line-md:menu-to-close-transition');
        menu.classList.replace('d-none', 'd-flex');
        document.querySelector('body').style.overflow = "hidden";
    }
    else {
        document.getElementById("mobileMenuIcon").setAttribute('icon', 'line-md:close-to-menu-transition');
        menu.classList.replace('d-flex', 'd-none');
        document.querySelector('body').style.overflow = "visible";
    }
}

function closeRegistration(page) {
    window.location.href = page;
}

function sendContactConfirmation() {
    alert('Thanks for the message, we will get back to you ASAP');
}