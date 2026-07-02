const chapterEl = document.getElementById("chapter");
const titleEl = document.getElementById("title");
const textEl = document.getElementById("text");
const nextBtn = document.getElementById("nextBtn");
const stars = document.getElementById("stars");
const secretStar = document.getElementById("secretStar");
const photoContainer = document.getElementById("photoContainer");

let index = 0;

// --------------------
// STAR BACKGROUND
// --------------------

function createStars(count = 150) {

    for (let i = 0; i < count; i++) {

        const star = document.createElement("div");
        star.classList.add("star");

        const size = Math.random() * 2 + 1;

        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.style.animationDuration = (2 + Math.random() * 3) + "s";

        stars.appendChild(star);

    }

}

createStars();

// --------------------
// SHOW SCENE
// --------------------

function showScene(i) {

    const scene = story[i];

    if (!scene) return;

    chapterEl.textContent = scene.chapter || "";
    titleEl.textContent = scene.title || "";
    textEl.textContent = scene.text || "";

    photoContainer.innerHTML = "";

    nextBtn.textContent = scene.button || "Continue";

    document.getElementById("storyCard").classList.remove("fade");
    void document.getElementById("storyCard").offsetWidth;
    document.getElementById("storyCard").classList.add("fade");

}

// --------------------
// NEXT BUTTON
// --------------------

nextBtn.addEventListener("click", () => {

    index++;

    if (index >= story.length) {

        nextBtn.textContent = "The End ❤️";
        return;

    }

    showScene(index);

});

// --------------------
// SECRET STAR (EASTER EGG)
// --------------------

secretStar.addEventListener("click", () => {

    alert("Some memories shine even when hidden ✨");

});

// --------------------
// INIT
// --------------------

showScene(0);
