//console.log('Script file linked!');


// Default level
let gameLevel=1;

// Number of elements in the tower of Hanoi
let elements=3;

// Main array storing the game board
const boardArray=[[],[],[]];

// Variables to control the game
let moveValueFrom;
let moveValueTo;

// Variable to count the movements
let movements=0;

// Variable to track the number of points
let points=0;

// Variable to track the best player score
let score=0;

// player ID
let player="";

//  Reset game variable
let resetGame=false;

// Initial array previous to the game in normal mode
iniArray();

// Draw the initial board
drawBoard();

// Main function to play
playHanoi();

// Get the player ID

const loginForm=document.getElementById("form");

loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    player=document.getElementById('playerID').value;
    document.getElementById("login-page").style.display="none";
    document.getElementById("game-page").style.display="initial";
    document.getElementById('player').innerText='Player: '+player;
})

// Set Reset game button

const rstBtn=document.getElementById('rstGame');

rstBtn.addEventListener('click',() => {
    resetGame=true;   
});


// Initializate the array in the traditional way
function iniArray(){
    for(let i=0;i<3;i++){
        boardArray[i].length=0;
    }
        for(let i=0;i<elements;i++){
        boardArray[0].push(i);
    }
}

// Draw the elements into the board
function drawBoard(){
    for(let i=0;i<3;i++){
        let container=document.querySelector('#ctn'+i);
        //Remove all the children  https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
        while(container.lastChild){
            container.removeChild(container.lastChild);
        }
        for(let j=0;j<boardArray[i].length;j++){
            let btn=document.createElement('button');
            btn.className='element';
            btn.id='element'+boardArray[i][j]+'ctn'+i;
            btn.style.width=(10+((90-10)/(elements-1))*boardArray[i][j])+"%";
            //console.log('value'+btn.style.width)
            container.appendChild(btn);
        }
    }
}

// Check reset

function checkReset(){
    if(resetGame){
        resetGame=false;
        gameMode();
    }
}

// Main funtion to control the game mode
function gameMode(){
    iniArray();
    drawBoard();
    playHanoi();
}

//Main function to play
function playHanoi(){
    // moveValueFrom=-1;
    // moveValueTo=-1;
    for(let i=0;i<3;i++){
        // Check if there is an element inside the container
        if(boardArray[i].length>0){
            // Select the top item at the container
            let top=document.querySelector('#element'+boardArray[i][0]+'ctn'+i);
            // Assign an action when you click in such element
            top.addEventListener('click',topFunction,false)
        }
    }
    setInterval(checkReset,10);
}

function topFunction(e){
    // Avoinding event propagation
    // https://stackoverflow.com/questions/57532468/javascript-nested-addeventlistener-in-callback-of-another-addeventlistener-is-fi
    e.stopPropagation();
    //console.log(e.target);
    // Store the value which is going to be moved
    moveValueFrom=parseInt(e.target.id.charAt(e.target.id.length-1));
    //Remove event listener of the tops
    for(let j=0;j<3;j++){
        // Check if there is an element inside the container
        if(boardArray[j].length>0){
            let top2=document.querySelector('#element'+boardArray[j][0]+'ctn'+j);
            //console.log(top2);
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
    // Store the value which is going to be moved
    moveValueTo=parseInt(evt.target.id.charAt(evt.target.id.length-1));
    for(let j=0;j<3;j++){
        // Select a container
        let container=document.querySelector('#ctn'+j);
        // Add an event listener to the container
        container.removeEventListener('click',selectContainer,false);
    }
    //Check if is a valid movement
    if(moveValueTo!==moveValueFrom){
        //console.log(moveValueFrom)
        //console.log(moveValueTo)
        if(boardArray[moveValueTo].length == 0 || boardArray[moveValueTo][0]>boardArray[moveValueFrom][0]){
            //  Remove the first value with Shift  https://www.w3schools.com/jsref/jsref_shift.asp
            //  Add this value at the top with unshift https://www.w3schools.com/jsref/jsref_unshift.asp
            boardArray[moveValueTo].unshift(boardArray[moveValueFrom].shift());
            movements++;
            //console.log(movements);
            drawBoard();
        }
        points=(2**elements-1)+(2**elements-1-movements);
        console.log(points);
        if(boardArray[2].length<elements){
            playHanoi();
        }else{
            if(points>score){
                score=points;
                document.getElementById('score').innerText='Best score: '+score;
            }
        }
    }else{
        playHanoi();
    }
}

// Set the level buttons

const levelBtn1=document.getElementById('level1');
const levelBtn2=document.getElementById('level2');
const levelBtn3=document.getElementById('level3');
const levelBtn4=document.getElementById('level4');

levelBtn1.addEventListener('click',checkLevel);
levelBtn2.addEventListener('click',checkLevel);
levelBtn3.addEventListener('click',checkLevel);
levelBtn4.addEventListener('click',checkLevel);

levelBtn1.style.backgroundColor="#CE1836";

function checkLevel(e){
    gameLevel=parseInt(e.target.id.charAt(e.target.id.length-1));
    switch(gameLevel){
        case 2:
            elements=5;
            levelBtn1.style.backgroundColor="#009989";
            levelBtn2.style.backgroundColor="#CE1836";
            levelBtn3.style.backgroundColor="#009989";
            levelBtn4.style.backgroundColor="#009989";
            break;
        case 3:
            elements=7;
            levelBtn1.style.backgroundColor="#009989";
            levelBtn2.style.backgroundColor="#009989";
            levelBtn3.style.backgroundColor="#CE1836";
            levelBtn4.style.backgroundColor="#009989";
            break;
        case 4:
            elements=9;
            levelBtn1.style.backgroundColor="#009989";
            levelBtn2.style.backgroundColor="#009989";
            levelBtn3.style.backgroundColor="#009989";
            levelBtn4.style.backgroundColor="#CE1836";
            break;
        default:
            elements=3;
            levelBtn1.style.backgroundColor="#CE1836";
            levelBtn2.style.backgroundColor="#009989";
            levelBtn3.style.backgroundColor="#009989";
            levelBtn4.style.backgroundColor="#009989";
    }
    resetGame=true;
}

// Make the reset user botton to reload teh page https://www.w3schools.com/jsref/met_loc_reload.asp

document.getElementById('rstUser').addEventListener('click',() => {location.reload();})