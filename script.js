document.addEventListener('DOMContentLoaded', () => {  
    const video = document.querySelector('.background-video');  
    const buttonBlur = document.getElementById('button1');  
    const volumeButton = document.getElementById('volume-button');  
    const section1 = document.querySelector('.section1');  
    const section2 = document.getElementById('section2');  
    const button2 = document.getElementById('button2');  

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
        section2.classList.add('active'); // Menambah kelas 'active'  
        
        // Mengubah display ke block setelah delay untuk memicu transisi  
        setTimeout(() => {  
            section2.style.display = 'block';  
        }, 500); // Delay kecil agar display block dapat diterapkan setelah padding diproses  
    }  

    // Event listener untuk tombol yang membuka section2  
    button2.addEventListener('click', openWeb);  
});

function openWeb() {  
    const section = document.querySelector('.section2');  
    
    // Jika elemen sudah aktif, sembunyikan  
    if (section.classList.contains('active')) {  
        section.classList.remove('active');  
        // Setelah transisi selesai, set max-height kembali menjadi 0  
        setTimeout(() => {  
            section.style.maxHeight = '0';  
        }, 500); // Tunggu hingga transisi selesai  
    } else {  
        section.classList.add('active');  
        section.style.maxHeight = '100px'; // Setel max-height untuk transisi (sesuaikan)  
    }  
}