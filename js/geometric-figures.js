const PI = Math.PI;
var squarePerimeterResult =  document.getElementById("squarePerimeterResult");

/* Display the form for the shapw selected */
document.getElementById("squareForm").style.display = "block";
document.getElementById("triangleForm").style.display = "none";
document.getElementById("circleForm").style.display = "none";
document.getElementById("errorMessage").style.display = "none";
document.getElementById("menu-icon").style.display = "block";
document.getElementById("close-icon").style.display = "none";

/* Show or hide form depend on the select option selected */
const selectShape = document.querySelector('.select');

selectShape.addEventListener('change', (event) => {
    const OPTION_SELECTED = event.target.value;

    switch (OPTION_SELECTED) {
        case "value1":
            document.getElementById("squareForm").style.display = "block";
            document.getElementById("triangleForm").style.display = "none";
            document.getElementById("circleForm").style.display = "none";
            break;
        case "value2":
            document.getElementById("squareForm").style.display = "none";
            document.getElementById("triangleForm").style.display = "block";
            document.getElementById("circleForm").style.display = "none";
            break;
        case "value3":
            document.getElementById("squareForm").style.display = "none";
            document.getElementById("triangleForm").style.display = "none";
            document.getElementById("circleForm").style.display = "block";
            break;
      }
});

/* Hide message error when square input is clicked */
let squareInput = document.getElementById('squareInput');
squareInput.addEventListener('click', function(e) {
    e.preventDefault();
    let clickEvent = new Event('click');
    document.getElementById('errorMessage').style.display = "none";
})

/* Hide message error when triangle side 1 input is clicked */
let input1 = document.getElementById('triangleInput1');
input1.addEventListener('click', function(e) {
    e.preventDefault();
    let clickEvent = new Event('click');
    document.getElementById('errorTriangleMsg').style.display = "none";
})

/* Hide message error when triangle side 2 input is clicked */
let input2 = document.getElementById('triangleInput2');
input2.addEventListener('click', function(e) {
    e.preventDefault();
    let clickEvent = new Event('click');
    document.getElementById('errorTriangleMsg').style.display = "none";
})

/* Hide message error when triangle base input is clicked */
let input3 = document.getElementById('triangleInput3');
input3.addEventListener('click', function(e) {
    e.preventDefault();
    let clickEvent = new Event('click');
    document.getElementById('errorTriangleMsg').style.display = "none";
})

/* Hide message error when triangle height input is clicked */
let input4 = document.getElementById('triangleInput4');
input4.addEventListener('click', function(e) {
    e.preventDefault();
    let clickEvent = new Event('click');
    document.getElementById('errorTriangleMsg').style.display = "none";
})

/* Hide message error when circle input is clicked */
let circleInput = document.getElementById('circleInput');
circleInput.addEventListener('click', function(e) {
    e.preventDefault();
    let clickEvent = new Event('click');
    document.getElementById('errorCircleMsg').style.display = "none";
})

/* GEOMETRIC CALCULATOR FUNCTIONS */

const squarePerimeter = side => {
    return Number(side) * 4;
}

const squareArea = side => {
    return Math.pow(side, 2);
}

const trianglePerimeter = (side1, side2, side3) => {
    return Number(side1) + Number(side2) + Number(side3);
}

const triangleArea = (base, height) => {
    return base * height / 2;
}

const circleDiameter = radius => {
    console.log('diametro ' + Number(radius)*2)
    return Number(radius) * 2;
}

const circlePerimeter = radius => {
    const DIAMETER = circleDiameter(radius);
    return Number(DIAMETER) * PI;
}

const circleArea = radius => {
    return PI * Number(radius) * Number(radius);
}

const calculateSquarePerimeter = () => {
    const SQUARE_SIDE = document.getElementById("squareInput").value;
    const SQUARE_MEASURE = document.getElementById("squareMeasure").value;

    if (!SQUARE_SIDE) {
        document.getElementById("errorMessage").innerHTML = 'You must enter the square side value.'
        document.getElementById("errorMessage").style.display = "block";
    } else {
        const RESULT = squarePerimeter(SQUARE_SIDE);
        document.getElementById("errorMessage").style.display = "none";
        document.getElementById("squareResult").innerHTML = `The square perimeter is: ${RESULT} ${SQUARE_MEASURE}`;
    }
}

const calculateSquareArea = () => {
    const SQUARE_SIDE = document.getElementById("squareInput").value;
    const SQUARE_MEASURE = document.getElementById("squareMeasure").value;

    if (!SQUARE_SIDE) {
        document.getElementById("errorMessage").innerHTML = 'You must enter the square side value.'
        document.getElementById("errorMessage").style.display = "block";
    } else {
        const RESULT = squareArea(SQUARE_SIDE);
        document.getElementById("errorMessage").style.display = "none";
        document.getElementById("squareResult").innerHTML = `The square area is: ${RESULT} ${SQUARE_MEASURE}^2`;
    }
}
 
const calculateTrianglePerimeter = () => {
    const TRIANGLE_SIDE1 = document.getElementById("triangleInput1").value;
    const TRIANGLE_SIDE2 = document.getElementById("triangleInput2").value;
    const TRIANGLE_SIDE3 = document.getElementById("triangleInput3").value;
    const TRIANGLE_MEASURE = document.getElementById("triangleMeasure").value;
    console.log(TRIANGLE_MEASURE)

    if (!TRIANGLE_SIDE1 || !TRIANGLE_SIDE2 || !TRIANGLE_SIDE3) {
        document.getElementById("errorTriangleMsg").innerHTML = 'You must enter side 1, side 2 and base.'
        document.getElementById("errorTriangleMsg").style.display = "block";
    } else {
        const RESULT = trianglePerimeter(TRIANGLE_SIDE1, TRIANGLE_SIDE2, TRIANGLE_SIDE3);
        document.getElementById("errorTriangleMsg").style.display = "none";
        document.getElementById("triangleResult").innerHTML = `The triangle perimeter is: ${RESULT} ${TRIANGLE_MEASURE}`;
    }
}

const calculateTriangleArea = () => {
    const BASE = document.getElementById("triangleInput3").value;
    const HEIGHT = document.getElementById("triangleInput4").value;
    const TRIANGLE_MEASURE = document.getElementById("triangleMeasure").value;

    if (!BASE || !HEIGHT) {
        document.getElementById("errorTriangleMsg").innerHTML = 'You must enter base and height.'
        document.getElementById("errorTriangleMsg").style.display = "block";
    } else {
        const RESULT = triangleArea(BASE, HEIGHT);
        document.getElementById("errorTriangleMsg").style.display = "none";
        document.getElementById("triangleResult").innerHTML = `The triangle area is: ${RESULT} ${TRIANGLE_MEASURE}^2`;
    }
}

const calculateCirclePerimeter = () => {
    const RADIUS = document.getElementById("circleInput").value;
    const RESULT = circlePerimeter(RADIUS).toFixed(2);
    const CIRCLE_MEASURE = document.getElementById("circleMeasure").value;

    if (!RADIUS) {
        document.getElementById("errorCircleMsg").innerHTML = 'You must enter the radius.'
        document.getElementById("errorCircleMsg").style.display = "block";
    } else {
        document.getElementById("errorCircleMsg").style.display = "none";
        document.getElementById("circleResult").innerHTML = `The circle perimeter is: ${RESULT} ${CIRCLE_MEASURE}`;
    }
}

const calculateCircleArea = () => {
    const RADIUS = document.getElementById("circleInput").value;
    const RESULT = circleArea(RADIUS).toFixed(2);
    const CIRCLE_MEASURE = document.getElementById("circleMeasure").value;

    if (!RADIUS) {
        document.getElementById("errorCircleMsg").innerHTML = 'You must enter the radius.'
        document.getElementById("errorCircleMsg").style.display = "block";
    } else {
        document.getElementById("errorCircleMsg").style.display = "none";
        document.getElementById("circleResult").innerHTML = `The circle area is: ${RESULT} ${CIRCLE_MEASURE}^2`;
    }
}
