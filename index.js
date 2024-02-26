document.addEventListener('DOMContentLoaded', function() {
    const targetElement = document.getElementById('testElement');
    const customCursor = document.getElementById('customCursor');

    document.getElementById('testElement2').addEventListener('click', function () {
        //window.open(`https://broimagine.netlify.app`);
        let numb = prompt(`1-5`);
        if (numb === `5`) {
            window.alert(`awwwww`);
        } else {
            var params = [
                'height='+screen.height,
                'width='+screen.width,
                'fullscreen=yes' // only works in IE, but here for completeness
            ].join(',');

            let chance = Math.floor(Math.random()*6);
            window.alert(`I saw what you did.`);

            console.log(chance);
            if (chance === 4) {
                var popup = window.open('https://pranx.com/fake-virus/', 'popup_window', params); 
                popup.moveTo(0,0);
            } else if (chance === 3) {
                window.open(`https://www.fallingfalling.com/`);
            }
        }
    });

    document.addEventListener('mousemove', function (event) {
        const targetRect = targetElement.getBoundingClientRect();
        const targetRect2 = document.getElementById(`testElement2`).getBoundingClientRect();
        const cursorX = event.clientX;
        const cursorY = event.clientY;


        const deltaX = cursorX - (targetRect.left + targetRect.width / 2);
        const deltaY = cursorY - (targetRect.top + targetRect.height / 2);
        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
        const threshold = 100;
        const perspective = 200;

        const rotateY = (cursorX - targetRect2.x - targetRect2.width / 2) / 15;
        const rotateX = (cursorY - targetRect2.y - targetRect2.height /2) / 15;

        document.getElementById(`testElement2`).style.transform = `perspective(${perspective}px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;

        if (distance < threshold) {
            const ratio = threshold / distance;
            const newX = targetRect.left + targetRect.width / 2 + deltaX * ratio;
            const newY = targetRect.top + targetRect.height / 2 + deltaY * ratio;

            //customCursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;

            customCursor.style.left = newX + 'px';
            customCursor.style.top = newY + 'px';
        } else {
            customCursor.style.left = cursorX + 'px';
            customCursor.style.top = cursorY + 'px';
        }
    });
});