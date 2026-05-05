const track = document.getElementById('marquee-track');
if (track) {
  track.innerHTML += track.innerHTML;
  track.addEventListener('mouseenter', () => { track.style.animationPlayState = 'paused'; });
  track.addEventListener('mouseleave', () => { track.style.animationPlayState = 'running'; });
}
