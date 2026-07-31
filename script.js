const WIDTH = 1000;
const HEIGHT = 700;

const stage = new Konva.Stage({
    container: "container",
    width: WIDTH,
    height: HEIGHT
});

const layer = new Konva.Layer();

stage.add(layer);

// --------------------------
// Timer
// --------------------------

let seconds = 0;

setInterval(() => {

    seconds++;

    let mins = Math.floor(seconds / 60);

    let secs = seconds % 60;

    document.getElementById("timer").textContent =
        String(mins).padStart(2,"0") +
        ":" +
        String(secs).padStart(2,"0");

},1000);

// --------------------------

let moves = 0;

function increaseMoves(){

    moves++;

    document.getElementById("moves").textContent = moves;

}

// --------------------------

const welcome = new Konva.Text({

    x:200,

    y:300,

    text:"Loading Puzzle...",

    fontSize:40,

    fill:"#009739",

    fontStyle:"bold"

});

layer.add(welcome);

layer.draw();
