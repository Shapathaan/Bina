const background =
    document.querySelector(".background");


/*
    Desktop parallax effect
*/

if (
    window.matchMedia("(pointer: fine)").matches
) {

    window.addEventListener(
        "pointermove",
        function (event) {

            const x =
                (event.clientX / window.innerWidth - 0.5) * 4;

            const y =
                (event.clientY / window.innerHeight - 0.5) * 3;


            background.style.transform =
                `scale(1.025)
                 translate(${x}px, ${y}px)`;
        }
    );
}
