// 接口( Interface )
// 用来建立某种代码约定，使得其他开发者在调用某个方法或创建新的类时必须遵循接口所定义的代码约定
interface IPerson {

    name: string;
    age: number;

}

class Person1 {

    // 当接口用作一个方法参数的类型时，在调用方法时，ts 会检查这个参数是否满足接口所声明的所有属性
    constructor(public config: IPerson) {

    }

}

var iP1 = new Person1({
    name: 'zhangsan',
    age: 18
});


// 接口声明方法
interface Animal {
    eat();
}

// Sheep 类实现 Animal 接口
class Sheep implements Animal {
    eat() {
        console.log('I eat grass');
    }
}

class Tiger implements Animal {
    eat() {
        console.log('I eat meat');
    }
}


