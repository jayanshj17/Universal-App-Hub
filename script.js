function playSound() {
    const sound = document.getElementById("clickSound");
    sound.currentTime = 0;
    sound.play();
}

function openApp(url) {
    playSound();
    window.open(url, "_blank");
}

function openNewTab(url) {
    playSound();
    window.open(url, "_blank");
}

function openAI() {
    playSound();
    alert("AI Window Connected!");
}

function searchApps() {
    let input = document.getElementById("appSearch").value.toLowerCase();
    let apps = document.querySelectorAll(".app");

    apps.forEach(app => {
        let text = app.innerText.toLowerCase();
        app.style.display = text.includes(input) ? "block" : "none";
    });
}

window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("scrollProgress").style.width = scrolled + "%";

    document.getElementById("topBtn").style.display =
        window.scrollY > 300 ? "block" : "none";
};

function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("load", function() {
    const loaderText = document.getElementById("loadPercent");

    let i = 0;

    let interval = setInterval(() => {
        loaderText.innerText = messages[i];
        i++;

        if (i === messages.length) {
            clearInterval(interval);
            document.getElementById("loader").style.display = "none";
        }
    }, 800);
});

document.addEventListener("DOMContentLoaded", function () {

    let percent = 0;
    const loader = document.getElementById("loader");
    const display = document.getElementById("loadPercent");

    const interval = setInterval(() => {
        percent++;
        display.innerText = percent + "%";

        if (percent >= 100) {
            clearInterval(interval);

            setTimeout(() => {
                loader.style.opacity = "0";
                loader.style.transition = "0.5s ease";

                setTimeout(() => {
                    loader.style.display = "none";
                }, 500);

            }, 300);
        }

    }, 25); // speed (lower = faster)
});

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        toggleBtn.innerText = "☀";
    } else {
        toggleBtn.innerText = "🌙";
    }
});