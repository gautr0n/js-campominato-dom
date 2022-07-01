// impostazioni iniziali

const rows = 10;
const cells = 10;
const totalCells = rows * cells;

//funzioni
function createCell(cellNumber){
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.innerText = cellNumber;

    return cell;
}

//prendo il bottone dal DOM
const playButton = document.getElementById ('start');

function play() {
    //trasformo il 'start' in 'ricomincia'
    this.innerText = 'Ricomincia'
    //recupero la griglia
    const grid = document.getElementById('grid');

    for (let i=1; i<=totalCells; i++) {
        const cell = createCell(i);

        cell.addEventListener('click', function(){
            console.log(i);
            cell.classList.add('clicked')
        })

        //appendo la cella alla griglia
        grid.appendChild(cell);
    }
}

//aggancio l'event listener
playButton.addEventListener('click', play)
