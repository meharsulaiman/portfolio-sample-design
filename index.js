const pBtns = document.querySelector(".p-btns");
const pBtn = document.querySelectorAll(".p-btn");

const p_immg_elem = document.querySelectorAll(".img-ovelay");


pBtns.addEventListener('click', (e) => {
    const btn_clicked = e.target;

    pBtn.forEach((btn) => btn.classList.remove("p-btn-active"));
    btn_clicked.classList.add("p-btn-active")

    const dataNum = btn_clicked.dataset.btnNum;

    const image_active = document.querySelectorAll(`.p-btn--${dataNum}`);
    p_immg_elem.forEach((current) => {
        current.classList.add("p-image-not-active");
        image_active.forEach((current) => {
            current.classList.remove("p-image-not-active")
        })
    })
})


// swiper code

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    }
});


// scroll to top

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="icon-top"></ion-icon>`;

const footerElem = document.querySelector(".section-footer");
footerElem.after(scrollElement);

const heroElem = document.querySelector(".section-hero");
scrollElement.addEventListener("click", () => {
    heroElem.scrollIntoView({ behavior: "smooth" });
})

// animated numbbers 
const animatedNum = document.querySelectorAll(".counter-heading");

animatedNum.forEach((numElem) => {
    const update = () => {
        const intial = parseInt(numElem.innerText);
        // console.log(intial)
        const final = parseInt(numElem.dataset.number);
        // console.log(final);
        const increment = Math.trunc(final / 200);
        // console.log(increment)
        if (intial < final) {
            numElem.innerText = `${intial + increment}+`;
            setTimeout(update, 10);
        }
    }
    update();
})