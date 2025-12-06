const observer = new MutationObserver(() => {
    if (!location.pathname.startsWith("/shorts")) return;

    document.querySelector('.navigation-container')?.remove();

    const container = document.getElementById('shorts-container');
    if (container && !container.dataset.wheelListenerAdded) {
        container.dataset.wheelListenerAdded = "true";

        container.addEventListener("wheel", e => {
            if (location.pathname.startsWith("/shorts")) e.preventDefault();
        }, { passive: false });
    }
});


observer.observe(document.body, {
    childList: true,
    subtree: true
});