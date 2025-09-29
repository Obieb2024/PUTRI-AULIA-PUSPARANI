/* --- Pengaturan Dasar & Tombol (Sama) --- */
html, body { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; font-family: 'Handlee', cursive; background-color: #FFC0CB; }
.visual-wrapper { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0; }
.fullscreen-section { width: 100vw; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; position: fixed; top: 0; left: 0; }
#start-screen { z-index: 20; background-color: #FFC0CB; }
#greeting-section { display: none; z-index: 19; }
#play-button { padding: 20px 40px; font-size: 1.5em; font-family: 'Pacifico', cursive; color: white; background-color: #ff69b4; border: none; border-radius: 50px; cursor: pointer; }
.heart { position: absolute; font-size: 2em; opacity: 0; animation: floatUp 10s infinite linear; }
@keyframes floatUp { 0% { transform: translateY(100vh) scale(0.5); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(-10vh) scale(1.2); opacity: 0; } }

/* --- Sesi Ucapan (Sama) --- */
#greeting-section { background-color: #FFC0CB; overflow: hidden; }
.container { background-color: rgba(255, 255, 255, 0.9); padding: 25px; border-radius: 20px; box-shadow: 0 8px 16px rgba(0,0,0,0.2); width: 85%; max-width: 400px; text-align: center; z-index: 2; }
.profile-photo { width: 120px; height: 120px; border-radius: 50%; object-fit: cover; margin-bottom: 15px; border: 5px solid #FF69B4; }
.greeting { font-family: 'Pacifico', cursive; color: #E75480; font-size: 1.8em; line-height: 1.4; margin: 0; }
#gallery-button-container { margin-top: 20px; }
#show-gallery-button { padding: 12px 25px; font-size: 1em; font-family: 'Pacifico', cursive; color: #E75480; background-color: white; border: 2px solid #ffb6c1; border-radius: 50px; cursor: pointer; transition: all 0.3s ease; }

/* --- EFEK GULIR FOTO LATAR (6 LAPIS) --- */
.background-photos-container {
    position: absolute;
    width: 200%; 
    z-index: 1;
    opacity: 0.2; /* Dibuat lebih transparan lagi agar tidak terlalu ramai */
    pointer-events: none;
    transform: rotate(-20deg) scale(1.5);
}
.background-photos {
    display: flex;
    flex-wrap: nowrap;
    gap: 15px;
    animation: scroll-bg 80s linear infinite;
}
.bg-photo {
    height: 80px;
    width: auto;
    border-radius: 10px;
    flex-shrink: 0;
}
@keyframes scroll-bg {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}

/* Atur posisi dan animasi setiap baris agar berbeda */
.background-photos-container:nth-child(1) { top: -15%; animation-delay: 0s; }
.background-photos-container:nth-child(2) { top: 10%; animation-delay: -15s; }
.background-photos-container:nth-child(3) { top: 35%; animation-delay: -30s; }
.background-photos-container:nth-child(4) { top: 60%; animation-delay: -45s; }
.background-photos-container:nth-child(5) { top: 85%; animation-delay: -60s; }
.background-photos-container:nth-child(6) { top: 110%; animation-delay: -75s; }


/* --- CSS SLIDER FOTO BESAR (Tidak berubah) --- */
.slider-container { display: none; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; overflow: hidden; z-index: 10; }
.slider-track { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
.slide { position: absolute; top: 0; left: 0; width: 100vw; height: 100vh; background-color: #ffdde1; display: flex; justify-content: center; align-items: center; padding: 20px; box-sizing: border-box; opacity: 0; transform: scale(1.1); transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out; }
.slide.active { opacity: 1; transform: scale(1); z-index: 1; }
.gallery-photo { max-width: 100%; max-height: 100%; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
.photo-caption { position: absolute; bottom: 10%; left: 50%; transform: translateX(-50%); background-color: rgba(0, 0, 0, 0.5); color: white; padding: 10px 20px; border-radius: 20px; font-size: 1.2em; font-family: 'Handlee', cursive; text-align: center; max-width: 80%; opacity: 0; animation-fill-mode: forwards; }
@keyframes fadeInUp { to { opacity: 1; transform: translate(-50%, -10px); } }
.fade-in-up { animation-name: fadeInUp; animation-duration: 1s; }
@keyframes fadeOut { to { opacity: 0; } }
.fade-out { animation-name: fadeOut; animation-duration: 1s; }
