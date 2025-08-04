const shapesList = ["circle", "rectangle", "triangle"];
let shapeId = 0;

const getShapeClass = () => {
    let result = "";
    const prefix = "toy-";
    result += prefix + shapesList[shapeId];
    return result;
};