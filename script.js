// Logika untuk membuat efek elemen muncul perlahan (fade-in) saat di-scroll
document.addEventListener("DOMContentLoaded", function() {
    // Memilih semua elemen yang memiliki class 'fade-in'
    const faders = document.querySelectorAll('.fade-in');

    // Menentukan opsi sensitivitas munculnya elemen saat di-scroll
    const appearOptions = {
        threshold: 0.1, // Elemen muncul saat 10% bagiannya sudah masuk layar
        rootMargin: "0px 0px -50px 0px"
    };

    // Membuat IntersectionObserver untuk mengamati posisi elemen
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return; // Jika belum masuk layar, abaikan
            } else {
                entry.target.classList.add('appear'); // Mengaktifkan efek animasi CSS
                appearOnScroll.unobserve(entry.target); // Berhenti mengamati setelah elemen muncul
            }
        });
    }, appearOptions);

    // Menerapkan pengamat ke setiap elemen berkelas 'fade-in'
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
