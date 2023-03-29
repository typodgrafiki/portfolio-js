const backgroundVideo = document.querySelector('#video-container');
const video = backgroundVideo.querySelector('#video-container video');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            video.play();
            observer.unobserve(entry.target);
        }
    });
});

export { observer, backgroundVideo }