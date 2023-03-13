const openError = () => {
    document.documentElement.requestFullscreen({ navigationUI: "hide" });
    const template = document.querySelector("#errorTemplate");
    const clone = template.content.cloneNode(true);
    document.body.style.overflow = 'hidden';
    document.body.append(clone);
    
    document.addEventListener("fullscreenchange", closeError);
}

const closeError = () => {
    if (!document.fullscreenElement) {
        
    }
}

export default openError