let spikeScore = 0;
let rotationSpeed = 1.2;
let slideSpeed = 2.4;

function darkModeToggle() {
    var bodyElement = document.body;
    var moon = document.getElementById("darkModeMoon");
    if (bodyElement.classList.contains("darkMode")) {
        bodyElement.classList.remove("darkMode");
        bodyElement.classList.add("aiMode");
        moon.setAttribute("viewBox", "0 0 24 24");
    }
    else if (bodyElement.classList.contains("aiMode")) {
        bodyElement.classList.remove("aiMode");
        moon.setAttribute("viewBox", "0 0 292.299 292.299");
    }
    else {
        bodyElement.classList.add("darkMode");
    }
}

function expandContainer(containerId) {
    var container = document.getElementById(containerId);
    container.classList.toggle("expanded");
    var caret = document.getElementById(containerId + "-caret");
    if (caret) {
        caret.classList.toggle("open");
    }
}

function renderContainerHeader(containerId, headerTitle, svgNamespace) {
    const headerDiv = document.createElement("div");
    const headerH1 = document.createElement("h1");
    const headerSvg = document.createElementNS(svgNamespace, "svg");
    const headerSvgPath = document.createElementNS(svgNamespace, "path");

    headerDiv.setAttribute("class", "container-header");
    headerDiv.setAttribute("onClick", `expandContainer('${containerId}')`);

    headerH1.innerText = headerTitle;

    headerSvg.setAttributeNS(null, "width", "50");
    headerSvg.setAttributeNS(null, "height", "50");
    headerSvg.setAttributeNS(null, "viewBox", "0 0 400 400");
    headerSvg.setAttributeNS(null, "class", "caret");
    headerSvg.setAttributeNS(null, "id", `${containerId}-caret`);

    headerSvgPath.setAttributeNS(null, "d", "M151 281.901C151.184 283.22 168.599 271.193 188.038 255.643C197.633 247.969 211.591 237.956 220.899 230.117C232.994 219.929 242.694 210.057 250 200.5C250 197.057 214.478 167.185 211.829 164.951C204.312 158.613 169.148 132.226 164.789 128.73C160.917 125.623 157.006 122.613 153.109 119.568C152.845 119.362 152.556 119.22 152.201 119");

    headerSvg.appendChild(headerSvgPath);
    headerDiv.appendChild(headerSvg);
    headerDiv.appendChild(headerH1);

    const containerHeader = document.getElementById(containerId + "-header");
    if (containerHeader) {
        containerHeader.appendChild(headerDiv);
    }
}

function renderHeaders(svgNamespace) {
    renderContainerHeader("profile-container", "Who I Am", svgNamespace);
    renderContainerHeader("experience-container", "Experience", svgNamespace);
    renderContainerHeader("projects-container", "Independent Projects", svgNamespace);
    renderContainerHeader("education-container", "Education", svgNamespace);
    renderContainerHeader("skills-container", "Skills", svgNamespace);
    renderContainerHeader("certifications-container", "Certifications", svgNamespace);
    renderContainerHeader("why-container", "Why does this site exist?", svgNamespace);
}

function renderProjects() {
    renderProject("Fives", "A casual daily math puzzle game", "https://fivesgame.com/", "styling/fivesGame.gif");
    renderProject("Blackjack", "The classic card game in the terminal", "https://github.com/mgelfius/blackjack", "styling/blackjack.gif");
    renderProject("Foxtrot Bot", "A Twitter bot for daily Foxtrot strips", "https://github.com/mgelfius/foxbot", "styling/foxtrotBot.gif");
}

function renderProject(projectTitle, projectDescription, projectLink, projectImage) {
    const projectDiv = document.createElement("div");
    const projectAnchor = document.createElement("a");
    const projectHeader = document.createElement("div");
    const projectImg = document.createElement("img");
    const projectFooter = document.createElement("div");
    const projectTitleElem = document.createElement("p");
    const projectDescriptionElem = document.createElement("p");

    projectDiv.setAttribute("class", "project");

    projectAnchor.setAttribute("href", projectLink);
    projectAnchor.setAttribute("target", "_blank");
    projectAnchor.setAttribute("rel", "noopener noreferrer");

    projectHeader.setAttribute("class", "project-header");

    projectImg.setAttribute("src", projectImage);

    projectFooter.setAttribute("class", "project-footer");

    projectTitleElem.setAttribute("class", "project-title");
    projectTitleElem.innerText = projectTitle;

    projectDescriptionElem.setAttribute("class", "project-description");
    projectDescriptionElem.innerText = projectDescription;

    projectHeader.appendChild(projectImg);
    projectFooter.appendChild(projectTitleElem);
    projectFooter.appendChild(projectDescriptionElem);
    projectAnchor.appendChild(projectHeader);
    projectAnchor.appendChild(projectFooter);
    projectDiv.appendChild(projectAnchor);

    const projectsContainer = document.getElementById("projects-container");
    if (projectsContainer) {
        projectsContainer.appendChild(projectDiv);
    }
}

function renderFooter(svgNamespace) {
    const footer = document.getElementById("footer");
    if (footer) {
        renderLinkedIn(footer, svgNamespace);
        renderGitHub(footer, svgNamespace);
        renderStartSpikeGame(footer);
    }
}

function renderLinkedIn(footer, svgNamespace) {
    renderFooterIcon(
        "https://www.linkedin.com/in/gelfiusm",
        "0 0 382 382",
        "M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z",
        "fill:#0077B7;",
        footer,
        svgNamespace,
        "linkedin-icon"
    );
}

function renderGitHub(footer, svgNamespace) {
    renderFooterIcon(
        "https://github.com/mgelfius",
        "0 -0.5 25 25",
        "m12.301 0h.093c2.242 0 4.34.613 6.137 1.68l-.055-.031c1.871 1.094 3.386 2.609 4.449 4.422l.031.058c1.04 1.769 1.654 3.896 1.654 6.166 0 5.406-3.483 10-8.327 11.658l-.087.026c-.063.02-.135.031-.209.031-.162 0-.312-.054-.433-.144l.002.001c-.128-.115-.208-.281-.208-.466 0-.005 0-.01 0-.014v.001q0-.048.008-1.226t.008-2.154c.007-.075.011-.161.011-.249 0-.792-.323-1.508-.844-2.025.618-.061 1.176-.163 1.718-.305l-.076.017c.573-.16 1.073-.373 1.537-.642l-.031.017c.508-.28.938-.636 1.292-1.058l.006-.007c.372-.476.663-1.036.84-1.645l.009-.035c.209-.683.329-1.468.329-2.281 0-.045 0-.091-.001-.136v.007c0-.022.001-.047.001-.072 0-1.248-.482-2.383-1.269-3.23l.003.003c.168-.44.265-.948.265-1.479 0-.649-.145-1.263-.404-1.814l.011.026c-.115-.022-.246-.035-.381-.035-.334 0-.649.078-.929.216l.012-.005c-.568.21-1.054.448-1.512.726l.038-.022-.609.384c-.922-.264-1.981-.416-3.075-.416s-2.153.152-3.157.436l.081-.02q-.256-.176-.681-.433c-.373-.214-.814-.421-1.272-.595l-.066-.022c-.293-.154-.64-.244-1.009-.244-.124 0-.246.01-.364.03l.013-.002c-.248.524-.393 1.139-.393 1.788 0 .531.097 1.04.275 1.509l-.01-.029c-.785.844-1.266 1.979-1.266 3.227 0 .025 0 .051.001.076v-.004c-.001.039-.001.084-.001.13 0 .809.12 1.591.344 2.327l-.015-.057c.189.643.476 1.202.85 1.693l-.009-.013c.354.435.782.793 1.267 1.062l.022.011c.432.252.933.465 1.46.614l.046.011c.466.125 1.024.227 1.595.284l.046.004c-.431.428-.718 1-.784 1.638l-.001.012c-.207.101-.448.183-.699.236l-.021.004c-.256.051-.549.08-.85.08-.022 0-.044 0-.066 0h.003c-.394-.008-.756-.136-1.055-.348l.006.004c-.371-.259-.671-.595-.881-.986l-.007-.015c-.198-.336-.459-.614-.768-.827l-.009-.006c-.225-.169-.49-.301-.776-.38l-.016-.004-.32-.048c-.023-.002-.05-.003-.077-.003-.14 0-.273.028-.394.077l.007-.003q-.128.072-.08.184c.039.086.087.16.145.225l-.001-.001c.061.072.13.135.205.19l.003.002.112.08c.283.148.516.354.693.603l.004.006c.191.237.359.505.494.792l.01.024.16.368c.135.402.38.738.7.981l.005.004c.3.234.662.402 1.057.478l.016.002c.33.064.714.104 1.106.112h.007c.045.002.097.002.15.002.261 0 .517-.021.767-.062l-.027.004.368-.064q0 .609.008 1.418t.008.873v.014c0 .185-.08.351-.208.466h-.001c-.119.089-.268.143-.431.143-.075 0-.147-.011-.214-.032l.005.001c-4.929-1.689-8.409-6.283-8.409-11.69 0-2.268.612-4.393 1.681-6.219l-.032.058c1.094-1.871 2.609-3.386 4.422-4.449l.058-.031c1.739-1.034 3.835-1.645 6.073-1.645h.098-.005zm-7.64 17.666q.048-.112-.112-.192-.16-.048-.208.032-.048.112.112.192.144.096.208-.032zm.497.545q.112-.08-.032-.256-.16-.144-.256-.048-.112.08.032.256.159.157.256.047zm.48.72q.144-.112 0-.304-.128-.208-.272-.096-.144.08 0 .288t.272.112zm.672.673q.128-.128-.064-.304-.192-.192-.32-.048-.144.128.064.304.192.192.32.044zm.913.4q.048-.176-.208-.256-.24-.064-.304.112t.208.24q.24.097.304-.096zm1.009.08q0-.208-.272-.176-.256 0-.256.176 0 .208.272.176.256.001.256-.175zm.929-.16q-.032-.176-.288-.144-.256.048-.224.24t.288.128.225-.224z",
        null,
        footer,
        svgNamespace,
        "github-icon"
    );
}

function renderStartSpikeGame(footer) {
    const containingDiv = document.createElement("div");
    const buttonText = document.createElement("p");

    buttonText.textContent = "Start";

    containingDiv.setAttribute("id", "start-game-button");
    containingDiv.setAttribute("class", "button");

    containingDiv.addEventListener("click", function() {
        startSpikeGame();
        containingDiv.blur();
    });

    containingDiv.appendChild(buttonText);
    footer.appendChild(containingDiv);
}

function renderScore(footer) {
    if (!document.getElementById("score-display")) {
        const containingDiv = document.createElement("div");
        const scoreDisplay = document.createElement("p");

        scoreDisplay.setAttribute("id", "score-display");
        scoreDisplay.textContent = `Score: ${spikeScore}`;

        containingDiv.appendChild(scoreDisplay);
        footer.appendChild(containingDiv);
    }
    else {
        spikeScore = 0;
        document.getElementById("score-display").textContent = `Score: ${spikeScore}`;
    }
}

function renderFooterIcon(href, viewbox, d, style, footer, svgNamespace, containingId) {
    const anchor = document.createElement("a");
    const containingDiv = document.createElement("div");
    const svgPath = document.createElementNS(svgNamespace, "path");
    const svg = document.createElementNS(svgNamespace, "svg");

    containingDiv.setAttribute("id", containingId);
    svg.setAttribute("id", containingId + "-svg");

    if (style) {
        svgPath.setAttributeNS(null, "style", style);
    }
    svgPath.setAttributeNS(null, "d", d);

    anchor.setAttribute("href", href);
    anchor.setAttribute("target", "_blank");
    anchor.setAttribute("rel", "noopener noreferrer");

    svg.setAttributeNS(null, "height", "30px");
    svg.setAttributeNS(null, "width", "30px");
    svg.setAttributeNS(null, "viewBox", viewbox);
    svg.setAttributeNS(null, "fill", "#000000");
    svg.setAttributeNS(null, "class", "footer-icon");
    svg.setAttributeNS(null, "stroke-width", "0");
    svg.setAttributeNS(null, "stroke-linecap", "round");
    svg.setAttributeNS(null, "stroke-linejoin", "round");

    svg.appendChild(svgPath);
    anchor.appendChild(svg);
    containingDiv.appendChild(anchor);
    footer.appendChild(containingDiv);
}

function renderAll() {
    const svgNamespace = "http://www.w3.org/2000/svg";
    renderHeaders(svgNamespace);
    renderProjects();
    renderFooter(svgNamespace);
}

function startSpinning(elementId) {
    const githubIcon = document.getElementById(elementId);
    const viewHeight = window.innerHeight;
    
    let currentRotation = 0;

    requestAnimationFrame(rotate);
    
    function rotate() {
        currentRotation += rotationSpeed;
        githubIcon.style.transform = `translateY(-${0.04 * viewHeight - 5}px) rotate(${currentRotation}deg)`;
        const liBox = document.getElementById('linkedin-icon-svg').getBoundingClientRect();
        const ghBox = document.getElementById('github-icon-svg').getBoundingClientRect();
        if (isInContact(ghBox, liBox)) {
            gameOver();
        }
        else {
            rotationSpeed += 0.005;
            requestAnimationFrame(rotate);
        }
    }
}

function slideSpike() {
    const linkedinIcon = document.getElementById('linkedin-icon');
    let distanceTraveled = 0;

    requestAnimationFrame(slideLeft);

    function slideLeft() {
        distanceTraveled += slideSpeed;
        linkedinIcon.style.transform = `translateX(-${distanceTraveled}px)`;

        const linkedinSvg = document.getElementById('linkedin-icon-svg');
        const githubSvg = document.getElementById('github-icon-svg');
        const liBox = linkedinSvg.getBoundingClientRect();
        const ghBox = githubSvg.getBoundingClientRect();

        if (isInContact(ghBox, liBox)) {
            gameOver();
        }
        else {
            if (liBox.right <= 0) {
                linkedinIcon.style.transitionDuration = '0ms';
                linkedinIcon.style.transform = `translateY(-15px) translateX(75vw) rotate(45deg)`;
                slideSpeed += 0.5;
                distanceTraveled = 0;
                spikeScore += 1;
                document.getElementById('score-display').textContent = `Score: ${spikeScore}`;
            }
            requestAnimationFrame(slideLeft);
        }
    }
}

function isInContact(githubBox, linkedinBox) {
    return !(githubBox.right < linkedinBox.left ||
             githubBox.left > linkedinBox.right ||
             githubBox.bottom < linkedinBox.top);
}

function triggerJump(event) {
    const githubIcon = document.getElementById('github-icon');

    if (event.code === 'Space') {
        const timing = (1200 + rotationSpeed * 10) * (2.4/slideSpeed);
        githubIcon.setAttribute("animation", `jumpAnimation ${timing}ms !important`);
        if(!githubIcon.classList.contains('jump')) {
            githubIcon.classList.add('jump');
            setTimeout(() => {
                githubIcon.classList.remove('jump');
            }, timing);
        }
    }
}

function gameOver() {
    const linkedinSvg = document.getElementById('linkedin-icon-svg');
    const linkedinIcon = document.getElementById('linkedin-icon');
    const githubIcon = document.getElementById('github-icon-svg');

    linkedinIcon.style.transform = ``;
    githubIcon.style.transform = ``;

    rotationSpeed = 1.2;
    slideSpeed = 2.4;

    linkedinSvg.classList.remove('spike');

    document.getElementById('github-icon').classList.remove('jump');

    linkedinSvg.removeEventListener('animationend', startGameFunction);
    window.removeEventListener('keydown', triggerJump);
}

function startGameFunction(event) {
    if (event.animationName === 'spikeSpawn') {
        startSpinning('github-icon-svg');
        slideSpike();
    }
}

 function startSpikeGame() {
    const linkedinIcon = document.getElementById('linkedin-icon-svg');
    const footer = document.getElementById('footer');

    renderScore(footer);

    linkedinIcon.classList.add('spike');
    linkedinIcon.addEventListener('animationend', startGameFunction);
    
    window.addEventListener('keydown', triggerJump);
 }

function main() {
    renderAll();
}

main();