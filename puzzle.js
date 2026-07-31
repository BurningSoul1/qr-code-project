// Puzzle configuration

const ROWS = 5;
const COLS = 6;

const PIECE_WIDTH = 120;
const PIECE_HEIGHT = 120;

const puzzleImage = new Image();
puzzleImage.src = "assets/christ-the-redeemer.jpg";

const puzzlePieces = [];

puzzleImage.onload = () => {
    createPuzzle();
};

function createPuzzle() {

    for (let row = 0; row < ROWS; row++) {

        for (let col = 0; col < COLS; col++) {

            createPiece(row, col);

        }

    }

    layer.draw();

}

function createPiece(row, col) {

    const piece = new Konva.Group({

        x: Math.random() * 750 + 80,

        y: Math.random() * 450 + 80,

        draggable: true

    });

    const image = new Konva.Image({

        image: puzzleImage,

        width: PIECE_WIDTH,

        height: PIECE_HEIGHT,

        crop: {

            x: col * PIECE_WIDTH,

            y: row * PIECE_HEIGHT,

            width: PIECE_WIDTH,

            height: PIECE_HEIGHT

        }

    });

    piece.add(image);

    piece.correctX = col * PIECE_WIDTH;
    piece.correctY = row * PIECE_HEIGHT;

    piece.on("dragstart", () => {

        piece.moveToTop();

    });

    piece.on("dragend", () => {

        increaseMoves();

    });

    puzzleLayer.add(piece);

    puzzlePieces.push(piece);

}
