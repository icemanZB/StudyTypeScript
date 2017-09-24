class Woman {

    constructor(public name: string) {
        this.name = name;
    }

    work() {
        console.log('I\'m working');
    }
}

// 泛型：参数化的类型，一般用来限制集合的内容
var works: Array<Woman> = [];
works[0] = new Woman('Alice');