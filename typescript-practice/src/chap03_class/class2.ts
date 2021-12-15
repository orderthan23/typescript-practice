interface Person {
    name: string;

    say(): void;
}

interface Programmer {
    writeCode(requirement: string): string;
}

//클래스에서 인터페이스를 구현 가능(implements)
// 다중 implements 가능
// @ts-ignore
class KoreanProgrammer extends Korean implements Programmer {
    constructor(public name: string, public jumin: number) {
        super(name);
    }

    say(message: string): void {
        console.log(message);
    }

    writeCode(requirement: string): string {
        console.log(requirement);
        return requirement + "......";
    }

    loveKimchi() {
        console.log("love ~ kimchi")
    }

    loveKimChi(): void {
    }
}


const jay = new KoreanProgrammer('jay', 2222);

// 추상클래스는 인스턴스화 할 수 없음
//const jay2 = new Korean('jay');

//abstract 클래스 (추상 클래스)
//추상클래스에선 미구현 자손클래스가 구현해야함

abstract class Korean implements Person {
    constructor(public name: string) {
    }

    // @ts-ignore
    say(msg: string): void {
        console.log(msg);
    }

    public abstract jumin: number;

    abstract loveKimChi(): void;


}