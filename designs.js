$(document).ready(function () {
    // Select color input
    let color = $("#colorPicker").val();

    // Select size input
    let width = $("#input_width").val();
    let height = $("#input_height").val();

    // When size is submitted by the user, call makeGrid()

    $("#sizePicker").submit(function(event){
        width = $("#input_width").val();
        height = $("#input_height").val();
        makeGrid();

        return false;
    });

    $("#colorPicker").on("change",function () {
        color = $("#colorPicker").val();
    });

    function makeGrid() {
        let table = $("#pixel_canvas")[0];
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
});