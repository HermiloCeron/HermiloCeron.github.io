//console.log('Script file linked!');

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

// Initial array previous to the game in normal mode
iniArray();

// Draw the initial board
drawBoard();

// Main function to play
playHanoi();

const loginForm=document.getElementById("form");

loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const player=document.getElementById('playerID').value;
    document.getElementById("login-page").style.display="none";
    document.getElementById("game-page").style.display="initial";
})

// Initializate the array in the traditional way
function iniArray(){
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
            console.log(movements);
            drawBoard();
        }
        if(boardArray[2].length<elements){
            playHanoi();
        }
        points=(2**elements-1)+(2**elements-1-movements);
        console.log(points);
    }else{
        playHanoi();
    }
}