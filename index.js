// var init

const shapesList = ["circle", "rectangle", "semicircle"];
let shapeId = 0;
const toy = document.getElementById("toy");
const shadow = document.getElementById("toy-shadow");

let isProcessing = false;

// main functions

const getShapeClass = () => {
    let result = "";
    const prefix = "toy-";
    result += prefix + shapesList[shapeId];
    return result;
};

const setShapeId = (id) => {
    let maxId = shapesList.length - 1;

    if(id > maxId)
    {
        id = maxId;
    }
    else if(id < 0)
    {
        id = 0;
    }

    shapeId = id;
};

const setShapeClass = () => {
    const className = getShapeClass();
    toy.className = className;
};

const changeToyShape = (id) => {
    setShapeId(id);
    setShapeClass();
};

// jump animation
const jumpBtn = document.getElementById("jump-btn");

jumpBtn.addEventListener("click", () => {
    toy.classList.add("jump");
    shadow.classList.add("jump-shadow");
    toy.addEventListener("animationend", () => {
        toy.classList.remove("jump");
        shadow.classList.remove("jump-shadow");
    }, { once: true });
});

// init div clicks

const divCircle = document.getElementById("div-circle");
const divRect = document.getElementById("div-rectangle");
const divTri = document.getElementById("div-triangle");

const shapeDivs = [divCircle, divRect, divTri];

function setActiveShape(activeDiv) {
    shapeDivs.forEach(div => div.classList.remove("active-shape"));
    activeDiv.classList.add("active-shape");
}

divCircle.addEventListener("click", function(){
    changeToyShape(0);
    setActiveShape(divCircle);
});

divRect.addEventListener("click", function(){
    changeToyShape(1);
    setActiveShape(divRect);
});

divTri.addEventListener("click", function(){
    changeToyShape(2);
    setActiveShape(divTri);
});

// show repo animations

const control = document.querySelector(".control");
const footer = document.querySelector("footer"); // get footer

// create new button
let showing = false;
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "Show Repo";
toggleBtn.style.color = "white";
control.appendChild(toggleBtn);

const repoLink = "https://github.com/MrHryhorii/CSS-Advanced-3";
let linkEl;
// state switchers
let isPrinting = false;
let isDeleting = false;

toggleBtn.addEventListener("click", () => {
    // check process running
    if(!isPrinting && !isDeleting)
    {
        if (!showing) 
        {
            linkEl = footer.querySelector("a");
            if(!linkEl)
            {
                // create a-tag
                linkEl = document.createElement("a");
                linkEl.href = repoLink;
                linkEl.target = "_blank"; // new tab
                linkEl.style.display = "inline-block";
                linkEl.style.marginTop = "10px";
                // add into footer
                footer.appendChild(linkEl); 
            }        

            // loop to add chars
            let i = linkEl.textContent.length; // if textContent is not empty. 0 - default
            // start printing process
            isPrinting = true;
            const chars = repoLink.split("");
            const typer = setInterval(() => {
                if (i < chars.length) {
                    linkEl.textContent += chars[i];
                    i++;
                } else {
                    clearInterval(typer);
                    // stop printing process
                    isPrinting = false;
                };
            }, 50);

            toggleBtn.textContent = "Hide Repo";
            showing = true;
        }
        else 
        {
            // loop to remove chars
            const chars = linkEl.textContent.split("");
            let i = chars.length;
            // start deleting process
            isDeleting = true;
            const deleter = setInterval(() => {
                if (i > 0) {
                    chars.pop();
                    linkEl.textContent = chars.join("");
                    i--;
                } else {
                    clearInterval(deleter);
                    // remove link element
                    linkEl.remove();
                    // stop deleting process
                    isDeleting = false;
                };
            }, 50);
            // change button state
            toggleBtn.textContent = "Show Repo";
            showing = false;
        };
    };
});
