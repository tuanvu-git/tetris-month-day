const fs = require("fs");
const shape_1_1 = [
    [0, 0, 1, 1],
    [1, 1, 1, 0],
];

const shape_1_2 = [
    [1, 1, 1, 0],
    [0, 0, 1, 1],
];

const shape_1_3 = [
    [1, 1, 0, 0],
    [0, 1, 1, 1],
];

const shape_1_4 = [
    [0, 1, 1, 1],
    [1, 1, 0, 0],
];

const shape_1_5 = [
    [1, 0],
    [1, 1],
    [0, 1],
    [0, 1],
];

const shape_1_6 = [
    [0, 1],
    [0, 1],
    [1, 1],
    [1, 0],
];

const shape_1_7 = [
    [1, 0],
    [1, 0],
    [1, 1],
    [0, 1],

];

const shape_1_8 = [
    [0, 1],
    [0, 1],
    [1, 1],
    [1, 0],
];

const shape_2_1 = [
    [1, 1, 1],
    [1, 1, 0],
];

const shape_2_2 = [
    [1, 1, 0],
    [1, 1, 1],
];

const shape_2_3 = [
    [0, 1, 1],
    [1, 1, 1],
];

const shape_2_4 = [
    [1, 1, 1],
    [0, 1, 1],
];

const shape_2_5 = [
    [1, 1],
    [1, 1],
    [1, 0],
];

const shape_2_6 = [
    [1, 0],
    [1, 1],
    [1, 1],
];

const shape_2_7 = [
    [0, 1],
    [1, 1],
    [1, 1],
];

const shape_2_8 = [
    [1, 1],
    [1, 1],
    [0, 1],
];

const shape_3_1 = [
    [1, 1, 1, 1],
    [0, 0, 0, 1],
];

const shape_3_2 = [

    [0, 0, 0, 1],
    [1, 1, 1, 1],
];

const shape_3_3 = [
    [1, 0, 0, 0],
    [1, 1, 1, 1],
];

const shape_3_4 = [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
];

const shape_3_5 = [
    [1, 0],
    [1, 0],
    [1, 0],
    [1, 1],
];

const shape_3_6 = [
    [0, 1],
    [0, 1],
    [0, 1],
    [1, 1],
];

const shape_3_7 = [
    [1, 1],
    [0, 1],
    [0, 1],
    [0, 1],
];

const shape_3_8 = [
    [1, 1],
    [1, 0],
    [1, 0],
    [1, 0],
];

const shape_4_1 = [
    [1, 0, 1],
    [1, 1, 1],
];

const shape_4_2 = [
    [1, 1, 1],
    [1, 0, 1],

];

const shape_4_3 = [
    [1, 1],
    [1, 0],
    [1, 1],
];

const shape_4_4 = [
    [1, 1],
    [0, 1],
    [1, 1],
];

const shape_5_1 = [
    [1, 1, 1],
    [1, 1, 1],
];
const shape_5_2 = [
    [1, 1],
    [1, 1],
    [1, 1],
];

const shape_6_1 = [
    [0, 0, 1, 0],
    [1, 1, 1, 1],
];

const shape_6_2 = [
    [0, 1, 0, 0],
    [1, 1, 1, 1],
];

const shape_6_3 = [
    [1, 1, 1, 1],
    [0, 1, 0, 0],
];

const shape_6_4 = [
    [1, 1, 1, 1],
    [0, 0, 1, 0],
];

const shape_6_5 = [
    [1, 0],
    [1, 0],
    [1, 1],
    [1, 0],
];

const shape_6_6 = [
    [0, 1],
    [0, 1],
    [1, 1],
    [0, 1],
];

const shape_6_7 = [
    [0, 1],
    [1, 1],
    [0, 1],
    [0, 1],
];

const shape_6_8 = [
    [1, 0],
    [1, 1],
    [1, 0],
    [1, 0],
];

const shape_7_1 = [
    [0, 0, 1],
    [1, 1, 1],
    [1, 0, 0],
];

const shape_7_2 = [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 1],
];

const shape_7_3 = [
    [0, 1, 1],
    [0, 1, 0],
    [1, 1, 0],
];

const shape_7_4 = [
    [1, 1, 0],
    [0, 1, 0],
    [0, 1, 1],
];

const shape_8_1 = [
    [1, 1, 1],
    [1, 0, 0],
    [1, 0, 0],
];

const shape_8_2 = [
    [1, 1, 1],
    [0, 0, 1],
    [0, 0, 1],
];

const shape_8_3 = [
    [0, 0, 1],
    [0, 0, 1],
    [1, 1, 1],
];

const shape_8_4 = [
    [1, 0, 0],
    [1, 0, 0],
    [1, 1, 1],
];

const initalBoard = [ // 2 dimensional array ( 7 * 7)
    // row -> col = cell
    [0, 0, 0, 0, 0, 0, 1],   // month line 1
    [0, 0, 0, 0, 0, 0, 1],   // month line 2
    [0, 0, 0, 0, 0, 0, 0],   // day line 1
    [0, 0, 0, 0, 0, 0, 0],   // day line 2
    [0, 0, 0, 0, 0, 0, 0],   // day line 3
    [0, 0, 0, 0, 0, 0, 0],  // day line 4
    [0, 0, 0, 1, 1, 1, 1],   // day line 5
    // the cell have value = 1 is a obstact
    // value = 0 is avaliable to fill shape in
]

const shapeAll = [
    [shape_1_1, shape_1_2, shape_1_3, shape_1_4, shape_1_5, shape_1_6, shape_1_7, shape_1_8], // shape1
    [shape_2_1, shape_2_2, shape_2_3, shape_2_4, shape_2_5, shape_2_6, shape_2_7, shape_2_8],
    [shape_3_1, shape_3_2, shape_3_3, shape_3_4, shape_3_5, shape_3_6, shape_3_7, shape_3_8],
    [shape_4_1, shape_4_2, shape_4_3, shape_4_4],
    [shape_5_1, shape_5_2],
    [shape_6_1, shape_6_2, shape_6_3, shape_6_4, shape_6_5, shape_6_6, shape_6_7, shape_6_8],
    [shape_7_1, shape_7_2, shape_7_3, shape_7_4],
    [shape_8_1, shape_8_2, shape_8_3, shape_8_4],
];
// ---------------------------
const shapeTest = [
    [shape_1_1, shape_1_2,], // shap1
    [shape_2_1, shape_2_2,],
];

const boardTest = [
    [0, 0, 0, 0, 0, 0, 0],   // month line 1
    [0, 0, 0, 0, 0, 0, 0],   // month line 2
    [0, 0, 0, 0, 0, 0, 0],   // day line 1
]
// -----------------------------

// output sample
/**
[
    {
        "shape0":{
            "card":0,"point":{"row":0,"col":0}
        },
        ...
        "shape7":{
            "card":0,"point":{"row":0,"col":0}
        },
        
    }
]

 */
let solutionCount = 0;
function arrangeTetris(shapeR = 0, shapeAll = [[]], currentBoard = [[]], tempResult = {}, results = []) {
    // find all posible way to put shap 1 to board
    // continue for another shape
    // end board if all shape fill in to board
    // end board if no way to put more one shape
    // log table passed
    const k = 1; // debug only
    for (let shapeC = 0; shapeC < shapeAll[shapeR].length; shapeC++) {
        const c = 1; // debug only
        for (let r = 0; r < currentBoard.length; r++) {
            for (let c = 0; c < currentBoard[r].length; c++) {
                const currentShape = shapeAll[shapeR][shapeC];
                const canFill = canFillIn(currentShape, r, c, currentBoard);
                if (!canFill) continue;
                let tempBoard = JSON.parse(JSON.stringify(currentBoard));
                tempBoard = updateBoard(currentShape, r, c, tempBoard);
                tempResult[`shape${shapeR}`] = {
                    card: shapeC,
                    point: {
                        row: r,
                        col: c
                    }
                }

                const nextShape = shapeR + 1;
                if (nextShape >= shapeAll.length) {
                    solutionCount++;
                    console.log('number of solutions found: ' + solutionCount);
                    tempResult.completedBoard = tempBoard;
                    results.push(JSON.parse(JSON.stringify(tempResult)));
                    continue;
                }
                arrangeTetris(nextShape, shapeAll, tempBoard, tempResult, results);
            }
            const a = 1;
        }
        const b = 2;
    }
    return results;
}

function main() {
    // test data
    // const cloneBoardTest = JSON.parse(JSON.stringify(boardTest));
    // const allSolution = arrangeTetris(0, shapeTest, cloneBoardTest, {}, []);
    // return allSolution;
    console.time('tetris_month_day');
    const cloneBoardTest = JSON.parse(JSON.stringify(initalBoard));
    const allSolution = arrangeTetris(0, shapeAll, cloneBoardTest, {}, []);
    console.timeEnd('tetris_month_day'); // about 15mins
    return allSolution;
}

function canFillIn(currentShape = [[]], pointRow = 0, pointCol = 0, board = [[]]) {
    for (let r = 0; r < currentShape.length; r++) {
        for (let c = 0; c < currentShape[r].length; c++) {
            const cellValue = currentShape[r][c];
            const isInSide = pointRow + r < board.length && pointCol + c < board[pointRow + r].length;
            if (!isInSide) return false;
            const boardValue = board[pointRow + r][pointCol + c];
            if (cellValue + boardValue > 1) return false;
        }
    }
    return true;
}

function updateBoard(currentShape = [[]], pointRow = 0, pointCol = 0, board = [[]]) {
    for (let r = 0; r < currentShape.length; r++) {
        for (let c = 0; c < currentShape[r].length; c++) {
            const cellValue = currentShape[r][c];
            const boardValue = board[pointRow + r][pointCol + c];
            board[pointRow + r][pointCol + c] = cellValue + boardValue;
        }
    }
    return board;
}

const arrObject = main();
const jsonString = JSON.stringify(arrObject);
fs.writeFile('./all_solution.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
})