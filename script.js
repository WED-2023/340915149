const darkThemePlaylistVideoSrc = "https://www.youtube.com/embed/fqLA0yggwKs";
const darkThemeImages = ["tyler1.jpg", "tyler2.jpg", "tyler3.webp"];
const darkThemeAboutText = "I'm Tyler Durden, and if you're reading this, you're probably looking for a way out. I'm the liberator of your deepest desires, the architect of mayhem. Together, we can break the chains of modern life's monotony.";
const darkThemePhotosText = "Feast your eyes on the revolution. Here are snapshots of our underground escapades and the anarchy I've sculpted. You won't find these in your local newspaper.";
const darkThemePlaylistText = "This playlist is the soundtrack to our rebellion. Each track, a hymn of chaos and liberation, is chosen to fuel our nightly endeavors and stir the soul of every Project Mayhem recruit.";
const darkThemeLikeText = "Like what you see? Dive deeper into the chaos, where you can join the ranks and redefine your existence.";
const darkThemeQrText = "Scan this code. It's your ticket to freedom, exclusive events, and real-time updates. Welcome to the fight.";

const lightThemePlaylistVideoSrc = "https://www.youtube.com/embed/kirdmu-hm4A";
const lightThemeImages = ["narrator1.jpeg", "narrator2.jpg", "narrator3.jpg"];
const lightThemeAboutText = "Hello, I'm just an average guy, dragged into extraordinary circumstances. By day, I'm a cog in the corporate machine, but by night, my life takes on a darker shade, thanks to my alter ego.";
const lightThemePhotosText = "Here are moments of my life, caught between the mundane daylight and the thrilling, yet terrifying nights. These photos capture the dual nature of my existence.";
const lightThemePlaylistText = "Listen to the melodies that narrate my double life. Each song reflects the internal battle and the quiet desperation of a man caught in his own duality.";
const lightThemeLikeText = "Connect with the quieter side of life. It's a place for those who seek understanding in the quieter, introspective moments of life.";
const lightThemeQrText = "Scan here to access a world of introspection, articles on self-discovery, and resources to help you balance the chaos of dual existence.";



window.onload = function () {
    alert("Try switching to Dark theme!");
};


function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-theme");

    const aboutText = document.querySelector('#about-section p');
    const photosText = document.querySelector('#photos-section p');
    const playlistText = document.querySelector('#playlist-section p');
    const playlistVideo = document.querySelector('#playlist-section iframe');
    const themeIcon = document.querySelector('button i');
    const images = document.querySelectorAll('#photos-section .carousel-image');
    const likeText = document.querySelector('#like-section p');
    const qrText = document.querySelector('#qr-section p');

    if (body.classList.contains("dark-theme")) {
        aboutText.innerText = darkThemeAboutText;
        photosText.innerText = darkThemePhotosText;
        playlistText.innerText = darkThemePlaylistText;
        playlistVideo.src = darkThemePlaylistVideoSrc;
        themeIcon.className = "far fa-moon";
        themeIcon.style.color = 'white';
        likeText.innerText = darkThemeLikeText;
        qrText.innerText = darkThemeQrText;

        images[0].src = darkThemeImages[0];
        images[1].src = darkThemeImages[1];
        images[2].src = darkThemeImages[2];
    } else {
        aboutText.innerText = lightThemeAboutText;
        photosText.innerText = lightThemePhotosText;
        playlistText.innerText = lightThemePlaylistText;
        playlistVideo.src = lightThemePlaylistVideoSrc;
        themeIcon.className = "fas fa-moon";
        themeIcon.style.color = 'black';
        likeText.innerText = lightThemeLikeText;
        qrText.innerText = lightThemeQrText;

        images[0].src = lightThemeImages[0];
        images[1].src = lightThemeImages[1];
        images[2].src = lightThemeImages[2];
    }
}


let slideIndex = 0;

function moveSlide(step) {
    const slides = document.getElementsByClassName("carousel-image");
    slideIndex += step;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    const totalMove = -slideIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${totalMove}%)`;
}
