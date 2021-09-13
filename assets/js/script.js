window.addEventListener("scroll", function()
{
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

// Toggle Menu //
const showMenu = (toggleId, navId) => 
{
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav)
    {
        toggle.addEventListener('click', function()
        {
            nav.classList.toggle('show');
        })
    } 
}

showMenu('nav-toggle', 'nav-menu');

// // Remove Menu Mobile //
// const navLink = document.querySelectorAll('.nav_link');
// function linkAction()
// {
//     const navMenu = document.getElementById('nav-menu');
//     navMenu.classList.remove('show');
// }

// Toggle Home_IMG Social
function toggle()
{
    const div = document.getElementById('home-social');
    const icon = document.getElementById('home-icon');
    const icon2 = document.getElementById('home-icon2');
    const icon3 = document.getElementById('home-icon3');
    const icon4 = document.getElementById('home-icon4');
    div.classList.toggle('popped');
    icon.classList.toggle('popped');
    icon2.classList.toggle('popped');
    icon3.classList.toggle('popped');
    icon4.classList.toggle('popped');
}