// var init

const shapesList = ["circle", "rectangle", "semicircle"];
let shapeId = 0;
const toy = document.getElementById("toy");

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

// init div clicks

const divCircle = document.getElementById("div-circle");
const divRect = document.getElementById("div-rectangle");
const divTri = document.getElementById("div-triangle");


divCircle.addEventListener("click", function(){
    changeToyShape(0);
});

divRect.addEventListener("click", function(){
    changeToyShape(1);
});

divTri.addEventListener("click", function(){
    changeToyShape(2);
});