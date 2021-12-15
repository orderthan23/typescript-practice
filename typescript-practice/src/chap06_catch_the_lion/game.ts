import {Board, DeadZone} from "./board";
import {Player, PlayerType} from "./player";

//name Export
export class Game {
    readonly board = new Board();
    readonly upperDeadZone = new DeadZone('upper');
    readonly lowerDeadZone = new DeadZone('lower');

    //player
    readonly upperPlayer = new Player(PlayerType.UPPER);
    readonly lowerPlayer = new Player(PlayerType.LOWER);

    constructor() {
        const boardContainer = document.querySelector('.board-container');
        boardContainer.firstChild.remove();
        boardContainer.appendChild(this.board._el);
    }
}

//default Export
const version = 'v1';
export default version