// Scroll Reveal Animation //
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true,
})

// Scroll Home //
sr.reveal('.home_img', {distance: '100px', delay: 350})
sr.reveal('.first', {origin: 'bottom', delay: 450})
sr.reveal('.second', {origin: 'bottom', delay: 650})
sr.reveal('.third', {origin: 'bottom', delay: 850})
sr.reveal('.last', {origin: 'bottom', delay: 1050})


// Scroll About //
function clean(e)
{
    e.ScrollReveal().clean('.text');
}

sr.reveal('.text', {distance: '100px', interval: 200, cleanup: true, reset: false, scale: 2, afterReveal: clean});
// ScrollReveal().clean('.text');


// Scroll Skills //
// sr.reveal('.program1', {cleanup: true, interval: 250, scale: 1})


// Scroll Portfolio //
sr.reveal('.swiper', {origin: 'bottom', interval: 450, delay: 550, scale: 1.3})


// Scroll Contact //
sr.reveal('.contact_title .first', {origin: 'top', delay: 950, scale: 1})
sr.reveal('.contact_title .second', {origin: 'top', delay: 650, scale: 1})
sr.reveal('.contact_title .third', {origin: 'top', delay: 350, scale: 1})
// sr.reveal('.contact_title .last', {origin: 'top', delay: 150, scale: 1})
sr.reveal('.icons .bx', {origin: 'top', interval: 180, delay: 550, scale: 1})
sr.reveal('.contact_form h2', {origin: 'bottom', interval: 0, delay: 1100, scale: 1})
sr.reveal('.contact_input', {origin: 'bottom', interval: 350, delay: 1100, scale: 1})
sr.reveal('.contact_form form h3', {origin: 'bottom', interval: 0, delay: 1550, scale: 1})
// sr.reveal('.contact_button', {origin: 'bottom', interval: 0, delay: 1550, scale: 1})
