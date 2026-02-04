// Smooth Scroll e Animação ao Rolar (Intersection Observer)
        document.addEventListener('DOMContentLoaded', () => {
            
            // Observer para animações de entrada
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target); // Anima apenas uma vez
                    }
                });
            }, observerOptions);

            const elementsToAnimate = document.querySelectorAll('.fade-up');
            elementsToAnimate.forEach(el => observer.observe(el));

            // Efeito sutil no Header ao rolar
            const header = document.getElementById('header');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.style.padding = '12px 0';
                    header.style.background = 'rgba(14, 16, 21, 0.95)';
                } else {
                    header.style.padding = '20px 0';
                    header.style.background = 'rgba(14, 16, 21, 0.85)';
                }
            });
        });