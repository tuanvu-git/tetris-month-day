/**
        0   1   2   3   4   5   6
0   [   0   0   0   0   0   0   X   ]   // month line 1
1   [   0   0   0   0   0   0   X   ]   // month line 2
2   [   0   0   0   0   0   0   0   ]   // day line 1
3   [   0   0   0   0   0   0   0   ]   // day line 2
4   [   0   0   0   0   0   0   0   ]   // day line 3
5   [   0   0   0   0   0   0   0   ]   // day line 4
6   [   0   0   0   X   X   X   X   ]   // day line 5

8 shape
-- shap 1
0   0   1   1
1   1   1   0

1   1   1   0
0   0   1   1

1   1   0   0
0   1   1   1

0   1   1   1
1   1   0   0

---------------
1   0
1   1
0   1
0   1

0   1
0   1
1   1
1   0

1   0
1   0
1   1
0   1

0   1
0   1
1   1
1   0

-------------------------
-- shape 2
1   1   1
1   1   0

1   1   0
1   1   1

0   1   1
1   1   1

1   1   1
0   1   1

----------------
1   1
1   1
1   0

1   0
1   1
1   1

0   1
1   1
1   1

1   0
1   1
1   1

-------------------------
-- shape 3
1   1   1   1
0   0   0   1

0   0   0   1
1   1   1   1

1   0   0   0
1   1   1   1

1   1   1   1
1   0   0   0

---------------------
1   0
1   0
1   0
1   1

0   1
0   1
0   1
1   1

1   1
0   1
0   1
0   1

1   1
1   0
1   0
1   0

-------------------------
-- shape 4

1   0   1
1   1   1

1   1   1
1   0   1

---------
1   1
1   0
1   1

1   1
0   1
1   1

-------------------------
-- shape 5
1   1   1
1   1   1

1   1
1   1
1   1

-------------------------
-- shape 6
0   0   1   0
1   1   1   1

0   1   0   0
1   1   1   1

1   1   1   1
0   1   0   0

1   1   1   1
0   0   1   0

------------
1   0
1   0
1   1
1   0

0   1
0   1
1   1
0   1

0   1
1   1
0   1
0   1

1   0
1   1
1   0
1   0

-------------------------
-- shape 7
0   0   1
1   1   1
1   0   0

1   0   0
1   1   1
0   0   1

0   1   1
0   1   0
1   1   0

1   1   0
0   1   0
0   1   1

-------------------------
-- shape 8
1   1   1
1   0   0
1   0   0

1   1   1
0   0   1
0   0   1

0   0   1
0   0   1
1   1   1

1   0   0
1   0   0
1   1   1
*/
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
  [1, 0],
  [1, 1],
  [1, 1],
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
];

export const initalBoardV2 = [ // 2 dimensional array ( 7 * 7)
  // row -> col = cell
  [0, 0, 0, 0, 0, 0, -1],   // month line 1
  [0, 0, 0, 0, 0, 0, -1],   // month line 2
  [0, 0, 0, 0, 0, 0, 0],   // day line 1
  [0, 0, 0, 0, 0, 0, 0],   // day line 2
  [0, 0, 0, 0, 0, 0, 0],   // day line 3
  [0, 0, 0, 0, 0, 0, 0],  // day line 4
  [0, 0, 0, -1, -1, -1, -1],   // day line 5
  // the cell have value = 1 is a obstact
  // value = 0 is avaliable to fill shape in
]

export const shapeAll: any[] = [
  [shape_1_1, shape_1_2, shape_1_3, shape_1_4, shape_1_5, shape_1_6, shape_1_7, shape_1_8], // shap1
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
  // [0, 0, 0, 0, 0, 0, 0],   // day line 1
]
// -----------------------------

// output
/**
{
    shape1_Z: pointX_Y
    shape2_Z: pointX_Y
    ...
    shape8_Z: pointX_Y
}
[
     {
        shape1: {
            card: 1
            point: {
                0,
                0
            }
        }
        shape2: ...
    },
     {
        shape1: {
            card: 1,
            point: {0,1}
        },
        ...
    }


]

 */
let globalCount = 0;
let globalCount2 = 0;
function oneTetris(shapeR = 0, shapeAll = [[]], currentBoard = [[]], tempResult: any = {}, results: any[] = []) {
  // find all posible way to put shap 1 to board
  // continue for another shape
  // end board if all shape fill in to board
  // end board if no way to put more one shape
  // log table pass
  // let currentBoard = [[]];
  // let results = [];
  // currentBoard = JSON.parse(JSON.stringify(initalBoard));
  // for (let shapeR = 0; shapeR < shapeAll.length; shapeR++) {
  //
  // shapeR = 0;
  const k = 1;
  for (let shapeC = 0; shapeC < shapeAll[shapeR].length; shapeC++) {
    // const currentShape = shapeAll[shapeR][shapeC];
    const c = 1;
    for (let r = 0; r < currentBoard.length; r++) {
      for (let c = 0; c < currentBoard[r].length; c++) {
        const currentShape = shapeAll[shapeR][shapeC];
        const canFill = canFillIn(currentShape, r, c, currentBoard);
        if (!canFill) continue;
        let tempBoard = JSON.parse(JSON.stringify(currentBoard));
        tempBoard = updateBoard(currentShape, r, c, tempBoard);
        // tempResult[`${shapeR}_${shapeC}`] = `${r}_${c}`;
        tempResult[`shape${shapeR}`] = {
          card: shapeC,
          point: {
            row: r,
            col: c
          }
        }
        globalCount++;
        if (globalCount % 50_000_000 === 0) {
          console.log('avaliable count: ' + globalCount);
        }
        const nextShape = shapeR + 1;
        if (nextShape >= shapeAll.length) {
          globalCount2++;
          console.log('number of way found: ' + globalCount2);
          tempResult.completedBoard = tempBoard;
          results.push(JSON.parse(JSON.stringify(tempResult)));
          // tempResult = {};
          continue;
        }
        // currentBoard = tempBoard;
        oneTetris(nextShape, shapeAll, tempBoard, tempResult, results);
        // tempResult =  {};
        // results.push(tempResult);

      }
      const a = 1;
    }
    const b = 2;
  }
  return results;
  // }
}

export function main() {
  // test data
  // const cloneBoardTest = JSON.parse(JSON.stringify(boardTest));
  // const a = oneTetris(0, shapeTest, cloneBoardTest, {}, []);
  // return a;
  console.time('tetris_month_day');
  const cloneBoardTest = JSON.parse(JSON.stringify(initalBoard));
  const a = oneTetris(0, shapeAll, cloneBoardTest, {}, []);
  console.timeEnd('tetris_month_day');
  return a;
}

// function continueLoop(currentShape = [[]], currentBoard = [[]], shapeR, shapeC) {
//     const tempResult = {

//     }
//     for (let r = 0; k < currentBoard.length; k++) {
//         for (let c = 0; l < currentBoard[k].length; l++) {

//             const canFill = canFillIn(currentShape, r, c, currentBoard);
//             if (!canFill) continue;
//             currentBoard = updateBoard(currentShape, r, c, currentBoard);
//             tempResult[`${shapeR}_${shapeC}`] = `${r}_${c}`;
//             results.push(tempResult);
//             continueLoop(results, currentBoard, shapeR, shapeC)

//         }
//     }
// }

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

function updateBoard(currentShape = [[]], pointRow = 0, pointCol = 0, board: number[][] = [[]]) {
  for (let r = 0; r < currentShape.length; r++) {
    for (let c = 0; c < currentShape[r].length; c++) {
      const cellValue = currentShape[r][c];
      const boardValue = board[pointRow + r][pointCol + c];
      board[pointRow + r][pointCol + c] = cellValue + boardValue;
    }
  }
  return board;
}

// console.log(JSON.stringify(main()));
// const object = main();
// const jsonString = JSON.stringify(object);
// fs.writeFile('./all_solution.json', jsonString, (err: any) => {
//   if (err) {
//     console.log('Error writing file', err)
//   } else {
//     console.log('Successfully wrote file')
//   }
// })

export  function updateBoardv2(currentShape = [[]], pointRow = 0, pointCol = 0, board: number[][] = [[]], shapeNumber: number) {
  for (let r = 0; r < currentShape.length; r++) {
    for (let c = 0; c < currentShape[r].length; c++) {
      const cellValue = currentShape[r][c];
      // const boardValue = board[pointRow + r][pointCol + c];
      if(cellValue != 0) {
        board[pointRow + r][pointCol + c] = shapeNumber;
      }
    }
  }
  return board;
}
