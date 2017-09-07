// Select color input
let color = document.getElementById("colorPicker").value;

// Select size input
let width = document.getElementById("input_width").value;
let height = document.getElementById("input_height").value;

// When size is submitted by the user, call makeGrid()

function createGrid() {
    width = document.getElementById("input_width").value;
    height = document.getElementById("input_height").value;
    makeGrid();

    return false;
}

function setColor() {
    color = document.getElementById("colorPicker").value;
}

function makeGrid() {
    let table = document.getElementById("pixel_canvas");
    while (table.hasChildNodes()) {
        table.removeChild(table.firstChild);
    }

    for (let i = 0; i < height; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < width; j++) {
            let td = document.createElement('td');

            td.onclick = (function (r, c) {
                return function () {
                    if (td.bgColor == color) {
                        td.bgColor = "#ffffff";
                    }
                    else {
                        td.bgColor = color;
                    }
                };
            }(i, j));

            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}