const video = document.querySelector('#custom-video-player');
const shadow = video.attachShadow({ mode: 'open' });
const playButton = document.createElement('button');
playButton.textContent = 'Play';
playButton.addEventListener('click', () => {
if (video.paused) {
    video.play();
    playButton.textContent = 'Pause';
} else {
    video.pause();
    playButton.textContent = 'Play';
}
});
shadow.appendChild(playButton);