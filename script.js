console.log('Script file linked!');

// Number of elements in the tower of Hanoi
let elements=7;

// Main array storing the game board
const boardArray=[[],[],[]];

// Initial array previous to the game in normal mode
iniArray();

// Draw the initial board
drawBoard();

// Initializate the array in the traditional way
function iniArray(){
    for(let i=0;i<elements;i++){
        boardArray[0].push(i);
    }
}

// Draw the elements into the board
function drawBoard(){
    for(let i=0;i<3;i++){
        for(let j=0;j<boardArray[i].length;j++){
            let btn=document.createElement('button');
            btn.className='element';
            btn.style.width=(10+((90-10)/elements)*boardArray[i][j])+"%";
            console.log('value'+btn.style.width)
            document.querySelector('#ctn'+i).appendChild(btn);
        }
    }
}