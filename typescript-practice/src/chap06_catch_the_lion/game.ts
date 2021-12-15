import {Board, Cell, DeadZone} from "./board";
import {Player, PlayerType} from "./player";
import {Lion} from "./Piece";

//name Export
export class Game {
    private selectedCell: Cell;
    private turn = 0;
    private currentPlayer: Player;
    private gameInfoEl = document.querySelector('.alert');
    //게임 상태 ( 진행중, 종료됨)
    private state: 'STARTED' | 'END' = 'STARTED';
    //player
    readonly upperPlayer = new Player(PlayerType.UPPER);
    readonly lowerPlayer = new Player(PlayerType.LOWER);

    readonly board = new Board(this.upperPlayer, this.lowerPlayer);
    readonly upperDeadZone = new DeadZone('upper');
    readonly lowerDeadZone = new DeadZone('lower');


    constructor() {
        const boardContainer = document.querySelector('.board-container');
        boardContainer.firstChild.remove();
        boardContainer.appendChild(this.board._el);

        this.currentPlayer = this.upperPlayer;
        this.board.render();
        this.renderInfo();

        this.board._el.addEventListener('click', e => {
            if (this.state === 'END') {
                return false;
            }

            if (e.target instanceof HTMLElement) {
                let cellEl: HTMLElement;
                if (e.target.classList.contains('cell')) {
                    cellEl = e.target;
                } else if (e.target.classList.contains('piece')) {
                    cellEl = e.target.parentElement;
                } else {
                    return false;
                }
                const cell = this.board.map.get(cellEl);

                if (this.isCurrentUserPiece(cell)) {
                    this.select(cell);
                    return false;
                }

                if (this.selectedCell) {
                    this.move(cell);
                    this.changeTurn();
                }
            }
        });
    }

    isCurrentUserPiece(cell: Cell) {
        return cell !== null && cell.getPiece() != null && cell.getPiece().ownerType === this.currentPlayer.type
    }

    //말 이동시 이벤트
    select(cell: Cell) {
        //선택된 말이 없을 때 
        if (cell.getPiece() === null) {
            return;
        }
        //자기 말만 선택
        if (cell.getPiece().ownerType !== this.currentPlayer.type) {
            return;
        }
        if (this.selectedCell) {
            this.selectedCell.deActive();
            this.selectedCell.render();
        }

        this.selectedCell = cell;
        cell.active();
        cell.render();
    }

    move(cell: Cell) {
        this.selectedCell.deActive();
        const killed = this.selectedCell.getPiece().move(this.selectedCell, cell).getKilled();
        this.selectedCell = cell;
        //죽은 말이 있으면
        if (killed) {
            //윗 진영 말이면 아래 쪽 데드존으로 이동
            if (killed.ownerType === PlayerType.UPPER) {
                this.lowerDeadZone.put(killed);
                //아랫 진영 말이면 윗 쪽 데드존으로 이동
            } else {
                this.upperDeadZone.put(killed);
            }

            //죽은 말이 사자일 경우 게임 종료
            if (killed instanceof Lion) {
                this.state = 'END';
            }
        }
    }

    renderInfo(extraMessage?: string) {
        this.gameInfoEl.innerHTML = `#${this.turn}턴 ${this.currentPlayer.type} 차례 ${(extraMessage) ? '| ' + extraMessage : ''}`;
    }

    changeTurn() {
        this.selectedCell.deActive();
        this.selectedCell = null;

        if (this.state === 'END') {
            this.renderInfo('END!');
        } else {
            this.turn += 1;
            this.currentPlayer = (this.currentPlayer === this.lowerPlayer) ? this.upperPlayer : this.lowerPlayer;
            this.renderInfo();
        }
        this.board.render();
    }
}

//default Export
const version = 'v1';
export default version