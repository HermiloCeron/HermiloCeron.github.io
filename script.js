console.log('Script file linked!');

// Number of elements in the tower of Hanoi
let elements=7;

// Main array storing the game board
const boardArray=[[],[],[]];

// Initial array previous to the game in normal mode
iniArray();

// Draw the initial board
drawBoard();

// Main function to play
playHanoi();

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
            btn.id='element'+boardArray[i][j];
            btn.style.width=(10+((90-10)/(elements-1))*boardArray[i][j])+"%";
            console.log('value'+btn.style.width)
            document.querySelector('#ctn'+i).appendChild(btn);
        }
    }
}

//Main function to play
function playHanoi(){
    for(let i=0;i<3;i++){
        // Check if there is an element inside the container
        if(boardArray[i].length>0){
            // Select the top item at the container
            let top=document.querySelector('#element'+boardArray[i][0]);
            // Assign an action when you click in such element
            top.addEventListener('click',topFunction,false)
        }
    }
}

function topFunction(){
    //console.log(e.target);
    //Remove event listener of the tops
    for(let j=0;j<3;j++){
        // Check if there is an element inside the container
        if(boardArray[j].length>0){
            let top2=document.querySelector('#element'+boardArray[j][0]);
            console.log(top2);
            top2.removeEventListener('click',topFunction,false);
        }

    }
    
    for(let j=0;j<3;j++){
        // Select a container
        let container=document.querySelector('#ctn'+j);
        // Add an event listeenr to teh container
        container.addEventListener('click',selectContainer,false);
    }
}

function selectContainer(evt){
    console.log('hola');
}