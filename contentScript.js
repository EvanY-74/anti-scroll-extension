const observer = new MutationObserver(() => {
    if (location.pathname.startsWith("/shorts")) document.querySelector('.navigation-container')?.remove();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

document.addEventListener("wheel", e => {
    if (location.pathname.startsWith("/shorts")) e.preventDefault();
}, { passive: false });