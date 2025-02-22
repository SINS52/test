document.addEventListener('DOMContentLoaded', () => {  
    const video = document.querySelector('.background-video');  
    const buttonBlur = document.getElementById('button1');  
    const volumeButton = document.getElementById('volume-button');  
    const section1 = document.querySelector('.section1');  
    const section2 = document.getElementById('section2');  
    const button2 = document.getElementById('button2');  
    const navigasi = document.querySelector('.navigasi');  
    const toggleNavButton = document.getElementById('toggle-nav-button');
    const elemen = document.querySelector('.elemen');
    const changeThemesButton = document.getElementById('button3');
    const closeSection2 = document.getElementById('buttonclose');

    // Fungsi untuk mengatur blur pada background video  
    function blurBackground() {  
        video.classList.toggle('active');  
        buttonBlur.textContent = video.classList.contains('active') ? 'Hapus Blur' : 'Blur Background';  
    }  

    // Event listener untuk tombol blur  
    buttonBlur.addEventListener('click', blurBackground);  

    // Event listener untuk tombol volume  
    volumeButton.addEventListener('click', () => {  
        if (video.muted) {  
            video.muted = false;  
            volumeButton.textContent = 'Mute';  
        } else {  
            video.muted = true;  
            volumeButton.textContent = 'Unmute';  
        }  
    });  

    // Fungsi untuk menampilkan section2 dan menyembunyikan section1  
    function openWeb() {  
    section1.style.display = 'none';  
    section2.classList.add('active');  


    setTimeout(() => {  
        section2.style.display = 'block';  
        weblink.classList.add('active');
    }, 500); 
}

    // Event listener untuk tombol yang membuka section2  
    button2.addEventListener('click', openWeb);  

    // Fungsi untuk toggle navigasi  
    function toggleNavigation() {  
    if (navigasi.classList.toggle('active')) {   
        toggleNavButton.textContent = 'Unhide'; // Ubah teks tombol  
        toggleNavButton.classList.toggle('active');  
        section2.style.top = '0'; // Pindahkan section2 ke atas saat navigasi terlihat  
    } else {  
        navigasi.classList.remove('active');  
        toggleNavButton.textContent = 'Hide'; // Ubah teks tombol   
        toggleNavButton.classList.remove('active');  
        section2.style.top = '10%'; // Kembalikan section2 ke posisi semula saat navigasi disembunyikan  
    }  
}

    // Set navigasi mulai dalam keadaan terlihat  
    navigasi.classList.remove('hidden'); // Pastikan navigasi mulai dalam keadaan terlihat  

    // Event listener untuk tombol navigasi  
    toggleNavButton.addEventListener('click', toggleNavigation);  
    
    function changeToBlack() {
        if (elemen.classList.toggle('active')) {
            changeThemesButton.textContent = 'Ubah ke default';
        } else {
            elemen.classList.remove('active');
            changeThemesButton.textContent = 'Ubah ke gelap';
        }
    }
});

console.log ('<Semua command>');
console.log ('                  ');
console.log ('   (nameDev)');
console.log ('   (ddmmyy)');
console.log ('   (themes)');

var nameDev = 'SINS52';
var ddmmyy = '10 Feb 2025';
var themes = 'Blue Archive';