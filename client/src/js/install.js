const butInstall = document.getElementById("buttonInstall");

window.addEventListener('beforeinstallprompt', (event) => {
    console.log("event" + event)
    event.preventDefault();
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }

    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
    console.log('Your app has been successfully installed.')
    window.deferredPrompt = null;
}); 