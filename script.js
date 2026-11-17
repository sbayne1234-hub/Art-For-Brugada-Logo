
/* ------------------------------
   COLOR PALETTES
------------------------------ */

const palettes = {
    pastel: {
        heart: "#f4a9c2",
        outline: "#bd668b",
        detail: "#d9b8ed",
        mint: "#a8d8c1",
        accent: "#f5c3a7",
        text: "#70445b",
        background: "#fff8fb",
        section: "#fff1f6"
    },

    coral: {
        heart: "#ed8e7d",
        outline: "#a95755",
        detail: "#f6c4b4",
        mint: "#9dbb9c",
        accent: "#f4dfc6",
        text: "#704b45",
        background: "#fff8f3",
        section: "#fff0e9"
    },

    dreamy: {
        heart: "#8cb8e8",
        outline: "#617fae",
        detail: "#c8b2ec",
        mint: "#f3b6d0",
        accent: "#f4d58a",
        text: "#4f6284",
        background: "#f7f9ff",
        section: "#edf1ff"
    },

    pop: {
        heart: "#f05b9a",
        outline: "#9c3975",
        detail: "#a78be8",
        mint: "#63c9c1",
        accent: "#f6a044",
        text: "#71345e",
        background: "#fff5fa",
        section: "#ffeaf4"
    }
};


/* ------------------------------
   CHANGE COLOR PALETTE
------------------------------ */

const paletteButtons = document.querySelectorAll(".palette-button");

function changePalette(paletteName) {
    const palette = palettes[paletteName];

    if (!palette) {
        return;
    }

    const root = document.documentElement;

    root.style.setProperty("--heart-color", palette.heart);
    root.style.setProperty("--outline-color", palette.outline);
    root.style.setProperty("--detail-color", palette.detail);
    root.style.setProperty("--mint-color", palette.mint);
    root.style.setProperty("--accent-color", palette.accent);
    root.style.setProperty("--logo-text-color", palette.text);
    root.style.setProperty("--background-color", palette.background);
    root.style.setProperty("--section-background", palette.section);

    paletteButtons.forEach((button) => {
        const isSelected = button.dataset.palette === paletteName;

        button.classList.toggle("active", isSelected);
        button.setAttribute("aria-pressed", String(isSelected));
    });
}


/* ------------------------------
   PALETTE BUTTON EVENTS
------------------------------ */

paletteButtons.forEach((button) => {
    button.addEventListener("click", () => {
        changePalette(button.dataset.palette);
    });
});


/* ------------------------------
   DEFAULT PALETTE
------------------------------ */

changePalette("pastel");


/* ------------------------------
   ANIMATED BACKGROUND STARS
------------------------------ */

const starBackground = document.getElementById("starBackground");

const starCharacters = ["✦", "✧", "⋆", "✶", "·"];

const numberOfStars = 45;


function createStars() {
    if (!starBackground) {
        return;
    }

    starBackground.innerHTML = "";

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement("span");

        star.classList.add("star");

        star.textContent =
            starCharacters[
                Math.floor(Math.random() * starCharacters.length)
            ];

        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        const size = Math.random() * 15 + 8;

        star.style.fontSize = `${size}px`;

        star.style.animationDelay = `${Math.random() * 5}s`;

        star.style.animationDuration =
            `${3 + Math.random() * 4}s`;

        starBackground.appendChild(star);
    }
}


/* ------------------------------
   START THE STARS
------------------------------ */

createStars();
