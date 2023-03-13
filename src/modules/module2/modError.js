const openError = () => {
    const template = document.querySelector("#errorTemplate");
    const clone = template.content.cloneNode(true);
    document.documentElement.requestFullscreen({ navigationUI: "hide" });
    document.body.style.overflow = 'hidden';
    document.body.append(clone);
    
    document.addEventListener("fullscreenchange", closeError);
}

const closeError = () => {
    if (!document.fullscreenElement) {
        const errorModalEl = document.querySelector('#error-modal');
        errorModalEl.remove();
        document.body.style.overflow = '';
    }
}

export default openError