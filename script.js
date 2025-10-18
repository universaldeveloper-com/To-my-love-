document.addEventListener('DOMContentLoaded', () => {

    // --- Music Player Logic (NEW & IMPROVED) ---
    // This new version is more robust and handles browser security policies better.
    function setupMusicPlayer() {
        const song = document.getElementById('proposal-song');
        const playPauseBtn = document.getElementById('play-pause-btn');

        // We'll track if the user has interacted to start the music yet.
        let hasMusicStarted = false;

        playPauseBtn.addEventListener('click', async () => {
            // If this is the very first click, we need to make sure we can play audio.
            if (!hasMusicStarted) {
                try {
                    await song.play(); // Try to play the song.
                    playPauseBtn.textContent = '❚❚'; // If successful, show the pause icon.
                    hasMusicStarted = true;
                } catch (error) {
                    console.error("Audio could not play:", error);
                    // This catch block will show an error in the browser console if something goes wrong.
                }
                return; // Stop here for the first click.
            }

            // For all subsequent clicks (after the music has started once).
            if (song.paused) {
                song.play();
                playPauseBtn.textContent = '❚❚';
            } else {
                song.pause();
                playPauseBtn.textContent = '♫';
            }
        });
    }

    // --- Setup for all other initial features ---
    function setupInitialInteractions() {
        const letterContainer = document.getElementById('letterContainer');
        letterContainer.addEventListener('click', () => { if (!letterContainer.classList.contains('open')) { letterContainer.classList.add('open'); } });

        // !!! IMPORTANT: SET YOUR START DATE HERE !!!
        const loveStartDate = new Date('2025-07-26T00:00:00'); 
        const D = document.getElementById('days'), H = document.getElementById('hours'), M = document.getElementById('minutes'), S = document.getElementById('seconds');
        function f(t){return t<10?`0${t}`:t}
        setInterval(() => { const n=new Date(),d=n-loveStartDate;D.innerText=f(Math.floor(d/864e5));H.innerText=f(Math.floor(d%864e5/36e5));M.innerText=f(Math.floor(d%36e5/6e4));S.innerText=f(Math.floor(d%6e4/1e3))}, 1000);

        // !!! IMPORTANT: CUSTOMIZE YOUR 12 MESSAGES HERE !!!
        const starMessages = [ 
            "remeber when you called me baby first time then i was so shy that time i cnat say how much happy i was and also so in love with you ", 
            "when u said i love you first time my heart skipped some beats cause this i love you feels special idk y mayne cause u r my destined life partner that god send for me ", 
            "i was so sad when u said u passed out i was full stressed and i was worried i wish i there with you i just want to take care of you ", 
            "i love when you are clingy,moody and horny hehehe i love you always ", 
            "when u are mad on me i feel so lonely amd depressed i really dont have anyone to talk except you i fear soemtimes what of u stop talking to me totally when u mad 😭", 
            "i really love those beautiful eyes of yours and those lips i cant forget those", 
            "i dont know whether this relationship will end up in any way but you will be alwys in my mind and you will be always in my heart ", 
            "u know my friends ask me to play but i cutoff all my friends just to spend that 10 minutes with you i really feel so special when with you", 
            "when u told me about you past i was not insecure or jealous i was just thinking on how better i can take care of you and not repeat that mistake again and make you happy", 
            "i really want you to be successful in your life i want to grow together and make a good life for us ", 
            "i can never be mad or will be on you cause your single sorry can melt my heart that how deep i loved you", 
            "every night i really open my gallery to see your pic and eveytime i see it i want to become more successful just to give u your desired life " 
        ];
        const starModal = document.getElementById('star-modal'); const modalText = document.getElementById('modal-message-text');
        document.querySelectorAll('.interactive-star').forEach(star => { star.addEventListener('click', () => { modalText.textContent = starMessages[star.dataset.messageId - 1]; starModal.classList.remove('modal-hidden'); }); });
    }

    // --- Setup for Picture, Moon, and other Modals ---
    function setupModals() {
        document.getElementById('memory-pic').addEventListener('click', () => { document.getElementById('picture-modal').classList.remove('modal-hidden'); });
        document.getElementById('romantic-moon').addEventListener('click', () => { document.getElementById('moon-modal').classList.remove('modal-hidden'); });
        document.querySelectorAll('.modal').forEach(modal => {
            modal.querySelector('.modal-close-btn').addEventListener('click', () => { modal.classList.add('modal-hidden'); });
            modal.addEventListener('click', (e) => { if (e.target === modal) { modal.classList.add('modal-hidden'); } });
        });
    }

    // --- Setup for Counter and Butterflies ---
    function setupMidSections() {
        const counterBtn = document.getElementById('love-counter-btn');
        const counterDisplay = document.getElementById('love-counter-display');
        const counterEl = document.getElementById('love-counter');
        counterBtn.addEventListener('click', () => {
            counterBtn.classList.add('hidden'); counterDisplay.classList.remove('hidden');
            let loveCount = 0;
            function animateCount() { loveCount += Math.floor(Math.random() * 1e12) + 1e11; counterEl.innerText = loveCount.toLocaleString(); requestAnimationFrame(animateCount); }
            animateCount();
        });
        
        const butterflyContainer = document.getElementById('butterfly-container');
        const finalMessage = document.getElementById('final-message');
        butterflyContainer.addEventListener('click', () => {
            document.querySelectorAll('.butterfly').forEach(b => {
                b.style.setProperty('--x', `${(Math.random() - 0.5) * 2000}px`);
                b.style.setProperty('--y', `${(Math.random() - 0.5) * 2000}px`);
                b.classList.add('fly-away');
            });
            finalMessage.classList.add('visible');
        }, { once: true });
    }

    // --- Final Proposal Interaction ---
    function setupFinalProposal() {
        const yesBtn = document.getElementById('yes-btn');
        const noBtn = document.getElementById('no-btn');
        const question = document.getElementById('final-question');
        const buttonsContainer = document.getElementById('final-buttons');
        const balloonContainer = document.getElementById('balloon-container');
        const sadEmojiContainer = document.getElementById('sad-emoji-container');
        let noClickCount = 0;

        yesBtn.addEventListener('click', () => {
            question.innerHTML = "SHE SAID YES!!! 💞";
            buttonsContainer.style.opacity = '0';
            setTimeout(() => { buttonsContainer.style.display = 'none'; }, 500);

            for (let i = 0; i < 50; i++) {
                const balloon = document.createElement('div');
                balloon.className = 'balloon';
                balloon.style.left = `${Math.random() * 100}vw`;
                balloon.style.animationDelay = `${Math.random() * 5}s`;
                balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 90%, 70%)`;
                balloonContainer.appendChild(balloon);
            }
        });

        noBtn.addEventListener('click', () => {
            noClickCount++;
            const emoji = document.createElement('span');
            emoji.className = 'sad-emoji';
            emoji.innerText = '😢';
            sadEmojiContainer.innerHTML = '';
            sadEmojiContainer.appendChild(emoji);
            const currentScale = 1 + (noClickCount * 0.2);
            yesBtn.style.transform = `scale(${currentScale})`;
            const newNoScale = 1 - (noClickCount * 0.1);
            noBtn.style.transform = `scale(${Math.max(0.1, newNoScale)})`;
        });
    }

    // --- Initialize all website features ---
    setupMusicPlayer(); // Run the new music player setup first
    setupInitialInteractions();
    setupModals();
    setupMidSections();
    setupFinalProposal();
});
