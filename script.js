// Mobile navigation
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.getElementById('mobile-menu');
    const mobileNav = document.querySelector('.menu-toggle');
    const mobileList = document.querySelector('.nav');
    const body = document.body;

    mobileMenuToggle.addEventListener('click', function () {
        mobileNav.classList.toggle('is-active');
        mobileList.classList.toggle('mobile-nav')
        body.classList.toggle('no-scroll');
    });

    const listItems = document.querySelectorAll('.nav-item');
    
    listItems.forEach(function (listItem) {
        listItem.addEventListener('click', function () {
            mobileNav.classList.remove('is-active');
            mobileList.classList.remove('mobile-nav');
            body.classList.remove('no-scroll');
        });
    });
});

// Dynamic text
const words = ['Front-End Developer', 'Backend Developer', 'UI/UX Designer'];
        const colors = ['tomato', 'rebeccapurple', 'lightblue'];
        let visible = true;
        let letterCount = 1;
        let x = 1;
        let waiting = false;

        function updateDynamicText() {
            const dynamicText = document.getElementById('dynamicText');
            dynamicText.textContent = words[0].substring(0, letterCount);
        }

        function handleInterval1() {
            if (letterCount === 0 && !waiting) {
                waiting = true;
                const usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                letterCount += x;
                waiting = false;
            } else if (letterCount === words[0].length + 1 && !waiting) {
                waiting = true;
                setTimeout(() => {
                    x = -1;
                    letterCount += x;
                    waiting = false;
                }, 500);
            } else if (!waiting) {
                letterCount += x;
            }
            updateDynamicText();
        }

        function handleInterval2() {
            updateVisibility();
        }

        setInterval(handleInterval1, 80);
        setInterval(handleInterval2, 400);
