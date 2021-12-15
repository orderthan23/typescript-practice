//인터페이스를 통해 하나의 타입을 정의(행위를 기술, 구현체가 없음)
interface TV {
    turnOn(): void;

    turnOff(): void;
}

//myTv는 TV 타입에서 정의한 타입만 기술 가능
const myTv: TV = {
    turnOn() {
    },

    turnOff() {
    },
}

//인터페이스의 장점
//실제 구현체는 없지만 도메인에 대한 정보를 짐작할 수 있음

function tryTurnOn(tv: TV) {
    tv.turnOn();
}

tryTurnOn(myTv);


//행위 없이 속성만 정의할 수 도 있음
interface Cell {
    row: number;
    col: number;
    //? 표시시 필수값이 아닌 옵션값으로 변경됨
    piece?: Piece;
}

interface SignUp {
    email: string;
    id: string;
    password: string;
}

function ajaxSignUp(data: SignUp){
}

ajaxSignUp({
    id : "",
    email : "",
    password : "",
});

interface Piece {
    move(from: Cell, to: Cell): boolean;
}

function createBoard() {
    const cells: Cell[] = [];
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 3; col++) {
            cells.push({row, col});
        }
    }
}

const board = createBoard();
board[0].piece = {
    move(from: Cell, to: Cell) {
        return true;
    }
}