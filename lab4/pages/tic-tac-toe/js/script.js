"use strict";
window.onload = function () {
    var _a, _b;
    let moves = [];
    // field filling 
    (_a = document.querySelector('.field')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (event) {
        var _a;
        const clickedElement = event.target;
        if (!clickedElement.classList.contains("cell"))
            return;
        if (clickedElement.textContent)
            return;
        if ((_a = document.getElementById("win-status")) === null || _a === void 0 ? void 0 : _a.textContent)
            return;
        if ((moves.length == 0 || moves.at(-1) == "O") && moves.length < 9) {
            clickedElement.innerHTML = "<div class=\"letter\">X</div>";
            clickedElement.classList.add('placed');
            moves.push("X");
        }
        else if (moves.at(-1) == "X" && moves.length < 9) {
            clickedElement.innerHTML = "<div class=\"letter\">O</div>";
            clickedElement.classList.add('placed');
            moves.push("O");
        }
        winChecking();
    });
    // field cleaning
    (_b = document.getElementById("reset")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function (event) {
        let cells = document.getElementsByClassName("cell");
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = "";
        }
        let winStatus = document.getElementById("win-status");
        if (winStatus)
            winStatus.textContent = "";
        moves = [];
        let cellsElem = [];
        for (let i = 1; i < 10; i++)
            cellsElem.push(document.getElementById(`cell${i}`));
        for (let cell of cellsElem)
            cell.classList.remove("win-cell", "lose-cell", "placed");
    });
    function winChecking() {
        function setWinLoseClass(win) {
            for (let i = 0; i < 9; i++) {
                if (win.includes(i))
                    cellsElem[i].classList.add("win-cell");
                else
                    cellsElem[i].classList.add("lose-cell");
            }
        }
        let cells = [];
        let cellsElem = [];
        for (let i = 1; i < 10; i++) {
            let cellElem = document.getElementById(`cell${i}`);
            cells.push(cellElem === null || cellElem === void 0 ? void 0 : cellElem.textContent);
            cellsElem.push(cellElem);
        }
        
        let winStatus = document.getElementById("win-status");
        if (cells[0] == cells[1] && cells[1] == cells[2] && cells[0] != "") { // top row
            winStatus.textContent = `Выиграл ${cells[0]}`;
            setWinLoseClass([0, 1, 2]);
        }
        else if (cells[3] == cells[4] && cells[4] == cells[5] && cells[3] != "") { // mid row
            winStatus.textContent = `Выиграл ${cells[3]}`;
            setWinLoseClass([3, 4, 5]);
        }
        else if (cells[6] == cells[7] && cells[7] == cells[8] && cells[6] != "") { // bottom row
            winStatus.textContent = `Выиграл ${cells[6]}`;
            setWinLoseClass([6, 7, 8]);
        }
        else if (cells[0] == cells[3] && cells[3] == cells[6] && cells[0] != "") { // left column
            winStatus.textContent = `Выиграл ${cells[0]}`;
            setWinLoseClass([0, 3, 6]);
        }
        else if (cells[1] == cells[4] && cells[4] == cells[7] && cells[1] != "") { // mid column
            winStatus.textContent = `Выиграл ${cells[1]}`;
            setWinLoseClass([1, 4, 7]);
        }
        else if (cells[2] == cells[5] && cells[5] == cells[8] && cells[2] != "") { // right column
            winStatus.textContent = `Выиграл ${cells[2]}`;
            setWinLoseClass([2, 5, 8]);
        }
        else if (cells[0] == cells[4] && cells[4] == cells[8] && cells[0] != "") { // main diagonal
            winStatus.textContent = `Выиграл ${cells[0]}`;
            setWinLoseClass([0, 4, 8]);
        }
        else if (cells[2] == cells[4] && cells[4] == cells[6] && cells[2] != "") { // side diagonal
            winStatus.textContent = `Выиграл ${cells[2]}`;
            setWinLoseClass([2, 4, 6]);
        }
    }
};
