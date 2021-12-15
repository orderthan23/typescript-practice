//윗쪽과 아랫쪽에 대한 타입을 enum 타입으로 구현
import {Piece} from "./Piece";

export enum PlayerType{
    UPPER = 'UPPER',
    LOWER = 'LOWER',
}

export class Player{
    private pieces: Piece[];

    constructor(public readonly type: PlayerType){

    }
}