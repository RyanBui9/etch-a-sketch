const body = document.querySelector("body");
const container = document.getElementById("container");

const button = document.createElement("button");
body.insertBefore(button, container);

replaceGrid(16);
addHoverFunctionality();

button.addEventListener("click", () => {
    let gridLength = prompt("How many squares per side?");
    gridLength = parseInt(gridLength);
    if (gridLength > 100) {
        alert("Invalid input. The maximum number you can choose is 100.");
    }
    replaceGrid(gridLength);

});

function replaceGrid(gridLength) {
    const container = document.getElementById("container");
    const newGrid = Object.assign(document.createElement("div"), {
        id: "container",
        className: "container"
    });
    container.replaceWith(newGrid);

    createRows(newGrid, gridLength);
    const rows = document.getElementsByClassName("row");
    Array.from(rows).forEach((row) => {
        createCols(row, gridLength);
    });

    addHoverFunctionality();
}

function createRows(container, gridLength) {
    for (let i = 0; i < gridLength; i++) {
        container.appendChild(
            Object.assign(document.createElement("div"), {
                className: "row",
            })
        )
    }
}

function createCols(row, gridLength) {
    for (let i = 0; i < gridLength; i++) {
        row.appendChild(
            Object.assign(document.createElement("div"), {
                className: "square",
            })
        );
    }
}

function addHoverFunctionality() {
    const squares = document.getElementsByClassName("square");

    Array.from(squares).forEach((square) => {
        square.addEventListener("mouseenter", (event) => {
            event.target.style.background = "blue";
        });
    });
}



