document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        "Are you ready for a little surprise?",
        "Do you promise to always be my partner in crime?",
        "Will you be the Hello Kitty to my Dear Daniel?",
        "Will you make me the happiest person in the universe and say yes?"
    ];
    let currentQuestionIndex = 0;
    const questionContainer = document.getElementById('question-container');
    const finalMessage = document.getElementById('final-message');

    function displayQuestion() {
        if (currentQuestionIndex < questions.length) {
            questionContainer.innerHTML = `
                <div class="question">
                    <h2>${questions[currentQuestionIndex]}</h2>
                    <div class="buttons">
                        <button class="btn yes-btn">Yes!</button>
                        <button class="btn no-btn">No</button>
                    </div>
                </div>
            `;
            setupButtons();
        } else {
            showFinalMessage();
        }
    }

    function setupButtons() {
        const yesButton = document.querySelector('.yes-btn');
        const noButton = document.querySelector('.no-btn');

        yesButton.addEventListener('click', () => {
            currentQuestionIndex++;
            displayQuestion();
        });

        noButton.addEventListener('mouseover', () => {
            noButton.style.position = 'absolute';
            noButton.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
            noButton.style.top = `${Math.random() * (window.innerHeight - 50)}px`;
        });
    }

    function showFinalMessage() {
        questionContainer.classList.add('hidden');
        finalMessage.classList.remove('hidden');
        startCelebration();
    }
    
    // --- CELEBRATION EFFECTS ---
    function startCelebration() {
        const canvas = document.getElementById('confetti-canvas');
        const myConfetti = confetti.create(canvas, { resize: true });

        // Continuous Confetti
        setInterval(() => {
            myConfetti({
                particleCount: 100,
                startVelocity: 30,
                spread: 360,
                origin: { x: Math.random(), y: Math.random() - 0.2 },
                colors: ['#ffc2d1', '#ff8fab', '#fffbeb', '#f67280']
            });
        }, 800);

        // Continuous Fireworks
        setInterval(createFirework, 1000);
    }

    const fireworksContainer = document.querySelector('.fireworks-container');
    function createFirework() {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = `${Math.random() * 100}vw`;
        firework.style.top = `${Math.random() * 100}vh`;
        fireworksContainer.appendChild(firework);

        const colors = ['#ffc2d1', '#ff8fab', '#fffbeb', '#f67280', '#c06c84'];
        for (let i = 0; i < 30; i++) {
            const spark = document.createElement('div');
            spark.className = 'spark';
            spark.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            const angle = Math.random() * 360;
            const radius = Math.random() * 80 + 20;
            spark.animate([
                { transform: 'translate(0, 0)', opacity: 1 },
                { transform: `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`, opacity: 0 }
            ], {
                duration: 1000,
                easing: 'ease-out'
            });
            firework.appendChild(spark);
        }
        setTimeout(() => firework.remove(), 1000);
    }

    displayQuestion();
});
