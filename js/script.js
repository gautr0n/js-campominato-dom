let gridSize = 10;
let cellNumber = gridSize * gridSize
const bomb = [];
let points = 0

while (bomb.length < 16){
    let check =  Math.floor(Math.random() * 100 + 1);
    if ( bomb.includes(check) === false ){
        bomb.push(check)
    }
}
console.log(bomb);

const gridBox = document.querySelector('.grid-box');

for(let i = 0 ; i < cellNumber ; i++) {
    let num = i + 1;
    let divString = `<div class="cell" style="width: calc(100% / ${gridSize});" >${num}</div>`

    gridBox.innerHTML += divString;
}

const numberOnClick = document.querySelectorAll('.grid-box > .cell')

for(let i = 0 ; i < numberOnClick.length ; i++){
    const cell = numberOnClick[i]
    cell.addEventListener('click', hello);
};

function hello(){
    let num = parseInt(this.innerHTML);
    if (bomb.includes(num)){
        this.classList.toggle('bg-danger');
        for(let i = 0 ; i < numberOnClick.length ; i++){
            const cell = numberOnClick[i]
            cell.removeEventListener('click', hello);
        };
    } else {
        this.classList.toggle('bg-primary');
        points++;
    }
};

