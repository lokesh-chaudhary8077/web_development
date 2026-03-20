const playBtn = document.querySelector('#play-btn');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const progress = document.querySelector('#progress');
const songList = document.querySelector('#song-list');
const cover = document.querySelector('#cover');
const volumeBtn = document.querySelector('#volume-btn');
const volumeSlider = document.querySelector('#volume-slider');

// Songs with images
let songs = [
  { name: 'song1', id: 1, file: './assets/song1.mp3', cover: './assets/song1.jpg' },
  { name: 'song2', id: 2, file: './assets/song2.mp3', cover: './assets/song2.jpg' },
  { name: 'song3', id: 3, file: './assets/song3.mp3', cover: './assets/song3.jpg' },
  { name: 'song4', id: 4, file: './assets/song4.mp3', cover: './assets/song4.jpg' },
  { name: 'song5', id: 5, file: './assets/song5.mp3', cover: './assets/song5.jpg' }
];

let currentSong = 0;
const audio = new Audio(songs[currentSong].file);

// Show songs in list
for (let song of songs) {
  const li = document.createElement('li');
  li.innerText = song.name;
  li.setAttribute('id', song.id);
  li.classList.add('song-item');
  songList.append(li);
}

// Play / Pause
playBtn.addEventListener('click', function () {
  if (audio.paused) {
    audio.play();
    playBtn.children[0].classList.replace('fa-circle-play', 'fa-circle-pause');
  } else {
    audio.pause();
    playBtn.children[0].classList.replace('fa-circle-pause', 'fa-circle-play');
  }
});

// Progress bar update
audio.addEventListener('timeupdate', function () {
  progress.value = (audio.currentTime / audio.duration) * 100 || 0;
});

// Seek
progress.addEventListener('change', function () {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

// Select song from list
songList.addEventListener('click', function (e) {
  let songId = e.target.getAttribute('id');
  if (songId) {
    currentSong = songId - 1;
    loadSong(currentSong);
    audio.play();
    playBtn.children[0].classList.replace('fa-circle-play', 'fa-circle-pause');
  }
});

// Load song
function loadSong(index) {
  audio.src = songs[index].file;
  cover.src = songs[index].cover;
  audio.currentTime = 0;
}

// Next / Previous
nextBtn.addEventListener('click', () => {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
  audio.play();
  playBtn.children[0].classList.replace('fa-circle-play', 'fa-circle-pause');
});

prevBtn.addEventListener('click', () => {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
  audio.play();
  playBtn.children[0].classList.replace('fa-circle-play', 'fa-circle-pause');
});

// Volume Controls
let lastVolume = 1;

volumeSlider.addEventListener('input', () => {
  let volume = volumeSlider.value / 100;
  audio.volume = volume;
  if (volume === 0) {
    volumeBtn.children[0].classList.replace('fa-volume-high', 'fa-volume-mute');
  } else {
    volumeBtn.children[0].classList.replace('fa-volume-mute', 'fa-volume-high');
  }
});

volumeBtn.addEventListener('click', () => {
  if (audio.volume > 0) {
    lastVolume = audio.volume;
    audio.volume = 0;
    volumeSlider.value = 0;
    volumeBtn.children[0].classList.replace('fa-volume-high', 'fa-volume-mute');
  } else {
    audio.volume = lastVolume;
    volumeSlider.value = lastVolume * 100;
    volumeBtn.children[0].classList.replace('fa-volume-mute', 'fa-volume-high');
  }
});
