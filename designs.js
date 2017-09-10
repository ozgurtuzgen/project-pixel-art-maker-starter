$(document).ready(function () {
    // Select color input
    let colorPicker = $("#colorPicker");

    // Select size input
    let input_width = $("#input_width");
    let input_height = $("#input_height");

    // When size is submitted by the user, call makeGrid()

    $("#sizePicker").submit(function(event){
        width = input_width.val();
        height = input_height.val();
        makeGrid();

        return false;
    });

    // $("#colorPicker").on("change",function () {
    //     color = colorPicker.val();
    // });

    function makeGrid() {
        let table = $("#pixel_canvas")[0];
        while (table.hasChildNodes()) {
            table.removeChild(table.firstChild);
        }

        for (let i = 0; i < input_height.val(); i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < input_width.val(); j++) {
                let td = document.createElement('td');

                td.onclick = (function (r, c) {
                    return function () {
                        if (td.bgColor == colorPicker.val()) {
                            td.bgColor = "#ffffff";
                        }
                        else {
                            td.bgColor = colorPicker.val();
                        }
                    };
                }(i, j));

                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
    }
});