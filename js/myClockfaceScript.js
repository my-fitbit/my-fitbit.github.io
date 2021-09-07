//reference: https://codepen.io/ms_dev97/pen/NWgWZGQ?editors=1010

function clickMenu() {
        console.log("clicked  menu now ");
        const menu = document.querySelector(".menu");
        const links = menu.querySelectorAll("li");
        const highlight = menu.querySelector(".highlight");


        document.querySelector(".menu").addEventListener(
                "pointerdown",
                function () {
                        if (this.dataset.open === "close") {
                                menu.style.clipPath = "circle(100% at 50% 50%)";
                                this.dataset.open = "open";
                                document.querySelector(".nav-bar").classList.remove('hidden');
                        } else {
                                menu.style.clipPath = "";
                                this.dataset.open = "close";
                                highlight.style = "";
                                document.querySelector(".nav-bar").classList.add('hidden');
                        }
                }
        );

                document.querySelector(".btn").addEventListener(
                "pointerdown",
                function () {
                        if (this.dataset.open === "close") {
                                menu.style.clipPath = "circle(100% at 50% 50%)";
                                this.dataset.open = "open";
                                document.querySelector(".nav-bar").classList.remove('hidden');
                        } else {
                                menu.style.clipPath = "";
                                this.dataset.open = "close";
                                highlight.style = "";
                                document.querySelector(".nav-bar").classList.add('hidden');
                        }
                }
        );

        links.forEach((link) => {
                link.addEventListener("pointerover", function (e) {
                        const w = this.offsetWidth,
                                h = this.offsetHeight,
                                t = this.offsetTop;

                        highlight.style.cssText = `transform: translateY(${t}px); width: ${w}px; height: ${h}px`;
                });
        });


}

//todo horizontal

// https://codepen.io/imprfcto/pen/WNNpBLp

//       //https://codepen.io/bousahla-mounir/pen/ZELwoqw

//       https://codepen.io/yuhomyan/pen/WNwGywp
//      https://codepen.io/dmendozaec/pen/vwjRvw
// https://codepen.io/mnunes/pen/VdRKbN

// https://codepen.io/hexagoncircle/pen/RwNeBMo

//       https://codepen.io/jh3y/pen/KKwrzOq

//       node project
//       https://codepen.io/uiswarup/pen/dyyqaGR

//       FOLLOW_ME______________ https://codepen.io/animatedcreativity/pen/wOqBQr

//       ***** Hover me : https://codepen.io/jouanmarcel/pen/NLgVjm

// emojifull https://codepen.io/pgalor/pen/mKGdwr