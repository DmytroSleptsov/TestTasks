let test = validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
]);

console.log(test);

test = validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
]);

console.log(test);

function validSolution(board) {
    function isValidGroup(group) {
        return group.slice().sort().join('') === '123456789';
    }

    function getRow(board, rowIndex) {
        return board[rowIndex];
    }

    function getCol(board, colIndex) {
        return board.map(function (row) {
            return row[colIndex];
        });
    }

    function getSubGrid(board, rowStart, colStart) {
        const subGrid = [];
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                subGrid.push(board[rowStart + row][colStart + col]);
            }
        }

        return subGrid;
    }

    function isValidInput(board) {
        if (!Array.isArray(board) || board.length !== 9) {
            return false;
        }

        return board.every(function (row) {
            return (
                Array.isArray(row) &&
                row.length === 9 &&
                row.every(function (cell) {
                    return Number.isInteger(cell) && cell >= 0 && cell <= 9;
                })
            );
        });
    }

    if (!isValidInput(board)) {
        return false;
    }

    for (let i = 0; i < 9; i++) {
        if (!isValidGroup(getRow(board, i)) || !isValidGroup(getCol(board, i))) {
            return false;
        }
    }

    for (let row = 0; row < 9; row += 3) {
        for (let col = 0; col < 9; col += 3) {
            if (!isValidGroup(getSubGrid(board, row, col))) {
                return false;
            }
        }
    }

    return true;
}