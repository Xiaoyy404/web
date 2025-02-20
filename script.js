document.addEventListener("DOMContentLoaded", function () {
    var typing = new Typed(".typing", {
        strings: [
            "Hallo Everyone",
            "Semua Script Disini Gratis",
            "Dilarang Memperjual Belikan Script Yamg Ada Disini Ya...",
            ":3",
            "Powered By Zamkai"
        ],
        typeSpeed: 80,
        backSpeed: 40,
        startDelay: 500,
        backDelay: 1500,
        loop: true,
        showCursor: false,
        cursorChar: "|",
    });
});

function playMusic(song) {
    var audio = document.getElementById("audioPlayer");
    if (song === "") {
        audio.pause();
        audio.src = "";
    } else {
        audio.src = song;
        audio.play();
    }
}

function searchProduct() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const products = document.querySelectorAll(".product");
    const musicContainer = document.querySelector(".music-container");
    const productSections = document.querySelectorAll(".products");
    const dividers = document.querySelectorAll(".divider");
    const logoContainer = document.querySelector(".logo-container");
    const typingText = document.querySelector(".typing");

    if (searchInput) {
        musicContainer.style.display = "none";
        logoContainer.style.display = "none";
        typingText.style.display = "none";
        productSections.forEach(section => {
            const title = section.querySelector("h2");
            if (title) {
                title.style.display = "none";
            }
        });

        dividers.forEach(divider => {
            divider.style.display = "none";
        });
    } else {
        musicContainer.style.display = "flex";
        logoContainer.style.display = "flex";
        typingText.style.display = "inline-block";
        productSections.forEach(section => {
            const title = section.querySelector("h2");
            if (title) {
                title.style.display = "block";
            }
        });

        dividers.forEach(divider => {
            divider.style.display = "block";
        });
    }

    products.forEach(product => {
        const productName = product.querySelector("h3").textContent.toLowerCase();
        if (productName.includes(searchInput)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}