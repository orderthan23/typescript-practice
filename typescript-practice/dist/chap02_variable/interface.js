const myTv = {
    turnOn() {
    },
    turnOff() {
    },
};
function tryTurnOn(tv) {
    tv.turnOn();
}
tryTurnOn(myTv);
function createBoard() {
    const cells = [];
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 3; col++) {
            cells.push({ row, col });
        }
    }
}
const board = createBoard();
board[0].piece = {
    move(from, to) {
        return true;
    }
};
//# sourceMappingURL=interface.js.map