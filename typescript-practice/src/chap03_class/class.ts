//ES 6에 새로 등장한 문법 Class 문법을 통해 특정 타입의 객체를 생성할 수 있음

interface User {
    name: string
}

interface Product {
    id: string;
    price: number;
}

class Cart {
    //ES6에서는 constructor에만 property 정의가 가능
    //현재 class property라는 문법으로 클래스에 property를 정의활 수 있도록 논의중
    //타입스크립트는 접근제한자를 달수 있음 public, private, protected  default = public


    //protected는 상속 객체에서는 접근 가능
    // protected user: User;
    //private store: object;

    // constructor(user) {
    //     this.user = user;
    //     this.store = {};
    // }

    //생성자 매개변수에 접근제한자를 걸어 한번에 선언 가능
    constructor(public user: User, private store: object = {}) {
      // this.store = {};
    }

    put(id: string, product: Product) {
        this.store[id] = product;
    }

    get(id: string) {
        return this.store[id];
    }
}

class PromotionCart extends Cart {
    addPromotion() {
        this.user
    }
}

const cart2 = new PromotionCart({name: 'john'});
//부모에서 정의된 함수 사용 가능
//cart2.put("", {});
const cartJohn = new Cart({name: 'john'});
const cartJay = new Cart({name: 'jay'});
