import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { initalBoardV2, shapeAll, updateBoardv2 } from './common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'tetris-month-day';
  allColorShape = ['Red', 'Orange', 'Yellow', 'Green', 'Cyan', 'Blue', 'Magenta', 'Purple', 'rgba(229, 206, 206, 0.8)', 'rgba(125, 126, 128, 0.8)'];
  initBoard = [
    { text: 'Jan', color: this.allColorShape[8] },
    { text: 'Feb', color: this.allColorShape[8] },
    { text: 'Mar', color: this.allColorShape[8] },
    { text: 'Apr', color: this.allColorShape[8] },
    { text: 'May', color: this.allColorShape[8] },
    { text: 'Jun', color: this.allColorShape[8] },
    { text: '', color: this.allColorShape[9] },
    { text: 'Jul', color: this.allColorShape[8] },
    { text: 'Aug', color: this.allColorShape[8] },
    { text: 'Sep', color: this.allColorShape[8] },
    { text: 'Oct', color: this.allColorShape[8] },
    { text: 'Nov', color: this.allColorShape[8] },
    { text: 'Dec', color: this.allColorShape[8] },
    { text: '', color: this.allColorShape[9] },
    { text: '01', color: this.allColorShape[8] },
    { text: '02', color: this.allColorShape[8] },
    { text: '03', color: this.allColorShape[8] },
    { text: '04', color: this.allColorShape[8] },
    { text: '05', color: this.allColorShape[8] },
    { text: '06', color: this.allColorShape[8] },
    { text: '07', color: this.allColorShape[8] },
    { text: '08', color: this.allColorShape[8] },
    { text: '09', color: this.allColorShape[8] },
    { text: '10', color: this.allColorShape[8] },
    { text: '11', color: this.allColorShape[8] },
    { text: '12', color: this.allColorShape[8] },
    { text: '13', color: this.allColorShape[8] },
    { text: '14', color: this.allColorShape[8] },
    { text: '15', color: this.allColorShape[8] },
    { text: '16', color: this.allColorShape[8] },
    { text: '17', color: this.allColorShape[8] },
    { text: '18', color: this.allColorShape[8] },
    { text: '19', color: this.allColorShape[8] },
    { text: '20', color: this.allColorShape[8] },
    { text: '21', color: this.allColorShape[8] },
    { text: '22', color: this.allColorShape[8] },
    { text: '23', color: this.allColorShape[8] },
    { text: '24', color: this.allColorShape[8] },
    { text: '25', color: this.allColorShape[8] },
    { text: '26', color: this.allColorShape[8] },
    { text: '27', color: this.allColorShape[8] },
    { text: '28', color: this.allColorShape[8] },
    { text: '29', color: this.allColorShape[8] },
    { text: '30', color: this.allColorShape[8] },
    { text: '31', color: this.allColorShape[8] },
    { text: '', color: this.allColorShape[9] },
    { text: '', color: this.allColorShape[9] },
    { text: '', color: this.allColorShape[9] },
    { text: '', color: this.allColorShape[9] }
  ];
  isSelected = false;
  currentBoard: { text: string, color: string }[] = [];
  month = '';
  currentIndex = 0;
  day = '';
  initShape = [
    // 22
    'X', 'X', '0', '0', '', '1', '1', '1', '', '2', '2', '2', '2', '', '3', 'X', '3', '',
    '0', '0', '0', 'X', '', '1', '1', 'X', '', 'X', 'X', 'X', '2', '', '3', '3', '3', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    'X', 'X', '5', 'X', '', 'X', 'X', '6', '', '7', '7', '7', '', '', '4', '4', '4', '',
    '5', '5', '5', '5', '', '6', '6', '6', '', '7', 'X', 'X', '', '', '4', '4', '4', '',
    '', '', '', '', '', '6', 'X', 'X', '', '7', 'X', 'X', '', '', '', '', '', '',
  ];

  responseData: any[] = [];
  constructor(private httpCleint: HttpClient) {

  }



  ngOnInit(): void {
    this.currentBoard = JSON.parse(JSON.stringify(this.initBoard));
    console.log(shapeAll)
  }

  onExecute() {
    this.httpCleint.get('http://localhost:3000/find',
      {
        params: {
          month: this.month,
          day: this.day
        }
      }
    ).subscribe((data: any) => {
      this.responseData = data.data;
      this.currentIndex = 0;
      this.onSelectOne(this.currentIndex);
    });

  }

  onSelectOne(index: number) {
    this.currentIndex = index;
    if (index <= 0) this.currentIndex = 0;
    if (index >= this.responseData.length - 1) this.currentIndex = this.responseData.length - 1
    const _2dBoard = JSON.parse(JSON.stringify(initalBoardV2));
    const dataToRender = this.responseData[this.currentIndex];
    const shapea = JSON.parse(JSON.stringify(shapeAll));
    const shape0 = shapea[0][dataToRender.shape0.card];
    const shape1 = shapea[1][dataToRender.shape1.card];
    const shape2 = shapea[2][dataToRender.shape2.card];
    const shape3 = shapea[3][dataToRender.shape3.card];
    const shape4 = shapea[4][dataToRender.shape4.card];
    const shape5 = shapea[5][dataToRender.shape5.card];
    const shape6 = shapea[6][dataToRender.shape6.card];
    const shape7 = shapea[7][dataToRender.shape7.card];
    this.isSelected = true;
    updateBoardv2(shape0, dataToRender.shape0.point.row, dataToRender.shape0.point.col, _2dBoard, 1);
    updateBoardv2(shape1, dataToRender.shape1.point.row, dataToRender.shape1.point.col, _2dBoard, 2);
    updateBoardv2(shape2, dataToRender.shape2.point.row, dataToRender.shape2.point.col, _2dBoard, 3);
    updateBoardv2(shape3, dataToRender.shape3.point.row, dataToRender.shape3.point.col, _2dBoard, 4);
    updateBoardv2(shape4, dataToRender.shape4.point.row, dataToRender.shape4.point.col, _2dBoard, 5);
    updateBoardv2(shape5, dataToRender.shape5.point.row, dataToRender.shape5.point.col, _2dBoard, 6);
    updateBoardv2(shape6, dataToRender.shape6.point.row, dataToRender.shape6.point.col, _2dBoard, 7);
    updateBoardv2(shape7, dataToRender.shape7.point.row, dataToRender.shape7.point.col, _2dBoard, 8);
    const tempBoard = _2dBoard.flat(1);
    console.log('tempBoard', tempBoard);
    for (let i = 0; i < tempBoard.length; i++) {
      switch (tempBoard[i]) {
        case 0:
          this.currentBoard[i] = this.initBoard[i];
          break;
        case -1:
          this.currentBoard[i] = {
            text: '',
            color: this.allColorShape[9]
          }
          break;
        default:
          this.currentBoard[i] = {
            text: '',
            color: this.allColorShape[+tempBoard[i] - 1]
          };
          break;
      }
    }
    document.getElementById('selection-' + this.currentIndex)?.scrollIntoView();
  }

  onReset() {
    this.currentBoard = JSON.parse(JSON.stringify(this.initBoard));
    this.responseData = [];
    this.currentIndex = 0;
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    if (!this.responseData || this.responseData.length === 0) return;
    if (event.key === 'ArrowDown') {
      this.onSelectOne(++this.currentIndex);
    }

    if (event.key === 'ArrowUp') {
      this.onSelectOne(--this.currentIndex);
    }
  }

  userByName(index: number, data: any) {
    return index;
  }
}
