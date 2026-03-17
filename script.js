const btnStart = document.getElementById('btn-start');
const screenEntry = document.getElementById('screen-entry');
const screenHub = document.getElementById('screen-hub');

// Nome do teu ficheiro de áudio que deve estar na mesma pasta no GitHub
const bgMusic = new Audio('audio_fundo.mp3'); 
bgMusic.loop = true;

btnStart.addEventListener('click', () => {
    // 1. Toca a música (Desbloqueia o autoplay)
    bgMusic.play().catch(e => console.log("Áudio pendente de ficheiro .mp3"));

    // 2. Transição visual suave
    screenEntry.style.opacity = '0';
    
    setTimeout(() => {
        screenEntry.classList.remove('active');
        screenHub.classList.add('active');
        
        // Ativa o fade-in da segunda tela
        setTimeout(() => {
            screenHub.style.opacity = '1';
        }, 50);
    }, 800);
});

// Mensagem de feedback ao clicar nos menus (opcional)
document.querySelectorAll('.nav-links li').forEach(item => {
    item.addEventListener('click', () => {
        console.log("Navegando para: " + item.innerText);
    });
});
