
// ------------------------------
// COLOR PALETTES
// ------------------------------

const palettes = {

    // PALETTE 1: PASTEL HEARTS

    pastel: {

        heart: "#f4a9c2",
        outline: "#bd668b",
        detail: "#d9b8ed",
        mint: "#a8d8c1",
        accent: "#f5c3a7",
        text: "#70445b",
        background: "#fff8fb",
        section: "#fff1f6",

        imageFilter: "hue-rotate(-48deg) saturate(0.78)"

    },


    // PALETTE 2: CORAL GARDEN

    coral: {

        heart: "#ed8e7d",
        outline: "#a95755",
        detail: "#f6c4b4",
        mint: "#9dbb9c",
        accent: "#f4dfc6",
        text: "#704b45",
        background: "#fff8f3",
        section: "#fff0e9",

        imageFilter: "hue-rotate(-12deg) saturate(0.88)"

    },


    // PALETTE 3: DREAMY BLUE

    dreamy: {

        heart: "#8cb8e8",
        outline: "#617fae",
        detail: "#c8b2ec",
        mint: "#f3b6d0",
        accent: "#f4d58a",
        text: "#4f6284",
        background: "#f7f9ff",
        section: "#edf1ff",

        imageFilter: "hue-rotate(145deg) saturate(0.75)"

    },


    // PALETTE 4: COLOR POP

    pop: {

        heart: "#f05b9a",
        outline: "#9c3975",
        detail: "#a78be8",
        mint: "#63c9c1",
        accent: "#f6a044",
        text: "#71345e",
        background: "#fff5fa",
        section: "#ffeaf4",

        imageFilter: "hue-rotate(-32deg) saturate(1.2)"

    },


    // PALETTE 5: CITRUS POP

    citrus: {

        heart: "#FE8299",
        outline: "#FE027B",
        detail: "#A7C51B",
        mint: "#FEEA11",
        accent: "#FE8402",
        text: "#71334D",
        background: "#FFFAF0",
        section: "#FFF2D9",

        imageFilter: "hue-rotate(0deg) saturate(1.08)"

    },


    // PALETTE 6: WILD MANGO

    mango: {

        heart: "#F9BFBE",
        outline: "#F97465",
        detail: "#A4B792",
        mint: "#FBC85D",
        accent: "#F6990E",
        text: "#704B45",
        background: "#FFF8F3",
        section: "#FFF0E9",

        imageFilter: "hue-rotate(-8deg) saturate(0.85)"

    },


    // PALETTE 7: SOFT SUNSET

    sunset: {

        heart: "#FFCCBC",
        outline: "#E9A18E",
        detail: "#B3E5FC",
        mint: "#CE93D8",
        accent: "#FFE0B2",
        text: "#795B68",
        background: "#FFFAF4",
        section: "#FFF0E8",

        imageFilter: "hue-rotate(-24deg) saturate(0.78)"

    },


    // PALETTE 8: EARTHY TERRACOTTA

    earthy: {

        heart: "#E08B76",
        outline: "#CE4B27",
        detail: "#F0CFA9",
        mint: "#5E8E44",
        accent: "#EF6442",
        text: "#2B502F",
        background: "#FFF8F1",
        section: "#F5E9DC",

        imageFilter: "hue-rotate(8deg) saturate(0.82)"

    }

};



// ------------------------------
// CHANGE COLOR PALETTE
// ------------------------------

const paletteButtons = document.querySelectorAll(".palette-button");


function changePalette(paletteName) {

    const palette = palettes[paletteName];

    if (!palette) {

        return;

    }


    const root = document.documentElement;


    // CHANGE SVG COLORS

    root.style.setProperty("--heart-color", palette.heart);

    root.style.setProperty("--outline-color", palette.outline);

    root.style.setProperty("--detail-color", palette.detail);

    root.style.setProperty("--mint-color", palette.mint);

    root.style.setProperty("--accent-color", palette.accent);

    root.style.setProperty("--logo-text-color", palette.text);


    // CHANGE WEBSITE BACKGROUNDS

    root.style.setProperty("--background-color", palette.background);

    root.style.setProperty("--section-background", palette.section);


    // CHANGE THE TWO NEW IMAGE LOGOS

    root.style.setProperty("--image-filter", palette.imageFilter);


    // UPDATE ACTIVE PALETTE BUTTON

    paletteButtons.forEach((button) => {

        const isSelected = button.dataset.palette === paletteName;

        button.classList.toggle("active", isSelected);

        button.setAttribute("aria-pressed", String(isSelected));

    });

}



// ------------------------------
// PALETTE BUTTON EVENTS
// ------------------------------

paletteButtons.forEach((button) => {

    button.addEventListener("click", () => {

        changePalette(button.dataset.palette);

    });

});



// ------------------------------
// DEFAULT PALETTE
// ------------------------------

changePalette("pastel");



// ------------------------------
// ANIMATED BACKGROUND STARS
// ------------------------------

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



// ------------------------------
// START THE STARS
// ------------------------------

createStars();
